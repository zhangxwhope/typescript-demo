// 类
class Student {
  fullName: string;
  constructor (public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
  }
}

// 接口
interface Person{
  firstName: string;
  lastName: string;
}

// 类型注解
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

// let user = { firstName: 'Jane', lastName: 'User' };
let user = new Student('Jane', 'M.', 'User')
console.log(user, 'user')

window.onload = function () {
  document.body.innerHTML = greeter(user);
}
