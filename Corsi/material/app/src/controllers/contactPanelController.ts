/// <reference path="../_all.ts" />

module ContactManagerApp {

    export class ContactPanelController {

        static $inject = ["userService", "$mdBottomSheet"];
        user: User;
        actions = [
            { name: "Phone"       , icon: "phone" },
            { name: "Twitter"     , icon: "twitter" },
            { name: "Google+"     , icon: "google_plus" },
            { name: "Hangout"     , icon: "hangouts" }
        ];

        constructor(private userService: IUserService,
            private $mdBottomSheet: any) {
                this.user = userService.selectedUser;
        }


        submitContact(action: any): void {
            this.$mdBottomSheet.hide(action);
        }

    }
}