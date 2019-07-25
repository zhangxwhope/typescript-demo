// 1、类 （类定义会创建两个东西：类的实例类型和一个构造函数）
class Greeter {
  greeting: string;
  constructor (message: string) {
    this.greeting = message
  }
  greet () {
    return 'Hello, ' + this.greeting
  }
}

let greeter = new Greeter('world')
console.log(greeter, 'greeter')

// 2、继承
class Animal {
  move (distance: number = 0) {
    console.log(`Animal moved ${distance}m`)
  }
}

class Dog extends Animal {
  bark () {
    console.log('Wolf Wolf')
  }
}

const dog = new Dog()
dog.bark()
dog.move(10)
dog.bark()

class Animal1 {
  name: string;
  constructor (theName: string) { this.name = theName }
  move (distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`)
  }
}

class Snake extends Animal1 {
  constructor (name: string) { super(name) }
  move (distance = 5) {
    console.log('Slithering...')
    super.move(distance)
  }
}

class Horse extends Animal1 {
  constructor (name: string) { super(name) }
  move (distance = 45) {
    console.log('Galloping...')
    super.move(distance)
  }
}

let sam = new Snake('Sammy the Python')
let tom: Animal1 = new Horse('Tommy the Palomino')

sam.move()
tom.move(34)

// 3、公有 （在TypeScript里，成员都默认为 public）
class Animal2 {
  public name: string;
  public constructor (theName: string) { this.name = theName }
  public move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`)
  }
}

// 4、私有private （当成员被标记成 private时，它就不能在声明它的类的外部访问）
class Animal3 {
  private name: string;
  constructor (theName: string) { this.name = theName }
}

// new Animal3('Cat').name  // 错误: 'name' 是私有的.

// 5、受保护的protected （protected成员在派生类中仍然可以访问）
class Person {
  protected name: string;
  constructor (name: string) { this.name = name }
}

class Employee extends Person {
  private department: string;
  constructor (name: string, department: string) {
    super(name)
    this.department = department
  } 
  public getElevatorPitch () {
    return `Hello, my name is ${this.name} and I work in ${this.department}`
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch())
// console.log(howard.name) // 错误

// 6、构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承
class Person1 {
  protected name: string;
  protected constructor (name: string) { this.name = name }
}

class Employee1 extends Person1 {
  private department: string;
  constructor (name: string, department: string) {
    super(name)
    this.department = department
  }
  public getElevatorPitch () {
    return `Hello, my name is ${this.name} and I work in ${this.department}`
  }
}

let howard1 = new Employee1("Howard", "Sales");
// let john = new Person1("John"); // 错误: 'Person' 的构造函数是被保护的.

// 7、readonly修饰符 （ 只读属性必须在声明时或构造函数里被初始化。）
class Octopus {
  readonly name: string;
  readonly number: number = 8;
  constructor (theName: string) { this.name = theName }
}

let dad = new Octopus('Man with the 8 strong legs')
// dad.name = 'Man with the 3-piece suit'  // 错误! name 是只读的

// 8、参数属性
class Octopus1 {
  readonly number: number = 8;
  constructor(readonly name: string) {

  }
}

// 9、存取器 （TypeScript支持通过getters/setters来截取对对象成员的访问）
// 只带有 get不带有 set的存取器自动被推断为 readonly
class Employee2 {
  fullName: string;
}

let employee = new Employee2()
employee.fullName = 'Bob Smith'
if (employee.fullName) {
  console.log(employee.fullName);
}

let passcode = 'secret passcode'
class Employee3 {
  private _fullName: string;
  get fullName(): string {
    return this._fullName
  }
  set fullName (newName: string) {
    if (passcode && passcode === 'secret passcode') {
      this._fullName = newName
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employee3 = new Employee3();
employee3.fullName = "Bob Smith";
if (employee3.fullName) {
    alert(employee3.fullName);
}

// 10、静态属性 （这些属性存在于类本身上面而不是类的实例上）
class Grid {
  static origin = { x: 0, y: 0 }
  calcDistanceFromOrigin (point: { x: number, y: number }) {
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor (public scale: number) {}
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calcDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calcDistanceFromOrigin({x: 10, y: 10}));

// 11、抽象类 （抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化）
abstract class Department {
  constructor (public name: string) {}
  printName(): void {
    console.log('Department name:' + this.name) 
  }
  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor () {
    super('Accounting and Auditing') // 在派生类的构造函数中必须调用 super()
  }
  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }
  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}

let department: Department; // 允许创建一个对抽象类型的引用
department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在

// 12、把类当作接口使用
class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number
}

let point3d: Point3d = { x: 1, y: 2, z: 3 }