// Generated by purs version 0.13.6
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var mapWithKey = function (f) {
    return function (m) {
        return $foreign["_mapWithKey"](m, f);
    };
};
var functorObject = new Data_Functor.Functor(function (f) {
    return function (m) {
        return $foreign["_fmapObject"](m, f);
    };
});
var fromHomogeneous = function (dictHomogeneous) {
    return Unsafe_Coerce.unsafeCoerce;
};
module.exports = {
    fromHomogeneous: fromHomogeneous,
    mapWithKey: mapWithKey,
    functorObject: functorObject
};
