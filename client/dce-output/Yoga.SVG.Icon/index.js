// Generated by purs version 0.13.6
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var JSS = require("../JSS/index.js");
var React_Basic_DOM_SVG = require("../React.Basic.DOM.SVG/index.js");
var React_Basic_Hooks = require("../React.Basic.Hooks/index.js");
var React_Basic_Hooks_Internal = require("../React.Basic.Hooks.Internal/index.js");
var Record_Extra = require("../Record.Extra/index.js");
var Type_Equality = require("../Type.Equality/index.js");
var Yoga_Theme_Styles = require("../Yoga.Theme.Styles/index.js");
var ArrowPointsRight = (function () {
    function ArrowPointsRight() {

    };
    ArrowPointsRight.value = new ArrowPointsRight();
    return ArrowPointsRight;
})();
var ArrowPointsLeft = (function () {
    function ArrowPointsLeft() {

    };
    ArrowPointsLeft.value = new ArrowPointsLeft();
    return ArrowPointsLeft;
})();
var trianglelogoIcon = function (dictUnion) {
    return $foreign.trianglelogoIconRaw;
};
var mapIcon = function (dictUnion) {
    return $foreign.mapIconRaw;
};
var eqActiveArrowDirection = new Data_Eq.Eq(function (x) {
    return function (y) {
        if (x instanceof ArrowPointsRight && y instanceof ArrowPointsRight) {
            return true;
        };
        if (x instanceof ArrowPointsLeft && y instanceof ArrowPointsLeft) {
            return true;
        };
        return false;
    };
});
var mkMenu = function __do() {
    var useStyles = Yoga_Theme_Styles.makeStylesJSS()(Record_Extra.mapRecordCons(new Data_Symbol.IsSymbol(function ($dollar__unused) {
        return "arrow";
    }))()(Record_Extra.mapRecordCons(new Data_Symbol.IsSymbol(function ($dollar__unused) {
        return "arrowInactive";
    }))()(Record_Extra.mapRecordCons(new Data_Symbol.IsSymbol(function ($dollar__unused) {
        return "svg";
    }))()(Record_Extra.mapRecordNil)()())()())()())(JSS.jssClasses()(function (v) {
        return {
            arrow: JSS.jss(JSS.jssAbleRecord(JSS.jssAbleFieldsCons(new Data_Symbol.IsSymbol(function ($dollar__unused) {
                return "fill";
            }))(JSS.jssAbleString)()()()(JSS.jssAbleFieldsCons(new Data_Symbol.IsSymbol(function ($dollar__unused) {
                return "transition";
            }))(JSS.jssAbleString)()()()(JSS.jssAbleFieldsNil)))()())({
                fill: v.textColour,
                transition: "0.3s ease-out"
            }),
            arrowInactive: JSS.jss(JSS.jssAbleRecord(JSS.jssAbleFieldsCons(new Data_Symbol.IsSymbol(function ($dollar__unused) {
                return "fillOpacity";
            }))(JSS.jssAbleString)()()()(JSS.jssAbleFieldsNil))()())({
                fillOpacity: ".1"
            }),
            svg: JSS.jss(JSS.jssAbleRecord(JSS.jssAbleFieldsCons(new Data_Symbol.IsSymbol(function ($dollar__unused) {
                return "&:hover";
            }))(JSS.jssAbleRecord(JSS.jssAbleFieldsCons(new Data_Symbol.IsSymbol(function ($dollar__unused) {
                return "fill";
            }))(JSS.jssAbleString)()()()(JSS.jssAbleFieldsNil))()())()()()(JSS.jssAbleFieldsCons(new Data_Symbol.IsSymbol(function ($dollar__unused) {
                return "height";
            }))(JSS.jssAbleString)()()()(JSS.jssAbleFieldsCons(new Data_Symbol.IsSymbol(function ($dollar__unused) {
                return "width";
            }))(JSS.jssAbleString)()()()(JSS.jssAbleFieldsNil))))()())({
                width: "100%",
                height: "100%",
                "&:hover": {
                    fill: v.backgroundColour
                }
            })
        };
    }))();
    return React_Basic_Hooks.component()()()("MenuIcon")(function (v) {
        return React_Basic_Hooks_Internal.bind(React_Basic_Hooks_Internal.ixBindRender)(useStyles({}))(function (classes) {
            return Control_Applicative.pure(React_Basic_Hooks_Internal.applicativeRender(Type_Equality.refl))(React_Basic_DOM_SVG.svg()({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 100 100",
                fillRule: "nonzero",
                strokeLinejoin: "round",
                strokeMiterlimit: "2",
                className: classes.svg,
                children: [ React_Basic_DOM_SVG.path()({
                    d: "M28.72 46.524l8.94.26-7.843 7.388h40.97l-7.87 6.732H29.753l7.64 7.302-8.76.267-10.928-10.88 11.013-11.07zM17.493 57.806l.213-.213-.213.213z",
                    className: classes.arrow + (" " + Data_Monoid.guard(Data_Monoid.monoidString)(Data_Eq.eq(eqActiveArrowDirection)(v.activeArrowDirection)(ArrowPointsRight.value))(classes.arrowInactive))
                }), React_Basic_DOM_SVG.path()({
                    d: "M71.3 53.472l-8.94-.26 7.843-7.388H29.4l7.723-6.732h33.163l-7.64-7.302 8.758-.267 10.93 10.88L71.3 53.472zM82.536 42.2l-.213.213.213-.213z",
                    className: classes.arrow + (" " + Data_Monoid.guard(Data_Monoid.monoidString)(Data_Eq.eq(eqActiveArrowDirection)(v.activeArrowDirection)(ArrowPointsLeft.value))(classes.arrowInactive))
                }) ]
            }));
        });
    })();
};
var bindIcon = function (dictUnion) {
    return $foreign.bindIconRaw;
};
var applyflippedIcon = function (dictUnion) {
    return $foreign.applyflippedIconRaw;
};
var appendIcon = function (dictUnion) {
    return $foreign.appendIconRaw;
};
module.exports = {
    appendIcon: appendIcon,
    applyflippedIcon: applyflippedIcon,
    bindIcon: bindIcon,
    mapIcon: mapIcon,
    trianglelogoIcon: trianglelogoIcon,
    ArrowPointsRight: ArrowPointsRight,
    ArrowPointsLeft: ArrowPointsLeft,
    mkMenu: mkMenu,
    eqActiveArrowDirection: eqActiveArrowDirection,
    appendIconRaw: $foreign.appendIconRaw,
    applyflippedIconRaw: $foreign.applyflippedIconRaw,
    bindIconRaw: $foreign.bindIconRaw,
    mapIconRaw: $foreign.mapIconRaw,
    trianglelogoIconRaw: $foreign.trianglelogoIconRaw
};
