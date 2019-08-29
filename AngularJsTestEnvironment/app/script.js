/// <reference path="../resources/kendo/kendo.extensions.d.ts"/>
/// <reference path="../node_modules/@types/kendo-ui/index.d.ts"/>
/// <reference path="../node_modules/@types/angular/index.d.ts"/>
var Config = /** @class */ (function () {
    // tslint:disable-next-line:no-empty
    function Config() {
    }
    Config.$inject = [];
    return Config;
}());
var Controller = /** @class */ (function () {
    // tslint:disable-next-line:no-empty
    function Controller() {
        var _this = this;
        this.data = [
            { text: "<script>alert('ciao');</script>", value: "<script>alert('ciao');</script>" },
            { text: "Item 2", value: "2" },
            { text: "Item 3", value: "3" }
        ];
        // tslint:disable-next-line:no-empty
        this.$onInit = function () {
            _this.comboBoxDataSource = new kendo.data.DataSource({
                transport: {
                    read: function (i) {
                        i.success(_this.data);
                    }
                }
            });
            _this.comboBoxOptions = {
                dataValueField: "text",
                dataTextField: "value",
                template: function (item) {
                    return ["<div>" + item.value + "</div>"];
                },
                dataSource: _this.comboBoxDataSource
            };
            _this.comboBox = new kendo.ui.ComboBox(document.getElementById("comboBox"), _this.comboBoxOptions);
        };
        // tslint:disable-next-line:no-empty
        this.$onChange = function () {
        };
    }
    Controller.$inject = [];
    return Controller;
}());
var containerOptions = {
    templateUrl: "app/template.html",
    controller: Controller,
    controllerAs: "ctrl"
};
angular
    .module("my-playground", ["ngMaterial", "ngMessages", "dx"])
    .config(Config)
    .component("playground", containerOptions);
//# sourceMappingURL=script.js.map