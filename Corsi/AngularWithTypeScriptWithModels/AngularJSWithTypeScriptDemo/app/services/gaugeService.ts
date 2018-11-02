/// <reference path="../interfaces/interfaces.ts" />
module gaugeAngularWithTS.Services {
    "use strict";


    export class GaugeService implements gaugeAngularWithTS.Interfaces.IGaugeService {

        public getScale(): gaugeAngularWithTS.Interfaces.Scale {
            let label: gaugeAngularWithTS.Interfaces.Label = new gaugeAngularWithTS.Interfaces.Label(true);
            let tick: gaugeAngularWithTS.Interfaces.Tick = new gaugeAngularWithTS.Interfaces.Tick(false);
            let minorTick: gaugeAngularWithTS.Interfaces.Tick = new gaugeAngularWithTS.Interfaces.Tick(false);
            let scale: gaugeAngularWithTS.Interfaces.Scale = new gaugeAngularWithTS.Interfaces.Scale(0, 100, 100, label, tick, minorTick);
            return scale;
        }

        getLoadingIndicator(): gaugeAngularWithTS.Interfaces.LoadingIndicator {
            return new gaugeAngularWithTS.Interfaces.LoadingIndicator(true);
        }

        getRangeContainer(first: number, last: number): gaugeAngularWithTS.Interfaces.RangeContainer {

            let range1: gaugeAngularWithTS.Interfaces.Range = new gaugeAngularWithTS.Interfaces.Range(0, first, "red");
            let range2: gaugeAngularWithTS.Interfaces.Range = new gaugeAngularWithTS.Interfaces.Range(first, last, "#cecece");
            let rangeList: gaugeAngularWithTS.Interfaces.Range[] = [range1, range2];
            let rangeContainer: gaugeAngularWithTS.Interfaces.RangeContainer = new gaugeAngularWithTS.Interfaces.RangeContainer(10, 45, rangeList);
            return rangeContainer;
        }

        getValueIndicator(): gaugeAngularWithTS.Interfaces.ValueIndicator {
            let indicator: gaugeAngularWithTS.Interfaces.ValueIndicator = new gaugeAngularWithTS.Interfaces.ValueIndicator(0, 0, 0);
            return indicator;
        }

        getSubvalueIndicator(): gaugeAngularWithTS.Interfaces.SubvalueIndicator {
            let subIndicator: gaugeAngularWithTS.Interfaces.SubvalueIndicator = new gaugeAngularWithTS.Interfaces.SubvalueIndicator(-40, "triangleMarker", "#77DD77");
            return subIndicator;
        }

        getTitle(): gaugeAngularWithTS.Interfaces.GaugeTitle {
            let font: gaugeAngularWithTS.Interfaces.GaugeFont = new gaugeAngularWithTS.Interfaces.GaugeFont(null, null, null, 28, null);
            let title: gaugeAngularWithTS.Interfaces.GaugeTitle = new gaugeAngularWithTS.Interfaces.GaugeTitle("Gross Sales", font);
            return title;
        }

        getToolTip(): gaugeAngularWithTS.Interfaces.Tooltip {
            return new gaugeAngularWithTS.Interfaces.Tooltip(true);
        }

        getBindingOptions(): gaugeAngularWithTS.Interfaces.BindingOptions {
            return new gaugeAngularWithTS.Interfaces.BindingOptions("gauge.value", "gauge.subvalues");
        }

        httpService: ng.IHttpService
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

    }
    angular.module("gaugeAngularWithTS").service("gaugeAngularWithTS.Services.GaugeService", GaugeService);
} 







    //export class PlayListService implements gaugeAngularWithTS.Interfaces.IPlaylistService {
    //    httpService: ng.IHttpService
    //    static $inject = ["$http"];
    //    constructor($http: ng.IHttpService) {
    //        this.httpService = $http;
    //    }

    //    getPlayList = () => {
    //        //For the purpose of this demo I am returning the hard coded values, hoever in real world application
    //        //You would probably use "this.httpService.get" method to call backend REST apis to fetch the data from server.

    //        var res: Array<gaugeAngularWithTS.Interfaces.ITrack> = [
    //            { title: "Numb", artist: "Linkin Park", rating: 5 },
    //            { title: "Fire Flies", artist: "Owl City", rating: 4.3 },
    //            { title: "Yellow", artist: "coldplay", rating: 4.5 },
    //            { title: "Skyfall", artist: "Adele", rating: 4.5 }
    //        ];
    //        return res;
    //    }
    //}
    //angular.module("gaugeAngularWithTS").service("gaugeAngularWithTS.Services.PlayListService", PlayListService);