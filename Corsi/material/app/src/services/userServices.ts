/// <reference path="../_all.ts" />

module ContactManagerApp {

    export interface IUserService {
        loadAllUsers(): ng.IPromise<User[]>;
        selectedUser: User;
    }

    export class UserService implements IUserService {

        public selectedUser: User = null;

        static $inject= ["$q"];

        constructor(private $q: ng.IQService) { }

        loadAllUsers(): ng.IPromise<User[]> {
            return this.$q.when(this.users);
        }

        private users: User[] = [
            {
                name: "Erick Riley",
                avatar: "svg-1",
                bio: "I have, have together.",
                notes: [
                    { title: "Pay back dinner", date: new Date("2016-01-12")},
                    { title: "Buy flowers for birthday", date: new Date("2016-01-19")}
                ]
            },
            {
                name: "Levi Neal",
                avatar: "svg-2",
                bio: "After fill. Moving and. His it days life herb, darkness set Seasons.",
                notes: [
                ]
            },
            {
                name: "Sandy Armstrong",
                avatar: "svg-3",
                bio: "Make beginning midst life abundantly from in after light.",
                notes: [
                ]
            },
            {
                name: "Marcia	Higgins",
                avatar: "svg-4",
                bio: "Made whales called whose.",
                notes: [
                ]
            }
        ];
    }
}