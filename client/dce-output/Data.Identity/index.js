// Generated by purs version 0.13.6
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Identity = function (x) {
    return x;
};
var newtypeIdentity = new Data_Newtype.Newtype(function (n) {
    return n;
}, Identity);
var functorIdentity = new Data_Functor.Functor(function (f) {
    return function (m) {
        return f(m);
    };
});
var applyIdentity = new Control_Apply.Apply(function ($dollar__unused) {
    return functorIdentity;
}, function (v) {
    return function (v1) {
        return v(v1);
    };
});
var bindIdentity = new Control_Bind.Bind(function ($dollar__unused) {
    return applyIdentity;
}, function (v) {
    return function (f) {
        return f(v);
    };
});
var applicativeIdentity = new Control_Applicative.Applicative(function ($dollar__unused) {
    return applyIdentity;
}, Identity);
var monadIdentity = new Control_Monad.Monad(function ($dollar__unused) {
    return applicativeIdentity;
}, function ($dollar__unused) {
    return bindIdentity;
});
module.exports = {
    Identity: Identity,
    newtypeIdentity: newtypeIdentity,
    functorIdentity: functorIdentity,
    applyIdentity: applyIdentity,
    applicativeIdentity: applicativeIdentity,
    bindIdentity: bindIdentity,
    monadIdentity: monadIdentity
};
