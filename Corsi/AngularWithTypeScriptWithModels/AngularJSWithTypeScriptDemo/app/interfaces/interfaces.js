var gaugeAngularWithTS;
(function (gaugeAngularWithTS) {
    var Interfaces;
    (function (Interfaces) {
        "use strict";
        var Gauge = /** @class */ (function () {
            function Gauge(_subvalues) {
                this._subvalues = _subvalues;
                this.subvalues = _subvalues;
            }
            Object.defineProperty(Gauge.prototype, "Subvalues", {
                get: function () {
                    return this.subvalues;
                },
                set: function (subvalues) {
                    if (typeof subvalues !== "undefined" && subvalues.length > 0) {
                        this.subvalues = subvalues;
                    }
                },
                enumerable: true,
                configurable: true
            });
            return Gauge;
        }());
        Interfaces.Gauge = Gauge;
        var GaugeOptions = /** @class */ (function () {
            function GaugeOptions(_bindingOptions, _scale, _loadingIndicator, _rangeContainer, _valueIndicator, _subvalueIndicator, _title, _tooltip) {
                this._bindingOptions = _bindingOptions;
                this._scale = _scale;
                this._loadingIndicator = _loadingIndicator;
                this._rangeContainer = _rangeContainer;
                this._valueIndicator = _valueIndicator;
                this._subvalueIndicator = _subvalueIndicator;
                this._title = _title;
                this.bindingOptions = _bindingOptions;
                this.scale = _scale;
                this.loadingIndicator = _loadingIndicator;
                this.rangeContainer = _rangeContainer;
                this.valueIndicator = _valueIndicator;
                this.subvalueIndicator = _subvalueIndicator;
                this.title = _title;
                this.tooltip = _tooltip;
            }
            return GaugeOptions;
        }());
        Interfaces.GaugeOptions = GaugeOptions;
        var BindingOptions = /** @class */ (function () {
            function BindingOptions(value, subvalues) {
                this.value = value;
                this.subvalues = subvalues;
                this._value = value;
                this._subvalues = subvalues;
            }
            return BindingOptions;
        }());
        Interfaces.BindingOptions = BindingOptions;
        var Scale = /** @class */ (function () {
            function Scale(startValue, endValue, tickInterval, label, tick, minorTick) {
                this.startValue = startValue;
                this.endValue = endValue;
                this.tickInterval = tickInterval;
                this.label = label;
                this.tick = tick;
                this.minorTick = minorTick;
                this.startValue = startValue;
                this.endValue = endValue;
                this._tickInterval = tickInterval;
                this._label = label;
                this._tick = tick;
                this._minorTick = minorTick;
            }
            return Scale;
        }());
        Interfaces.Scale = Scale;
        var Label = /** @class */ (function () {
            function Label(visible) {
                this.visible = visible;
                this._visible = visible;
            }
            Object.defineProperty(Label.prototype, "Visible", {
                set: function (vis) {
                    this._visible = vis;
                },
                enumerable: true,
                configurable: true
            });
            Label.prototype.customizeText = function (newText) {
                this._text = newText.valueText + " %";
            };
            return Label;
        }());
        Interfaces.Label = Label;
        var Tick = /** @class */ (function () {
            function Tick(visible) {
                this.visible = visible;
                this._visible = visible;
            }
            Object.defineProperty(Tick.prototype, "Visible", {
                set: function (vis) {
                    this._visible = vis;
                },
                enumerable: true,
                configurable: true
            });
            return Tick;
        }());
        Interfaces.Tick = Tick;
        var LoadingIndicator = /** @class */ (function () {
            function LoadingIndicator(show) {
                this.show = show;
                this._show = show;
            }
            Object.defineProperty(LoadingIndicator.prototype, "Show", {
                set: function (vis) {
                    this._show = vis;
                },
                enumerable: true,
                configurable: true
            });
            return LoadingIndicator;
        }());
        Interfaces.LoadingIndicator = LoadingIndicator;
        var RangeContainer = /** @class */ (function () {
            function RangeContainer(offset, width, ranges) {
                this.offset = offset;
                this.width = width;
                this.ranges = ranges;
                this._offset = offset;
                this._width = width;
                this._range = ranges;
            }
            return RangeContainer;
        }());
        Interfaces.RangeContainer = RangeContainer;
        var Range = /** @class */ (function () {
            function Range(startValue, endValue, color) {
                this.startValue = startValue;
                this.endValue = endValue;
                this.color = color;
                this._startValue = startValue;
                this._endValue = endValue;
                this._color = color;
            }
            return Range;
        }());
        Interfaces.Range = Range;
        var ValueIndicator = /** @class */ (function () {
            function ValueIndicator(offset, width, lenght, text) {
                if (text === void 0) { text = null; }
                this.offset = offset;
                this.width = width;
                this.lenght = lenght;
                this.text = text;
                this._offset = offset;
                this._width = width;
                this._lenght = lenght;
                this._text = text;
            }
            return ValueIndicator;
        }());
        Interfaces.ValueIndicator = ValueIndicator;
        var GaugeText = /** @class */ (function () {
            function GaugeText() {
            }
            return GaugeText;
        }());
        Interfaces.GaugeText = GaugeText;
        var GaugeFont = /** @class */ (function () {
            function GaugeFont(color, family, opacity, size, weight) {
                this.color = color;
                this.family = family;
                this.opacity = opacity;
                this.size = size;
                this.weight = weight;
                this._color = color;
                this._family = family;
                this._opacity = opacity;
                this._size = size;
                this._weight = weight;
            }
            return GaugeFont;
        }());
        Interfaces.GaugeFont = GaugeFont;
        var SubvalueIndicator = /** @class */ (function () {
            function SubvalueIndicator(offset, type, color) {
                this.offset = offset;
                this.type = type;
                this.color = color;
                this._offset = offset;
                this._type = type;
                this._color = color;
            }
            return SubvalueIndicator;
        }());
        Interfaces.SubvalueIndicator = SubvalueIndicator;
        var GaugeTitle = /** @class */ (function () {
            function GaugeTitle(text, font) {
                this.text = text;
                this._text = text;
                this._font = font;
            }
            return GaugeTitle;
        }());
        Interfaces.GaugeTitle = GaugeTitle;
        var Tooltip = /** @class */ (function () {
            function Tooltip(enabled) {
                this.enabled = enabled;
                this._enabled = enabled;
            }
            return Tooltip;
        }());
        Interfaces.Tooltip = Tooltip;
        var GaugeSubvalue = /** @class */ (function () {
            function GaugeSubvalue(bindingOptions, min, max, width, showSpinButtons) {
                this.bindingOptions = bindingOptions;
                this.min = min;
                this.max = max;
                this.width = width;
                this.showSpinButtons = showSpinButtons;
                this._bindingOptions = bindingOptions;
                this._min = min;
                this._max = max;
                this._width = width;
                this._showSpinButtons = showSpinButtons;
            }
            return GaugeSubvalue;
        }());
        Interfaces.GaugeSubvalue = GaugeSubvalue;
    })(Interfaces = gaugeAngularWithTS.Interfaces || (gaugeAngularWithTS.Interfaces = {}));
})(gaugeAngularWithTS || (gaugeAngularWithTS = {}));
//export interface IPlaylistService {
//    getPlayList: () => Array<ITrack>;
//}
//export interface ITrack {
//    title: string;
//    artist: string;
//    rating: number;
//}
//# sourceMappingURL=interfaces.js.map