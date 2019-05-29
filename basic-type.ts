// 基础类型

// 布尔
let isDone: boolean = false

// 数组
// 第一种
let list1: number[] = [1, 2, 3]

// 第二种
let list2: Array<number> = [1, 2, 3]

// 元组 Tuple
let x: [string, number]
x = ['hello', 10]; // OK
// x = [10, 'hello']; // Error

// 枚举 enum 
// 默认编号从0开始
enum Color { Red, Green, Blue }
let c: Color = Color.Green
console.log(c, 'c')

// 编号从1开始
enum Color1 { Red = 1, Green, Blue }
let colorName: string = Color1[2]
console.log(colorName, 'colorName')

// 设置每个编号
enum Color2 { Red = 1, Green = 2, Blue = 4 }

// Any
let notSure: any = 4
notSure = "maybe a string instead"
notSure = false

let list: any[] = [1, true, "free"]

// Void
function warnUser(): void {
  console.log("This is my warning message");
}
let unusable: void = undefined
let unusable1: void = null

// Null 和 Undefined
let u: undefined = undefined
let n: null = null

// Never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed")
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}

// Object
declare function create(o: object | null): void

// 类型断言
let someValue: any = 'this is a string'
// 第一种写法
let strLength: number = (<string>someValue).length
// 第二种写法
let len: number = (someValue as string).length