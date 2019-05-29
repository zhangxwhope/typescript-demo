// 基础类型
// 布尔
var isDone = false;
// 数组
// 第一种
var list1 = [1, 2, 3];
// 第二种
var list2 = [1, 2, 3];
// 元组 Tuple
var x;
x = ['hello', 10]; // OK
// x = [10, 'hello']; // Error
// 枚举 enum 
// 默认编号从0开始
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c, 'c');
// 编号从1开始
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var colorName = Color1[2];
console.log(colorName, 'colorName');
// 设置每个编号
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
var list = [1, true, "free"];
// Void
function warnUser() {
    console.log("This is my warning message");
}
var unusable = undefined;
var unusable1 = null;
// Null 和 Undefined
var u = undefined;
var n = null;
// Never
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
// 类型断言
var someValue = 'this is a string';
// 第一种写法
var strLength = someValue.length;
// 第二种写法
var len = someValue.length;
