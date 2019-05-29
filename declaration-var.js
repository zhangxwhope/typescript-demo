// 变量声明
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
// let const
// 暂时性死区 块级作用域
// const
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
// Error
// kitty = {
//   name: "Danielle",
//   numLives: numLivesForCat
// };
kitty.name = "Rory";
kitty.numLives--;
console.log(kitty, 'kitty');
// 解构
// 解构赋值
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first, 'first'); // outputs 1
console.log(second, 'second'); // outputs 2
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f(input);
var _a = [1, 2, 3, 4], first1 = _a[0], rest = _a.slice(1);
console.log(first1); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
var first2 = [1, 2, 3, 4][0];
console.log(first2); // outputs 1
var _c = [1, 2, 3, 4], second1 = _c[1], fourth = _c[3];
// 对象解构
var o = {
    a: 'foo',
    b: 12,
    c: 'bar'
};
var a = o.a, b = o.b;
console.log(a, 'a'); // outputs foo
console.log(b, 'b'); // outputs 12
var o1 = {
    a1: 'foo',
    b1: 12,
    c1: 'bar'
};
var a1 = o1.a1, passthrough = __rest(o1, ["a1"]);
console.log(a1, 'a1');
console.log(passthrough, 'passthrough');
var total = passthrough.b1 + passthrough.c1.length;
console.log(total, 'total');
var newName1 = o1.a1, newName2 = o1.b1;
console.log(newName1, 'newName1');
console.log(newName2, 'newName2');
var newName3 = o1.a1, newName4 = o1.b1;
console.log(newName3, 'newName3');
console.log(newName4, 'newName4');
// 默认值
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    console.log(a, 'a');
    console.log(b, 'b');
}
var _b;
keepWholeObject({ a: 'aa', b: _b });
// 展开
// 展开数组
var _first = [1, 2];
var _second = [3, 4];
var bothPlus = [0].concat(_first, _second, [5]);
console.log(bothPlus, 'bothPlus');
// 展开对象
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({}, defaults, { food: "rich" });
console.log(search, 'search');
// 展开对象实例，丢失方法
var C = /** @class */ (function () {
    function C() {
        this.p = 12;
    }
    C.prototype.m = function () {
    };
    return C;
}());
var c = new C();
var clone = __assign({}, c);
console.log(clone, 'clone');
clone.p; // ok
// clone.m(); // error!
