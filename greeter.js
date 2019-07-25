// 类
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
// 类型注解
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// let user = { firstName: 'Jane', lastName: 'User' };
var user = new Student('Jane', 'M.', 'User');
console.log(user, 'user');
window.onload = function () {
    document.body.innerHTML = greeter(user);
};
