module gaugeAngularWithTS.Services {

    export class GaugeService implements gaugeAngularWithTS.Interfaces.IGaugeService {

        getScale(): Interfaces.IScale {
            let label: Interfaces.ILabel = {
                visible: true, horizontalAlignment: null, indentFromTick: null,
                text: null, verticalAlignment: null
            };
            let tick: Interfaces.ITick = { visible: false };
            let scale: Interfaces.IScale = {
                startValue: 0, endValue: 0,
                tickInterval: 100, label: label,
                tick: tick, minorTick: tick
            };
            return scale;
        }


        getLoadingIndicator(): Interfaces.ILoadingIndicator {
            let indicator: Interfaces.ILoadingIndicator = { show: true };
            return indicator;
        }

        getRangeContainer(first: number, last: number): Interfaces.IRangeContainer {

            let range1: Interfaces.IRange = {
                color: "red", startValue: 0, endValue: first
            };

            let range2: Interfaces.IRange = {
                color: "#cecece", startValue: first, endValue: last
            };
            let rangeContainer: Interfaces.IRangeContainer = {
                range: [range1, range2],
                offset: null, width: null
            };
            return rangeContainer;
        }

        getValueIndicator(): Interfaces.IValueIndicator {
            let indicator: Interfaces.IValueIndicator = { lenght: 0, offset: 0, width: 0, text: null };
            return indicator;
        }

        getSubvalueIndicator(): Interfaces.ISubvalueIndicator {
            let subIndicator: Interfaces.ISubvalueIndicator = {
                color: "#77DD77", offset: -40, type: "triangleMarker"
            };
            return subIndicator;
        }

        getTitle(): Interfaces.IGaugeTitle {
            let font: Interfaces.IGaugeFont = { size: 28, color: null, family: null, opacity: null, weight: null };
            let title: Interfaces.IGaugeTitle = { text: "Gross Sales", font: font };
            return title;
        }

        getToolTip(): Interfaces.ITooltip {
            let result: Interfaces.ITooltip = { enabled: true };
            return result;
        }

        getBindingOptions(): Interfaces.IBindingOptions {
            let options: Interfaces.IBindingOptions = { value: "gauge.value", subvalues: "gauge.subvalues"};
            return options;
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