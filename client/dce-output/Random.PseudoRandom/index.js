// Generated by purs version 0.13.6
"use strict";
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_ST_Internal = require("../Control.Monad.ST.Internal/index.js");
var Data_Array_ST = require("../Data.Array.ST/index.js");
var Data_Boolean = require("../Data.Boolean/index.js");
var Data_EuclideanRing = require("../Data.EuclideanRing/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Int = require("../Data.Int/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Random_LCG = require("../Random.LCG/index.js");
var Random = function (Ord0, random, randomR) {
    this.Ord0 = Ord0;
    this.random = random;
    this.randomR = randomR;
};
var randomsF = function (dictRandom) {
    return function (f) {
        return function (i) {
            return function (seed) {
                var fill = function (arr) {
                    return function __do() {
                        var seedref = Control_Monad_ST_Internal["new"](seed)();
                        return Control_Monad_ST_Internal["for"](0)(i)(function (v) {
                            return function __do() {
                                var seed$prime = Control_Monad_ST_Internal.read(seedref)();
                                var rp = f(seed$prime);
                                return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_ST_Internal.bindST)(Data_Functor["void"](Control_Monad_ST_Internal.functorST)(Control_Monad_ST_Internal.write(rp.newSeed)(seedref)))(function ($dollar__unused) {
                                    return Data_Functor["void"](Control_Monad_ST_Internal.functorST)(Data_Array_ST.push(rp.newVal)(arr));
                                })();
                            };
                        })();
                    };
                };
                return Data_Array_ST.withArray(fill)([  ])();
            };
        };
    };
};
var randomR = function (dict) {
    return dict.randomR;
};
var randomRs = function (dictRandom) {
    return function (min) {
        return function (max) {
            return randomsF(dictRandom)(randomR(dictRandom)(min)(max));
        };
    };
};
var random = function (dict) {
    return dict.random;
};
var randomInt = new Random(function ($dollar__unused) {
    return Data_Ord.ordInt;
}, function (seed) {
    var newSeed = Random_LCG.lcgNext(seed);
    return {
        newVal: Random_LCG.unSeed(newSeed),
        newSeed: newSeed
    };
}, function (min) {
    return function (max) {
        return function (seed) {
            if (min > max) {
                return randomR(randomInt)(max)(min)(seed);
            };
            if (Data_Boolean.otherwise) {
                var rp = random(randomInt)(seed);
                var newVal = Data_EuclideanRing.mod(Data_EuclideanRing.euclideanRingInt)(rp.newVal)((max - min | 0) + 1 | 0) + min | 0;
                return {
                    newVal: newVal,
                    newSeed: rp.newSeed
                };
            };
            throw new Error("Failed pattern match at Random.PseudoRandom (line 33, column 1 - line 42, column 55): " + [ min.constructor.name, max.constructor.name, seed.constructor.name ]);
        };
    };
});
var randomNumber = new Random(function ($dollar__unused) {
    return Data_Ord.ordNumber;
}, function (seed) {
    var intRp = random(randomInt)(seed);
    var newVal = Data_Int.toNumber(intRp.newVal) / Data_Int.toNumber(Random_LCG.lcgM);
    return {
        newVal: newVal,
        newSeed: intRp.newSeed
    };
}, function (min) {
    return function (max) {
        return function (seed) {
            if (min > max) {
                return randomR(randomNumber)(max)(min)(seed);
            };
            if (Data_Boolean.otherwise) {
                var rp = random(randomNumber)(seed);
                var newVal = rp.newVal * (max - min) + min;
                return {
                    newVal: newVal,
                    newSeed: rp.newSeed
                };
            };
            throw new Error("Failed pattern match at Random.PseudoRandom (line 44, column 1 - line 55, column 47): " + [ min.constructor.name, max.constructor.name, seed.constructor.name ]);
        };
    };
});
module.exports = {
    Random: Random,
    random: random,
    randomR: randomR,
    randomRs: randomRs,
    randomInt: randomInt,
    randomNumber: randomNumber
};
