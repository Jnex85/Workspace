var angularJsApp;
(function (angularJsApp) {
    "use strict";
    class BaseComponentController {
    }
    const componentOptions = {
        templateUrl: "app/dist/view/base.html",
        controller: BaseComponentController,
        bindings: {
            model: "<"
        }
    };
    angular.module("angularJsAppModule")
        .component("jneBaseComponent", componentOptions);
})(angularJsApp || (angularJsApp = {}));
//# sourceMappingURL=baseComponent.js.map