module gaugeAngularWithTS.Interfaces {
    "use strict";

    export interface IGaugeService {
        getScale(): Scale;
        getLoadingIndicator(): LoadingIndicator;
        getRangeContainer(first: number, last: number): RangeContainer;
        getValueIndicator(): ValueIndicator;
        getSubvalueIndicator(): SubvalueIndicator;
        getTitle(): GaugeTitle;
        getToolTip(): Tooltip;
        getBindingOptions(): BindingOptions;
    }

    export class Gauge {
        public subvalues: number[];

        constructor(public _subvalues: number[]) {
            this.subvalues = _subvalues;
        }

        public get Subvalues(): number[] {
            return this.subvalues;
        }

        public set Subvalues(subvalues: number[]) {
            if (typeof subvalues !== "undefined" && subvalues.length > 0) {
                this.subvalues = subvalues;
            }
        }

    }

    export class GaugeOptions {
        bindingOptions: BindingOptions;
        scale: Scale;
        loadingIndicator: LoadingIndicator;
        rangeContainer: RangeContainer;
        valueIndicator: ValueIndicator;
        subvalueIndicator: SubvalueIndicator;
        title: GaugeTitle;
        tooltip: Tooltip;

        constructor(public _bindingOptions: BindingOptions, public _scale: Scale,
            public _loadingIndicator: LoadingIndicator, public _rangeContainer: RangeContainer,
            public _valueIndicator: ValueIndicator, public _subvalueIndicator: SubvalueIndicator,
            public _title: GaugeTitle, _tooltip: Tooltip) {
            this.bindingOptions = _bindingOptions;
            this.scale = _scale;
            this.loadingIndicator = _loadingIndicator;
            this.rangeContainer = _rangeContainer;
            this.valueIndicator = _valueIndicator;
            this.subvalueIndicator = _subvalueIndicator;
            this.title = _title;
            this.tooltip = _tooltip;
        }
    }

    export class BindingOptions {
        _value: string;
        _subvalues: string;
        constructor(public value: string, public subvalues: string) {
            this._value = value;
            this._subvalues = subvalues;
        }
    }

    export class Scale {
        _startValue: number;
        _endValue: number;
        _tickInterval: number;
        _label: Label;
        _tick: Tick;
        _minorTick: Tick;

        constructor(public startValue: number, public endValue: number, public tickInterval: number,
            public label: Label, public tick: Tick, public minorTick: Tick) {
            this.startValue = startValue;
            this.endValue = endValue;
            this._tickInterval = tickInterval;
            this._label = label;
            this._tick = tick;
            this._minorTick = minorTick;
        }
    }

    export class Label {
        _visible: boolean;
        _indentFromTick: number;
        _verticalAlignment: string;
        _horizontalAlignment: string;
        _text: string;

        constructor(public visible: boolean) {
            this._visible = visible;
        }

        public set Visible(vis: boolean) {
            this._visible = vis;
        }

        public customizeText(newText: any): void {
            this._text = newText.valueText + " %";
        }
    }

    export class Tick {
        _visible: boolean;

        constructor(public visible: boolean) {
            this._visible = visible;
        }

        public set Visible(vis: boolean) {
            this._visible = vis;
        }
    }

    export class LoadingIndicator {
        _show: boolean;

        constructor(public show: boolean) {
            this._show = show;
        }

        public set Show(vis: boolean) {
            this._show = vis;
        }

    }

    export class RangeContainer {
        _offset: number;
        _width: number;
        _range: Range[];

        constructor(public offset: number, public width: number, public ranges: Range[]) {
            this._offset = offset;
            this._width = width;
            this._range = ranges;
        }
    }

    export class Range {
        _startValue: number;
        _endValue: number;
        _color: string;

        constructor(public startValue: number, public endValue: number, public color: string) {
            this._startValue = startValue;
            this._endValue = endValue;
            this._color = color;
        }
    }

    export class ValueIndicator {
        _offset: number;
        _width: number;
        _lenght: number;
        _text: GaugeText;

        constructor(public offset: number, public width: number, public lenght: number, public text: GaugeText = null) {
            this._offset = offset;
            this._width = width;
            this._lenght = lenght;
            this._text = text;
        }
    }

    export class GaugeText {
        customizeText: string;
        font: GaugeFont;
        format: any;
        indent: number;
    }

    export class GaugeFont {
        _color: string;
        _family: string;
        _opacity: number;
        _size: number;
        _weight: number;
        constructor(public color: string, public family: string, public opacity: number,
            public size: number, public weight: number) {
            this._color = color;
            this._family = family;
            this._opacity = opacity;
            this._size = size;
            this._weight = weight;
        }
    }

    export class SubvalueIndicator {
        _offset: number;
        _type: string;
        _color: string;

        constructor(public offset: number, public type: string, public color: string) {
            this._offset = offset;
            this._type = type;
            this._color = color;
        }
    }

    export class GaugeTitle {
        _text: string;
        _font: GaugeFont;

        constructor(public text: string, font: GaugeFont) {
            this._text = text;
            this._font = font;
        }
    }

    export class Tooltip {
        _enabled: boolean;
        constructor(public enabled: boolean) {
            this._enabled = enabled;
        }
    }

    export class GaugeSubvalue {
        _bindingOptions: BindingOptions;
        _min: number;
        _max: number;
        _width: number;
        _showSpinButtons: boolean;

        constructor(public bindingOptions: BindingOptions, public min: number, public max: number, public width: number, public showSpinButtons: boolean) {
            this._bindingOptions = bindingOptions;
            this._min = min;
            this._max = max;
            this._width = width;
            this._showSpinButtons = showSpinButtons;
        }
    }
}





    //export interface IPlaylistService {
    //    getPlayList: () => Array<ITrack>;
    //}

    //export interface ITrack {
    //    title: string;
    //    artist: string;
    //    rating: number;
    //}