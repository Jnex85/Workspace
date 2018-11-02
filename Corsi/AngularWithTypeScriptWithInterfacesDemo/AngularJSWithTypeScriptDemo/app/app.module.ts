((): void=> {
    var app = angular.module("gaugeAngularWithTS", ['ngRoute', "dx"]);

    app.config(gaugeAngularWithTS.Routes.configureRoutes);
})() 