/// <reference path="../interfaces/interfaces.ts" />
var gaugeAngularWithTS;
(function (gaugeAngularWithTS) {
    var Services;
    (function (Services) {
        var GaugeService = /** @class */ (function () {
            function GaugeService($http) {
                this.httpService = $http;
            }
            GaugeService.prototype.getScale = function () {
                throw new Error("Method not implemented.");
            };
            GaugeService.prototype.getLoadingIndicator = function () {
                throw new Error("Method not implemented.");
            };
            GaugeService.prototype.getRangeContainer = function (first, last) {
                throw new Error("Method not implemented.");
            };
            GaugeService.prototype.getValueIndicator = function () {
                throw new Error("Method not implemented.");
            };
            GaugeService.prototype.getSubvalueIndicator = function () {
                throw new Error("Method not implemented.");
            };
            GaugeService.prototype.getTitle = function () {
                throw new Error("Method not implemented.");
            };
            GaugeService.prototype.getToolTip = function () {
                throw new Error("Method not implemented.");
            };
            GaugeService.$inject = ["$http"];
            return GaugeService;
        }());
        Services.GaugeService = GaugeService;
        angular.module("gaugeAngularWithTS").service("gaugeAngularWithTS.Services.GaugeService", GaugeService);
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
    })(Services = gaugeAngularWithTS.Services || (gaugeAngularWithTS.Services = {}));
})(gaugeAngularWithTS || (gaugeAngularWithTS = {}));
//# sourceMappingURL=playlistservice.js.map