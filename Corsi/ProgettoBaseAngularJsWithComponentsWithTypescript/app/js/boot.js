/// <reference path="_all.ts" />
var angularJsApp;
(function (angularJsApp) {
    var app = angular.module("angularJsAppModule", ["ngRoute", "ngMaterial"]);
    app.value("componentBorders", true);
    app.run(function (componentBorders) {
        if (componentBorders) {
            if (app._invokeQueue) {
                app._invokeQueue.forEach(function (item) {
                    if (item[1] === "component") {
                        var componentName = item[2][0];
                        var componentProperties = item[2][1];
                        if (componentProperties.templateUrl) {
                            var templateUrl = componentProperties.templateUrl;
                            delete componentProperties.templateUrl;
                            componentProperties.template =
                                "<div class='component-borders'><b>" +
                                    componentName + "</b><div ng-include='\'" + templateUrl + "\'></div></div>";
                        }
                        else {
                            var template = "<div class='component-borders'>"
                                + componentName + "<div>" + componentProperties.template + "</div></div>";
                            componentProperties.template = template;
                        }
                    }
                });
            }
        }
    });
    /*     app.config(function($stateProvider: any): void {
            var states: any = [
                {
                    name: "home",
                    url:"/",
                    template:"<base-component></base-component>",
                    component: "baseComponent"
                },
                {
                    name: "home2",
                    url:"/",
                    template:"<h1>HOME</h1>"
                },
                {
                    name: "courses",
                    url:"/courses",
                    template:"<courses-list></courses-list>"
                },
                {
                    name: "authors",
                    url:"/authors",
                    template:"<authors-list></authors-list>"
                },
            ];
            states.array.forEach(function(state:any): void {
                $stateProvider.state(state);
            });
        }); */
})(angularJsApp || (angularJsApp = {}));
//# sourceMappingURL=boot.js.map