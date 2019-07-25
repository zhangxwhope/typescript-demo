// 泛型
// identity函数。 这个函数会返回任何传入它的值。 你可以把这个函数当成是 echo命令。

// 1、类型变量 （只用于表示类型而不是值）
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");  // type of output will be 'string'
let output2 = identity("myString");  // type of output will be 'string'

function loggingIdentity<T>(arg: T): T {
  console.log(arg.length);  // Error: T doesn't have .length
  return arg;
}

function loggingIdentity1<T>(arg: T[]): T[] {
  console.log(arg.length);  // Error: T doesn't have .length
  return arg;
}

// TODO 未完待续