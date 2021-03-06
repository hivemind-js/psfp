// Generated by purs version 0.13.6
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var JSS = require("../JSS/index.js");
var Record_Extra = require("../Record.Extra/index.js");
var Simple_JSON = require("../Simple.JSON/index.js");
var useTheme = $foreign.useThemeImpl;
var makeStylesJSS = function (dictRowToList) {
    return function (dictMapRecord) {
        return function (v) {
            return $foreign.makeStylesWithPropsImpl(Data_Functor.mapFlipped(Data_Functor.functorFn)(v)(Record_Extra.mapRecord()(dictMapRecord)(Simple_JSON.write(JSS.wfJSSElem))));
        };
    };
};
module.exports = {
    useTheme: useTheme,
    makeStylesJSS: makeStylesJSS
};
