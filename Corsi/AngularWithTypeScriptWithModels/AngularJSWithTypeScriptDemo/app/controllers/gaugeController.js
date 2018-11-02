/// <reference path="../services/gaugeService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var gaugeAngularWithTS;
(function (gaugeAngularWithTS) {
    var controllers;
    (function (controllers) {
        "use strict";
        var GaugeController = /** @class */ (function () {
            function GaugeController(gaugeService) {
                this.gaugeService = gaugeService;
                this.textContentShow = "gauge";
                this.buildGauge();
            }
            GaugeController.prototype.buildGauge = function () {
                this.getGauge();
                this.getSubValues();
                this.GetGaugeOptions();
            };
            GaugeController.prototype.getGauge = function () {
                var subvalues = [23, 56];
                this.gauge = new gaugeAngularWithTS.Interfaces.Gauge([23, 56]);
            };
            GaugeController.prototype.getSubValues = function () {
                var bindingOption1 = new gaugeAngularWithTS.Interfaces.BindingOptions("subValueOne", null);
                var bindingOption2 = new gaugeAngularWithTS.Interfaces.BindingOptions("subValueTwo", null);
                this.SubValue1 = new gaugeAngularWithTS.Interfaces.GaugeSubvalue(bindingOption1, 0, 100, 50, true);
                this.SubValue2 = new gaugeAngularWithTS.Interfaces.GaugeSubvalue(bindingOption2, 0, 100, 50, true);
            };
            GaugeController.prototype.GetGaugeOptions = function () {
                var _bindingOptions = this.gaugeService.getBindingOptions();
                var _scale = this.gaugeService.getScale();
                var _loadingIndicator = this.gaugeService.getLoadingIndicator();
                var _rangeContainer = this.gaugeService.getRangeContainer(Math.floor(Math.random() * (100 - 1 + 1)) + 1, Math.floor(Math.random() * (100 - 1 + 1)) + 1);
                var _valueIndicator = this.gaugeService.getValueIndicator();
                var _subvalueIndicator = this.gaugeService.getSubvalueIndicator();
                var _title = this.gaugeService.getTitle();
                var _tooltip = this.gaugeService.getToolTip();
                this.gaugeOptions = new gaugeAngularWithTS.Interfaces.GaugeOptions(_bindingOptions, _scale, _loadingIndicator, _rangeContainer, _valueIndicator, _subvalueIndicator, _title, _tooltip);
            };
            GaugeController.$inject = ["gaugeAngularWithTS.Services.GaugeService"];
            return GaugeController;
        }());
        controllers.GaugeController = GaugeController;
        //window.onload = () => {
        //    let gaugeController = new GaugeController();
        //    this.buildGauge();
        //};
        angular.module("gaugeAngularWithTS").controller("gaugeAngularWithTS.controllers.gaugeController", GaugeController);
    })(controllers = gaugeAngularWithTS.controllers || (gaugeAngularWithTS.controllers = {}));
})(gaugeAngularWithTS || (gaugeAngularWithTS = {}));
//export class TSDemoController {
//    playListService: gaugeAngularWithTS.Interfaces.IPlaylistService;
//    static $inject = ["gaugeAngularWithTS.Services.PlayListService"];
//    constructor(playListService: gaugeAngularWithTS.Interfaces.IPlaylistService) {
//        this.playListService = playListService;
//    }
//    favorites: Array<gaugeAngularWithTS.Interfaces.ITrack>;
//    getFavourites = () => {
//        this.favorites = this.playListService.getPlayList();
//    }
//}
//angular.module("gaugeAngularWithTS").controller("gaugeAngularWithTS.controllers.tsDemoController", TSDemoController);
//# sourceMappingURL=gaugeController.js.map