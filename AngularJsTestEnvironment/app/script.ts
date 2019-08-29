/// <reference path="../resources/kendo/kendo.extensions.d.ts"/>
/// <reference path="../node_modules/@types/kendo-ui/index.d.ts"/>
/// <reference path="../node_modules/@types/angular/index.d.ts"/>

class Config {

    static $inject = [];
    // tslint:disable-next-line:no-empty
    constructor() {
    }

}


class Controller implements ng.IComponentController {

    comboBox: kendo.ui.ComboBox;
    comboBoxOptions: kendo.ui.ComboBoxOptions;
    comboBoxDataSource: kendo.data.DataSource;

    data: Array<any> = [
        { text: "<script>alert('ciao');</script>", value: "<script>alert('ciao');</script>" },
        { text: "Item 2", value: "2" },
        { text: "Item 3", value: "3" }
    ];

    static $inject = [];
    // tslint:disable-next-line:no-empty
    constructor() {
    }

    // tslint:disable-next-line:no-empty
    $onInit = () => {

        this.comboBoxDataSource = new kendo.data.DataSource({
            transport: {
                read: (i: kendo.data.DataSourceTransportOptions) => {
                    i.success(this.data);
                }
            }
        });

        this.comboBoxOptions = {
            dataValueField: "text",
            dataTextField: "value",
            template: (item: {text: string, value: string}) => {
                return [`<div>${item.value}</div>`];
            },
            dataSource: this.comboBoxDataSource
        };

        this.comboBox = new kendo.ui.ComboBox(document.getElementById("comboBox"), this.comboBoxOptions);
    }

    // tslint:disable-next-line:no-empty
    $onChange = () => {
    }
}

const containerOptions: ng.IComponentOptions = {
    templateUrl: "app/template.html",
    controller: Controller,
    controllerAs: "ctrl"
};

angular
    .module("my-playground", ["ngMaterial", "ngMessages", "dx"])
    .config(Config)
    .component("playground", containerOptions);