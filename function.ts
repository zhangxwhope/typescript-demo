// 函数
// Named function
function add(x, y) {
  return x + y;
}

// Anonymous function
let myAdd = function(x, y) { return x + y; };

let z = 100;

function addToZ(x, y) {
    return x + y + z;
}

// 1、为函数定义类型
function _add(x: number, y: number): number {
  return x + y
}

let _myAdd = function(x: number, y: number): number { return x + y; };

// 2、可选参数和默认参数
// 可选参数必须跟在必须参数后面
function buildName(firstName: string, lastName?: string) {
  return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // // works correctly now
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right

function buildName1(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

let result11 = buildName1("Bob");                 // works correctly now, returns "Bob Smith"
let result21 = buildName1("Bob", undefined);       // still works, also returns "Bob Smith"

// 3、剩余参数 （剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个）
function buildName2(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");

// 4、this （顶级的非方法式调用会将 this视为window。 （注意：在严格模式下， this为undefined而不是window））
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
      return function() {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// 5、箭头函数
let deck1 = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
      // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
      return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

let cardPicker1 = deck1.createCardPicker();
let pickedCard1 = cardPicker();

alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// 6、重载 （函数根据传入不同的参数而返回不同类型的数据）

