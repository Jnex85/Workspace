namespace angularJsApp {
    "use strict";

    class BaseComponentController implements ng.IComponentController {

    }

    const componentOptions: ng.IComponentOptions = {
        templateUrl: "../../dist/view/base.html",
        controller: BaseComponentController,
        bindings: {
        }
    };

    angular.module("angularJsAppModule")
    .component("jneBaseComponent", componentOptions);
}