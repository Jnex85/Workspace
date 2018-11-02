namespace angularJsApp {
    "use strict";

    class BaseComponentController {

    }

    angular
        .module("angularJsAppModule")
        .component("baseComponent", {
            bindings: { },
            controller: BaseComponentController,
            templateUrl: "../app/view/base.html"
        });
}