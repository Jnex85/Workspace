var angularJsApp;
(function (angularJsApp) {
    "use strict";
    class BaseService {
        constructor($q) {
            this.$q = $q;
        }
        getNameList() {
            throw new Error("Method not implemented.");
        }
    }
    BaseService.$inject = [
        "$q"
    ];
    angular
        .module("angularJsAppModule")
        .service("BaseService", BaseService);
})(angularJsApp || (angularJsApp = {}));
//# sourceMappingURL=baseServiceComponent.js.map