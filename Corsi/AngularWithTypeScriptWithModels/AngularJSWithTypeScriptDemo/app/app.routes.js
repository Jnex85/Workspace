/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
var gaugeAngularWithTS;
(function (gaugeAngularWithTS) {
    var Routes = /** @class */ (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", { controller: "gaugeAngularWithTS.controllers.gaugeController", templateUrl: "/app/views/gauge.html", controllerAs: "gauge" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    }());
    gaugeAngularWithTS.Routes = Routes;
})(gaugeAngularWithTS || (gaugeAngularWithTS = {}));
//# sourceMappingURL=app.routes.js.map