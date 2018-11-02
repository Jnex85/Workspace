/// <reference path="_all.ts" />
var angularJsApp;
(function (angularJsApp) {
    var app = angular.module("angularJsAppModule", ["ngRoute", "ngMaterial"]);
    /*   app.value("componentBorders", true);
  
      app.run(function (componentBorders: any) {
          if (componentBorders) {
              if (app._invokeQueue) {
                  app._invokeQueue.forEach(function (item: any) {
                      if (item[1] === "component") {
                          var componentName: any = item[2][0];
                          var componentProperties: any = item[2][1];
                          if (componentProperties.templateUrl) {
                              var templateUrl: any = componentProperties.templateUrl;
                              delete componentProperties.templateUrl;
                              componentProperties.template =
                              "<div class='component-borders'><b>" +
                               componentName + "</b><div ng-include='\'" + templateUrl + "\'></div></div>";
                          } else {
                              var template: any = "<div class='component-borders'>"
                              + componentName + "<div>" + componentProperties.template + "</div></div>";
                              componentProperties.template = template;
                          }
                      }
                  });
              }
          }
      }); */
})(angularJsApp || (angularJsApp = {}));
