// Generated by purs version 0.13.6
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Foreign = require("../Foreign/index.js");
var Foreign_Object = require("../Foreign.Object/index.js");
var Record = require("../Record/index.js");
var Record_Builder = require("../Record.Builder/index.js");
var Simple_JSON = require("../Simple.JSON/index.js");
var Type_Data_RowList = require("../Type.Data.RowList/index.js");
var Type_Proxy = require("../Type.Proxy/index.js");
var Untagged_Coercible = require("../Untagged.Coercible/index.js");
var PrimitiveJss = (function () {
    function PrimitiveJss(value0) {
        this.value0 = value0;
    };
    PrimitiveJss.create = function (value0) {
        return new PrimitiveJss(value0);
    };
    return PrimitiveJss;
})();
var ArrayJss = (function () {
    function ArrayJss(value0) {
        this.value0 = value0;
    };
    ArrayJss.create = function (value0) {
        return new ArrayJss(value0);
    };
    return ArrayJss;
})();
var PropsJss = (function () {
    function PropsJss(value0) {
        this.value0 = value0;
    };
    PropsJss.create = function (value0) {
        return new PropsJss(value0);
    };
    return PropsJss;
})();
var NestedJss = (function () {
    function NestedJss(value0) {
        this.value0 = value0;
    };
    NestedJss.create = function (value0) {
        return new NestedJss(value0);
    };
    return NestedJss;
})();
var JSSClasses = function (x) {
    return x;
};
var JSSAbleFields = function (jssifyFields) {
    this.jssifyFields = jssifyFields;
};
var JSSAble = function (jss) {
    this.jss = jss;
};
var wfJSSElem = new Simple_JSON.WriteForeign(function (v) {
    if (v instanceof PrimitiveJss) {
        return Foreign.unsafeToForeign(v.value0);
    };
    if (v instanceof ArrayJss) {
        return Simple_JSON.write(Simple_JSON.writeForeignArray(Simple_JSON.writeForeignForeign))(Data_Functor.map(Data_Functor.functorArray)(Simple_JSON.writeImpl(wfJSSElem))(v.value0));
    };
    if (v instanceof PropsJss) {
        return Foreign.unsafeToForeign(Data_Functor.map(Data_Functor.functorFn)(Simple_JSON.writeImpl(wfJSSElem))(v.value0));
    };
    if (v instanceof NestedJss) {
        return Simple_JSON.writeImpl(Simple_JSON.writeForeignObject(Simple_JSON.writeForeignForeign))(Data_Functor.map(Foreign_Object.functorObject)(Simple_JSON.writeImpl(wfJSSElem))(v.value0));
    };
    throw new Error("Failed pattern match at JSS (line 69, column 15 - line 73, column 57): " + [ v.constructor.name ]);
});
var jssifyFields = function (dict) {
    return dict.jssifyFields;
};
var jssClasses = function (dictHomogeneous) {
    return JSSClasses;
};
var jssAbleString = new JSSAble((function () {
    var $351 = Untagged_Coercible.coerce();
    return function ($352) {
        return PrimitiveJss.create($351($352));
    };
})());
var jssAbleRecord = function (dictJSSAbleFields) {
    return function (dictRowToList) {
        return function (dictHomogeneous) {
            return new JSSAble(function (rec) {
                var builder = jssifyFields(dictJSSAbleFields)(Type_Proxy["Proxy"].value)(Type_Data_RowList.RLProxy.value)(rec);
                var built = Record_Builder.build(builder)({});
                return NestedJss.create(Foreign_Object.fromHomogeneous()(built));
            });
        };
    };
};
var jssAbleInt = new JSSAble((function () {
    var $353 = Untagged_Coercible.coerce();
    return function ($354) {
        return PrimitiveJss.create($353($354));
    };
})());
var jssAbleFieldsNil = new JSSAbleFields(function (v) {
    return function (v1) {
        return function (v2) {
            return Control_Category.identity(Record_Builder.categoryBuilder);
        };
    };
});
var jss = function (dict) {
    return dict.jss;
};
var jssAbleFieldsCons = function (dictIsSymbol) {
    return function (dictJSSAble) {
        return function (dictLacks) {
            return function (dictCons) {
                return function (dictCons1) {
                    return function (dictJSSAbleFields) {
                        return new JSSAbleFields(function (v) {
                            return function (v1) {
                                return function (r) {
                                    var rest = jssifyFields(dictJSSAbleFields)(Type_Proxy["Proxy"].value)(Type_Data_RowList.RLProxy.value)(r);
                                    var val = Record.get(dictIsSymbol)()(Data_Symbol.SProxy.value)(r);
                                    var first = Record_Builder.insert()()(dictIsSymbol)(Data_Symbol.SProxy.value)(jss(dictJSSAble)(val));
                                    return Control_Semigroupoid.compose(Record_Builder.semigroupoidBuilder)(first)(rest);
                                };
                            };
                        });
                    };
                };
            };
        };
    };
};
module.exports = {
    jss: jss,
    jssifyFields: jssifyFields,
    JSSClasses: JSSClasses,
    jssClasses: jssClasses,
    PrimitiveJss: PrimitiveJss,
    ArrayJss: ArrayJss,
    PropsJss: PropsJss,
    NestedJss: NestedJss,
    JSSAble: JSSAble,
    JSSAbleFields: JSSAbleFields,
    wfJSSElem: wfJSSElem,
    jssAbleString: jssAbleString,
    jssAbleInt: jssAbleInt,
    jssAbleRecord: jssAbleRecord,
    jssAbleFieldsNil: jssAbleFieldsNil,
    jssAbleFieldsCons: jssAbleFieldsCons
};
