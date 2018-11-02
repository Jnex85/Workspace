module gaugeAngularWithTS.Interfaces {

    export interface IGaugeService {
        getScale(): IScale;
        getLoadingIndicator(): ILoadingIndicator;
        getRangeContainer(first: number, last: number): IRangeContainer;
        getValueIndicator(): IValueIndicator;
        getSubvalueIndicator(): ISubvalueIndicator;
        getTitle(): IGaugeTitle;
        getToolTip(): ITooltip;
        getBindingOptions(): IBindingOptions;
    }

    export interface IGauge {
        subvalues: number[];
    }

    export interface IGaugeOptions {
        bindingOptions: IBindingOptions;
        scale: IScale;
        loadingIndicator: ILoadingIndicator;
        rangeContainer: IRangeContainer;
        valueIndicator: IValueIndicator;
        subvalueIndicator: ISubvalueIndicator;
        title: IGaugeTitle;
        tooltip: ITooltip;
    }

    export interface IBindingOptions {
        value: string;
        subvalues: string;
    }

    export interface IScale {
        startValue: number;
        endValue: number;
        tickInterval: number;
        label: ILabel;
        tick: ITick;
        minorTick: ITick;
    }

    export interface ILabel {
        visible: boolean;
        indentFromTick: number;
        verticalAlignment: string;
        horizontalAlignment: string;
        text: string;
    }

    export interface ITick {
        visible: boolean;
    }

    export interface ILoadingIndicator {
        show: boolean;
    }

    export interface IRangeContainer {
        offset: number;
        width: number;
        range: IRange[];
    }

    export interface IRange {
        startValue: number;
        endValue: number;
        color: string;
    }

    export interface IValueIndicator {
        offset: number;
        width: number;
        lenght: number;
        text: IGaugeText;
    }

    export interface IGaugeText {
        customizeText: string;
        font: IGaugeFont;
        format: any;
        indent: number;
    }

    export interface IGaugeFont {
        color: string;
        family: string;
        opacity: number;
        size: number;
        weight: number;
    }

    export interface ISubvalueIndicator {
        offset: number;
        type: string;
        color: string;
    }

    export interface IGaugeTitle {
        text: string;
        font: IGaugeFont;
    }

    export interface ITooltip {
        enabled: boolean;
    }

    export interface IGaugeSubvalue {
        bindingOptions: IBindingOptions;
        min: number;
        max: number;
        width: number;
        showSpinButtons: boolean;
    }



    //export interface IPlaylistService {
    //    getPlayList: () => Array<ITrack>;
    //}

    //export interface ITrack {
    //    title: string;
    //    artist: string;
    //    rating: number;
    //}
}