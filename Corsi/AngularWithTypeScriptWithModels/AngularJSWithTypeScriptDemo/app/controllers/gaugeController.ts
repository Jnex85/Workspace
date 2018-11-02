/// <reference path="../services/gaugeService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module gaugeAngularWithTS.controllers {
    "use strict";


    export class GaugeController {

        gaugeService: gaugeAngularWithTS.Interfaces.IGaugeService;
        textContentShow: string;
        gauge: gaugeAngularWithTS.Interfaces.Gauge;
        gaugeOptions: gaugeAngularWithTS.Interfaces.GaugeOptions;
        SubValue1: gaugeAngularWithTS.Interfaces.GaugeSubvalue;
        SubValue2: gaugeAngularWithTS.Interfaces.GaugeSubvalue;

        static $inject = ["gaugeAngularWithTS.Services.GaugeService"];
        constructor(gaugeService: gaugeAngularWithTS.Interfaces.IGaugeService) {
            this.gaugeService = gaugeService;
            this.textContentShow = "gauge";
            this.buildGauge();
        }

        public buildGauge(): void {
            this.getGauge();
            this.getSubValues();
            this.GetGaugeOptions();
        }

        public getGauge(): void {
            let subvalues = [23, 56];

            this.gauge = new gaugeAngularWithTS.Interfaces.Gauge([23, 56]);
        }

        public getSubValues(): void {
            let bindingOption1 = new gaugeAngularWithTS.Interfaces.BindingOptions("subValueOne", null);
            let bindingOption2 = new gaugeAngularWithTS.Interfaces.BindingOptions("subValueTwo", null);
            this.SubValue1 = new gaugeAngularWithTS.Interfaces.GaugeSubvalue(bindingOption1, 0, 100, 50, true);
            this.SubValue2 = new gaugeAngularWithTS.Interfaces.GaugeSubvalue(bindingOption2, 0, 100, 50, true);
        }


        public GetGaugeOptions() {
            let _bindingOptions: gaugeAngularWithTS.Interfaces.BindingOptions = this.gaugeService.getBindingOptions();
            let _scale: gaugeAngularWithTS.Interfaces.Scale = this.gaugeService.getScale();
            let _loadingIndicator: gaugeAngularWithTS.Interfaces.LoadingIndicator = this.gaugeService.getLoadingIndicator();
            let _rangeContainer: gaugeAngularWithTS.Interfaces.RangeContainer =
                this.gaugeService.getRangeContainer(Math.floor(Math.random() * (100 - 1 + 1)) + 1,
                    Math.floor(Math.random() * (100 - 1 + 1)) + 1);
            let _valueIndicator: gaugeAngularWithTS.Interfaces.ValueIndicator = this.gaugeService.getValueIndicator();
            let _subvalueIndicator: gaugeAngularWithTS.Interfaces.SubvalueIndicator = this.gaugeService.getSubvalueIndicator();
            let _title: gaugeAngularWithTS.Interfaces.GaugeTitle = this.gaugeService.getTitle();
            let _tooltip: gaugeAngularWithTS.Interfaces.Tooltip = this.gaugeService.getToolTip();
            this.gaugeOptions = new gaugeAngularWithTS.Interfaces.GaugeOptions(_bindingOptions, _scale,
                _loadingIndicator, _rangeContainer, _valueIndicator, _subvalueIndicator, _title, _tooltip);
        }
    }


    //window.onload = () => {

    //    let gaugeController = new GaugeController();
    //    this.buildGauge();
    //};

    angular.module("gaugeAngularWithTS").controller("gaugeAngularWithTS.controllers.gaugeController", GaugeController);
} 








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