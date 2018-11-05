namespace angularJsApp {
    "use strict";

    export interface IBaseComponentService {
        getNameList():string [];
    }

    class BaseService implements IBaseComponentService {
        static $inject = [
            "$q"
        ];

        constructor(private $q: ng.IQService) { }

        getNameList(): string[] {
            throw new Error("Method not implemented.");
        }
    }

    angular
        .module("angularJsAppModule")
        .service("BaseService", BaseService);
}