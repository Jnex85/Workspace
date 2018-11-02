var angularJsApp;
(function (angularJsApp) {
    "use strict";
    class BaseComponentController {
    }
    const componentOptions = {
        templateUrl: "../../dist/view/base.html",
        controller: BaseComponentController,
        bindings: {}
    };
    angular.module("angularJsAppModule")
        .component("jneBaseComponent", componentOptions);
})(angularJsApp || (angularJsApp = {}));
//# sourceMappingURL=baseComponent.js.map