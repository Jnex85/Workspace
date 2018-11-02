var angularJsApp;
(function (angularJsApp) {
    "use strict";
    var BaseComponentController = /** @class */ (function () {
        function BaseComponentController() {
        }
        return BaseComponentController;
    }());
    angular
        .module("angularJsAppModule")
        .component("baseComponent", {
        bindings: {},
        controller: BaseComponentController,
        templateUrl: "../app/view/base.html"
    });
})(angularJsApp || (angularJsApp = {}));
