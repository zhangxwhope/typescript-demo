// 变量声明

// let const
// 暂时性死区 块级作用域

// const
const numLivesForCat = 9
const kitty = {
  name: "Aurora",
  numLives: numLivesForCat,
}

// Error
// kitty = {
//   name: "Danielle",
//   numLives: numLivesForCat
// };

kitty.name = "Rory"
kitty.numLives--
console.log(kitty, 'kitty')

// 解构

// 解构赋值
let input = [1, 2];
let [first, second] = input;
console.log(first, 'first'); // outputs 1
console.log(second, 'second'); // outputs 2

function f([first, second]: number[]) {
  console.log(first);
  console.log(second);
}
f(input)

let [first1, ...rest] = [1, 2, 3, 4];
console.log(first1); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

let [first2] = [1, 2, 3, 4];
console.log(first2); // outputs 1

let [, second1, , fourth] = [1, 2, 3, 4];

// 对象解构
let o = {
  a: 'foo',
  b: 12,
  c: 'bar'
}

let { a, b } = o
console.log(a, 'a') // outputs foo
console.log(b, 'b') // outputs 12

let o1 = {
  a1: 'foo',
  b1: 12,
  c1: 'bar'
}
let { a1, ...passthrough } = o1;
console.log(a1, 'a1')
console.log(passthrough, 'passthrough')
let total = passthrough.b1 + passthrough.c1.length;
console.log(total, 'total')

let { a1: newName1, b1: newName2 } = o1
console.log(newName1, 'newName1')
console.log(newName2, 'newName2')

let { a1: newName3, b1: newName4 }: {a1: string, b1: number} = o1;
console.log(newName3, 'newName3')
console.log(newName4, 'newName4')

// 默认值
function keepWholeObject(wholeObject: { a: string, b: number }) {
  let { a, b = 1001 } = wholeObject;
  console.log(a, 'a')
  console.log(b, 'b')
}
let _b
keepWholeObject({ a: 'aa', b: _b })

// 展开

// 展开数组
let _first = [1, 2];
let _second = [3, 4];
let bothPlus = [0, ..._first, ..._second, 5];
console.log(bothPlus, 'bothPlus')

// 展开对象
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
console.log(search, 'search')

// 展开对象实例，丢失方法
class C {
  p = 12;
  m() {
  }
}
let c = new C();
let clone = { ...c };
console.log(clone, 'clone')
clone.p; // ok
// clone.m(); // error!