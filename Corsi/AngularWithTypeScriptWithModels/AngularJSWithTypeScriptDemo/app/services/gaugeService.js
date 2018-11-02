/// <reference path="../interfaces/interfaces.ts" />
var gaugeAngularWithTS;
(function (gaugeAngularWithTS) {
    var Services;
    (function (Services) {
        "use strict";
        var GaugeService = /** @class */ (function () {
            function GaugeService($http) {
                this.httpService = $http;
            }
            GaugeService.prototype.getScale = function () {
                var label = new gaugeAngularWithTS.Interfaces.Label(true);
                var tick = new gaugeAngularWithTS.Interfaces.Tick(false);
                var minorTick = new gaugeAngularWithTS.Interfaces.Tick(false);
                var scale = new gaugeAngularWithTS.Interfaces.Scale(0, 100, 100, label, tick, minorTick);
                return scale;
            };
            GaugeService.prototype.getLoadingIndicator = function () {
                return new gaugeAngularWithTS.Interfaces.LoadingIndicator(true);
            };
            GaugeService.prototype.getRangeContainer = function (first, last) {
                var range1 = new gaugeAngularWithTS.Interfaces.Range(0, first, "red");
                var range2 = new gaugeAngularWithTS.Interfaces.Range(first, last, "#cecece");
                var rangeList = [range1, range2];
                var rangeContainer = new gaugeAngularWithTS.Interfaces.RangeContainer(10, 45, rangeList);
                return rangeContainer;
            };
            GaugeService.prototype.getValueIndicator = function () {
                var indicator = new gaugeAngularWithTS.Interfaces.ValueIndicator(0, 0, 0);
                return indicator;
            };
            GaugeService.prototype.getSubvalueIndicator = function () {
                var subIndicator = new gaugeAngularWithTS.Interfaces.SubvalueIndicator(-40, "triangleMarker", "#77DD77");
                return subIndicator;
            };
            GaugeService.prototype.getTitle = function () {
                var font = new gaugeAngularWithTS.Interfaces.GaugeFont(null, null, null, 28, null);
                var title = new gaugeAngularWithTS.Interfaces.GaugeTitle("Gross Sales", font);
                return title;
            };
            GaugeService.prototype.getToolTip = function () {
                return new gaugeAngularWithTS.Interfaces.Tooltip(true);
            };
            GaugeService.prototype.getBindingOptions = function () {
                return new gaugeAngularWithTS.Interfaces.BindingOptions("gauge.value", "gauge.subvalues");
            };
            GaugeService.$inject = ["$http"];
            return GaugeService;
        }());
        Services.GaugeService = GaugeService;
        angular.module("gaugeAngularWithTS").service("gaugeAngularWithTS.Services.GaugeService", GaugeService);
    })(Services = gaugeAngularWithTS.Services || (gaugeAngularWithTS.Services = {}));
})(gaugeAngularWithTS || (gaugeAngularWithTS = {}));
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
//# sourceMappingURL=gaugeService.js.map