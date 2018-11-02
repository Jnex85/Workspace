module gaugeAngularWithTS.controllers {

    export class GaugeController {

        gaugeService: gaugeAngularWithTS.Interfaces.IGaugeService;
        textContentShow: string;
        gauge: gaugeAngularWithTS.Interfaces.IGauge;
        gaugeOptions: gaugeAngularWithTS.Interfaces.IGaugeOptions;
        SubValue1: gaugeAngularWithTS.Interfaces.IGaugeSubvalue;
        SubValue2: gaugeAngularWithTS.Interfaces.IGaugeSubvalue;

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
            this.gauge = { subvalues };
        }

        public getSubValues(): void {

            let bindingOption1: gaugeAngularWithTS.Interfaces.IBindingOptions = { value: "subValueOne", subvalues: null };
            let bindingOption2: gaugeAngularWithTS.Interfaces.IBindingOptions = { value: "subValueTwo", subvalues: null };

            this.SubValue1 = { bindingOptions: bindingOption1, min: 0, max: 100, width: 50, showSpinButtons: true }; 
            this.SubValue2 = { bindingOptions: bindingOption2, min: 0, max: 100, width: 50, showSpinButtons: true };
        }


        public GetGaugeOptions() {
            let _bindingOptions: gaugeAngularWithTS.Interfaces.IBindingOptions = this.gaugeService.getBindingOptions();
            let _scale: gaugeAngularWithTS.Interfaces.IScale = this.gaugeService.getScale();
            let _loadingIndicator: gaugeAngularWithTS.Interfaces.ILoadingIndicator = this.gaugeService.getLoadingIndicator();
            let _rangeContainer: gaugeAngularWithTS.Interfaces.IRangeContainer =
                this.gaugeService.getRangeContainer(Math.floor(Math.random() * (100 - 1 + 1)) + 1,
                    Math.floor(Math.random() * (100 - 1 + 1)) + 1);
            let _valueIndicator: gaugeAngularWithTS.Interfaces.IValueIndicator = this.gaugeService.getValueIndicator();
            let _subvalueIndicator: gaugeAngularWithTS.Interfaces.ISubvalueIndicator = this.gaugeService.getSubvalueIndicator();
            let _title: gaugeAngularWithTS.Interfaces.IGaugeTitle = this.gaugeService.getTitle();
            let _tooltip: gaugeAngularWithTS.Interfaces.ITooltip = this.gaugeService.getToolTip();

            this.gaugeOptions = {
                bindingOptions: _bindingOptions, scale: _scale,
                loadingIndicator: _loadingIndicator, rangeContainer: _rangeContainer,
                valueIndicator: _valueIndicator, subvalueIndicator: _subvalueIndicator,
                title: _title, tooltip: _tooltip
            };
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