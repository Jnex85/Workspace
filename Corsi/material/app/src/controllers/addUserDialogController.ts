/// <reference path="../_all.ts" />

module ContactManagerApp {

    export class AddUserDialogController {

        static $inject = ["$mdDialog"];
        user: CreateUser;
        avatars = ["svg-1", "svg-2", "svg-3", "svg-4"];

        constructor(private $mdDialog: any) {}

        cancel(): void {
            this.$mdDialog.cancel();
        }

        save():void {
            this.$mdDialog.hide(this.user);
        }
    }
}