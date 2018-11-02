/// <reference path="../_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = /** @class */ (function () {
        function MainController(userService, $mdSidenav, $mdToast, $mdDialog, $mdMedia) {
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.$mdToast = $mdToast;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.users = [];
            this.message = "Hello from mainController";
            this.selected = null;
            this.searchText = "";
            this.tabIndex = 0;
            var self = this;
            this.userService.loadAllUsers()
                .then(function (users) {
                self.users = users;
                self.selectedUser = users[0];
                console.log(self.userService);
            });
        }
        MainController.prototype.toggleSidenav = function () {
            this.$mdSidenav("left").toggle();
        };
        MainController.prototype.selectUser = function (user) {
            this.selected = user;
            var sidenav = this.$mdSidenav("left");
            if (sidenav.isOpen) {
                sidenav.close();
            }
            this.tabIndex = 0;
        };
        MainController.prototype.removeNote = function (note) {
            var foundIndex = this.selected.notes.indexOf(note);
            this.selected.notes.splice((foundIndex), 1);
            this.openToast("notes was removed!");
        };
        MainController.prototype.openToast = function (message) {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(message)
                .position("top right")
                .hideDelay(2000));
        };
        MainController.prototype.addUser = function ($event) {
            var self = this;
            var useFullScreen = (this.$mdMedia("sm") || this.$mdMedia("xs"));
            this.$mdDialog.show({
                templateUrl: "./dist/view/newUserDialog.html",
            }).then(function (user) {
                self.openToast("User Added");
            }, function () {
                console.log("You cancelled the dialog.");
            });
        };
        MainController.prototype.clearNotes = function ($event) {
            var confirm = this.$mdDialog.confirm()
                .title("Are you sure?")
                .textContent("All Notes will be deleted")
                .targetEvent($event)
                .ok("Yes")
                .cancel("No");
            var self = this;
            this.$mdDialog.show(confirm).then(function () {
                self.selected.notes = [];
                self.openToast("Notes Deleted!");
            });
        };
        MainController.$inject = ["userService", "$mdSidenav", "$mdToast", "$mdDialog", "$mdMedia"];
        return MainController;
    }());
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=mainController.1.js.map