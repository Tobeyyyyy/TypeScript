//// [genericSetterAssignment.ts]
// repro from #51676

class C1<T> {
    get x(): string { return '' }
    set x(val: string | T) {}
}
const c = new C1<string[]>()
c.x = [] as string[]

interface C2<T> {
    get y(): string
    set y(val: string | T)
}
declare const d: C2<string[]>
d.y = [] as string[]

//// [genericSetterAssignment.js]
// repro from #51676
var C1 = /** @class */ (function () {
    function C1() {
    }
    Object.defineProperty(C1.prototype, "x", {
        get: function () { return ''; },
        set: function (val) { },
        enumerable: false,
        configurable: true
    });
    return C1;
}());
var c = new C1();
c.x = [];
d.y = [];
