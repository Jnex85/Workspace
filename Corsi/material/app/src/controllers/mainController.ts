/// <reference path="../_all.ts" />

module ContactManagerApp {

    export class MainController {

        static $inject = ["userService",
        "$mdSidenav",
        "$mdToast",
        "$mdDialog",
        "$mdMedia",
        "$mdBottomSheet"];
        private users: User[] = [];
        newNote: Note = new Note("", null);
        selected: User = null;
        searchText: string = "";
        tabIndex:number = 0;
        formScope:any;

        constructor(private userService: IUserService,
            private $mdSidenav: angular.material.ISidenavService,
            private $mdToast: angular.material.IToastService,
            private $mdDialog: angular.material.IDialogService,
            private $mdMedia: angular.material.IMedia,
            private $mdBottomSheet: angular.material.IBottomSheetService) {
            var self:any = this;
            this.userService.loadAllUsers()
            .then((users:User[]) => {
                    self.users = users;
                    self.selectedUser = users[0];
                    self.userService.selectedUser = self.selectedUser;
                    console.log(self.userService);
                });
        }

        toggleSidenav(): void {
            this.$mdSidenav("left").toggle();
        }

        selectUser (user:User): void {
            this.selected = user;
            var sidenav:any = this.$mdSidenav("left");
            if(sidenav.isOpen) {
                sidenav.close();
            }
            this.tabIndex = 0;
        }

        showContactOptions($event: any): void {
            this.$mdBottomSheet.show({
                parent: angular.element(document.getElementById("wrapper")),
                templateUrl:"./dist/view/contactSheet.html",
                controller: ContactPanelController,
                controllerAs: "cp",
                bindToController: true,
                targetEvent: $event
            }).then((clickedItem) => {
                this.openToast(clickedItem.name + " clicked!");
            });
        }

        addNote():void {
            this.selected.notes.push(this.newNote);
            this.formScope.noteForm.$setUntouched();
            this.formScope.noteForm.$setPristine();
            this.newNote = new Note("", null);
            this.openToast("Note added!");
        }

        removeNote(note: Note): void {
            let foundIndex: number = this.selected.notes.indexOf(note);
            this.selected.notes.splice((foundIndex), 1);
            this.openToast("notes was removed!");
        }

        openToast(message:string):void {
            this.$mdToast.show(
                this.$mdToast.simple()
                .textContent(message)
                .position("top right")
                .hideDelay(2000)
            );
        }

        addUser($event: any): void  {
            let self:any = this;
            let useFullScreen: boolean = (this.$mdMedia("sm") || this.$mdMedia("xs"));
            this.$mdDialog.show({
                templateUrl: "./dist/view/newUserDialog.html",
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: AddUserDialogController,
                controllerAs: "ctrl",
                clickOutsideToClose: true,
                fullscreen:useFullScreen
            }).then((user: CreateUser)=> {
                let newUser: User = User.fromCreate(user);
                self.users.push(newUser);
                self.selectUser(newUser);
                self.openToast("User Added");
            }, ()=> {
                console.log("You cancelled the dialog.");
            });
        }

        clearNotes($event: any): void {
            let confirm:any = this.$mdDialog.confirm()
            .title("Are you sure?")
            .textContent("All Notes will be deleted")
            .targetEvent($event)
            .ok("Yes")
            .cancel("No");
            let self:any = this;
            this.$mdDialog.show(confirm).then(()=> {
                self.selected.notes= [];
                self.openToast("Notes Deleted!");
            });
        }

        setFormScope(scope:any):void {
            this.formScope = scope;
        }
    }
}