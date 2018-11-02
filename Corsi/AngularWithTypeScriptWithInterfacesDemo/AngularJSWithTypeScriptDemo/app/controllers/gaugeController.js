var gaugeAngularWithTS;
(function (gaugeAngularWithTS) {
    var controllers;
    (function (controllers) {
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
                this.gauge = { subvalues: subvalues };
            };
            GaugeController.prototype.getSubValues = function () {
                var bindingOption1 = { value: "subValueOne", subvalues: null };
                var bindingOption2 = { value: "subValueTwo", subvalues: null };
                this.SubValue1 = { bindingOptions: bindingOption1, min: 0, max: 100, width: 50, showSpinButtons: true };
                this.SubValue2 = { bindingOptions: bindingOption2, min: 0, max: 100, width: 50, showSpinButtons: true };
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
                this.gaugeOptions = {
                    bindingOptions: _bindingOptions, scale: _scale,
                    loadingIndicator: _loadingIndicator, rangeContainer: _rangeContainer,
                    valueIndicator: _valueIndicator, subvalueIndicator: _subvalueIndicator,
                    title: _title, tooltip: _tooltip
                };
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