module gaugeAngularWithTS {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home", { controller: "gaugeAngularWithTS.controllers.gaugeController", templateUrl: "/app/views/gauge.html", controllerAs: "gauge" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        }
    }
}