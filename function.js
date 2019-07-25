// 函数
// Named function
function add(x, y) {
    return x + y;
}
// Anonymous function
var myAdd = function (x, y) { return x + y; };
var z = 100;
function addToZ(x, y) {
    return x + y + z;
}
// 1、为函数定义类型
function _add(x, y) {
    return x + y;
}
var _myAdd = function (x, y) { return x + y; };
// 2、可选参数和默认参数
// 可选参数必须跟在必须参数后面
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
var result1 = buildName("Bob"); // // works correctly now
var result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
var result3 = buildName("Bob", "Adams"); // ah, just right
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result11 = buildName1("Bob"); // works correctly now, returns "Bob Smith"
var result21 = buildName1("Bob", undefined); // still works, also returns "Bob Smith"
// 3、剩余参数 （剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个）
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
// 4、this （顶级的非方法式调用会将 this视为window。 （注意：在严格模式下， this为undefined而不是window））
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// alert("card: " + pickedCard.card + " of " + pickedCard.suit);
// 5、箭头函数
var deck1 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker1 = deck1.createCardPicker();
var pickedCard1 = cardPicker();
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
