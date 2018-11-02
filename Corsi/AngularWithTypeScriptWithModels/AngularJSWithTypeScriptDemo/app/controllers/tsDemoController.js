/// <reference path="../services/playlistservice.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var gaugeAngularWithTS;
(function (gaugeAngularWithTS) {
    var controllers;
    (function (controllers) {
        var TSDemoController = /** @class */ (function () {
            function TSDemoController(playListService) {
                var _this = this;
                this.getFavourites = function () {
                    _this.favorites = _this.playListService.getPlayList();
                };
                this.playListService = playListService;
            }
            TSDemoController.$inject = ["gaugeAngularWithTS.Services.PlayListService"];
            return TSDemoController;
        }());
        controllers.TSDemoController = TSDemoController;
        angular.module("gaugeAngularWithTS").controller("gaugeAngularWithTS.controllers.tsDemoController", TSDemoController);
    })(controllers = gaugeAngularWithTS.controllers || (gaugeAngularWithTS.controllers = {}));
})(gaugeAngularWithTS || (gaugeAngularWithTS = {}));
//# sourceMappingURL=tsDemoController.js.map