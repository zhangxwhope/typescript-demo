// 泛型
// identity函数。 这个函数会返回任何传入它的值。 你可以把这个函数当成是 echo命令。
// 1、类型变量 （只用于表示类型而不是值）
function identity(arg) {
    return arg;
}
var output1 = identity("myString"); // type of output will be 'string'
var output2 = identity("myString"); // type of output will be 'string'
function loggingIdentity(arg) {
    console.log(arg.length); // Error: T doesn't have .length
    return arg;
}
function loggingIdentity1(arg) {
    console.log(arg.length); // Error: T doesn't have .length
    return arg;
}
// TODO 未完待续
