// Generated by purs version 0.13.6
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Left = (function () {
    function Left(value0) {
        this.value0 = value0;
    };
    Left.create = function (value0) {
        return new Left(value0);
    };
    return Left;
})();
var Right = (function () {
    function Right(value0) {
        this.value0 = value0;
    };
    Right.create = function (value0) {
        return new Right(value0);
    };
    return Right;
})();
var functorEither = new Data_Functor.Functor(function (f) {
    return function (m) {
        if (m instanceof Left) {
            return new Left(m.value0);
        };
        if (m instanceof Right) {
            return new Right(f(m.value0));
        };
        throw new Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [ m.constructor.name ]);
    };
});
var either = function (v) {
    return function (v1) {
        return function (v2) {
            if (v2 instanceof Left) {
                return v(v2.value0);
            };
            if (v2 instanceof Right) {
                return v1(v2.value0);
            };
            throw new Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
        };
    };
};
var applyEither = new Control_Apply.Apply(function ($dollar__unused) {
    return functorEither;
}, function (v) {
    return function (v1) {
        if (v instanceof Left) {
            return new Left(v.value0);
        };
        if (v instanceof Right) {
            return Data_Functor.map(functorEither)(v.value0)(v1);
        };
        throw new Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var applicativeEither = new Control_Applicative.Applicative(function ($dollar__unused) {
    return applyEither;
}, Right.create);
module.exports = {
    Left: Left,
    Right: Right,
    either: either,
    functorEither: functorEither,
    applyEither: applyEither,
    applicativeEither: applicativeEither
};
