declare namespace kendo.ui {
    export interface GridColumn {
        reservedColumn?: boolean;
        hiddenDisabled?: boolean;
    }

    export interface SliderTooltip {
        template?: string | Function;
    }
  
}

declare namespace kendo.dataviz.ui {
    export interface ChartSeriesItemLabels {
        rotation?: number;
    }

    export interface ChartSeriesItemLabels {
        to?: Function | ChartSeriesItemLabelsTo;
        from?: Function | ChartSeriesItemLabelsTo;
    }

    export interface ChartSeriesDefaultsLabels {
        padding?: number;
    }

    export interface ChartSeriesDefaults {
        dynamicSlope?: boolean;
        dynamicHeight?: boolean;
    }

    export interface ChartTooltip {
        border?: string;
    }

    export interface ChartSeriesItemTooltip {
        border?: string;
    }

    export interface ChartSeriesItem {
        stack?: boolean | string| ChartSeriesItemStack;
    }

    export interface TreeMap {
        dataItem?: (el: any) => any;
    }
}

declare namespace kendo {
    class Color extends Observable {
        equals(c: Color): boolean;
        toBytes(): any;
        static fromBytes(r: number, g: number, b: number, a?: number): any;//:kendo.Color;
    }
}