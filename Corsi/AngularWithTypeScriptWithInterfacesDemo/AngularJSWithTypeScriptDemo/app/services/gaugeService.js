var gaugeAngularWithTS;
(function (gaugeAngularWithTS) {
    var Services;
    (function (Services) {
        var GaugeService = /** @class */ (function () {
            function GaugeService($http) {
                this.httpService = $http;
            }
            GaugeService.prototype.getScale = function () {
                var label = {
                    visible: true, horizontalAlignment: null, indentFromTick: null,
                    text: null, verticalAlignment: null
                };
                var tick = { visible: false };
                var scale = {
                    startValue: 0, endValue: 0,
                    tickInterval: 100, label: label,
                    tick: tick, minorTick: tick
                };
                return scale;
            };
            GaugeService.prototype.getLoadingIndicator = function () {
                var indicator = { show: true };
                return indicator;
            };
            GaugeService.prototype.getRangeContainer = function (first, last) {
                var range1 = {
                    color: "red", startValue: 0, endValue: first
                };
                var range2 = {
                    color: "#cecece", startValue: first, endValue: last
                };
                var rangeContainer = {
                    range: [range1, range2],
                    offset: null, width: null
                };
                return rangeContainer;
            };
            GaugeService.prototype.getValueIndicator = function () {
                var indicator = { lenght: 0, offset: 0, width: 0, text: null };
                return indicator;
            };
            GaugeService.prototype.getSubvalueIndicator = function () {
                var subIndicator = {
                    color: "#77DD77", offset: -40, type: "triangleMarker"
                };
                return subIndicator;
            };
            GaugeService.prototype.getTitle = function () {
                var font = { size: 28, color: null, family: null, opacity: null, weight: null };
                var title = { text: "Gross Sales", font: font };
                return title;
            };
            GaugeService.prototype.getToolTip = function () {
                var result = { enabled: true };
                return result;
            };
            GaugeService.prototype.getBindingOptions = function () {
                var options = { value: "gauge.value", subvalues: "gauge.subvalues" };
                return options;
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