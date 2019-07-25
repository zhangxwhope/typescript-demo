var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1、类 （类定义会创建两个东西：类的实例类型和一个构造函数）
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
console.log(greeter, 'greeter');
// 2、继承
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Animal moved " + distance + "m");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Wolf Wolf');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
var Animal1 = /** @class */ (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    Animal1.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " moved " + distance + "m");
    };
    return Animal1;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal1));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 45; }
        console.log('Galloping...');
        _super.prototype.move.call(this, distance);
    };
    return Horse;
}(Animal1));
var sam = new Snake('Sammy the Python');
var tom = new Horse('Tommy the Palomino');
sam.move();
tom.move(34);
// 3、公有 （在TypeScript里，成员都默认为 public）
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    Animal2.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " moved " + distance + "m");
    };
    return Animal2;
}());
// 4、私有private （当成员被标记成 private时，它就不能在声明它的类的外部访问）
var Animal3 = /** @class */ (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    return Animal3;
}());
// new Animal3('Cat').name  // 错误: 'name' 是私有的.
// 5、受保护的protected （protected成员在派生类中仍然可以访问）
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department;
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name) // 错误
// 6、构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    return Person1;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee1.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department;
    };
    return Employee1;
}(Person1));
var howard1 = new Employee1("Howard", "Sales");
// let john = new Person1("John"); // 错误: 'Person' 的构造函数是被保护的.
// 7、readonly修饰符 （ 只读属性必须在声明时或构造函数里被初始化。）
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.number = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus('Man with the 8 strong legs');
// dad.name = 'Man with the 3-piece suit'  // 错误! name 是只读的
// 8、参数属性
var Octopus1 = /** @class */ (function () {
    function Octopus1(name) {
        this.name = name;
        this.number = 8;
    }
    return Octopus1;
}());
// 9、存取器 （TypeScript支持通过getters/setters来截取对对象成员的访问）
// 只带有 get不带有 set的存取器自动被推断为 readonly
var Employee2 = /** @class */ (function () {
    function Employee2() {
    }
    return Employee2;
}());
var employee = new Employee2();
employee.fullName = 'Bob Smith';
if (employee.fullName) {
    console.log(employee.fullName);
}
var passcode = 'secret passcode';
var Employee3 = /** @class */ (function () {
    function Employee3() {
    }
    Object.defineProperty(Employee3.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode === 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee3;
}());
var employee3 = new Employee3();
employee3.fullName = "Bob Smith";
if (employee3.fullName) {
    alert(employee3.fullName);
}
// 10、静态属性 （这些属性存在于类本身上面而不是类的实例上）
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calcDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calcDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calcDistanceFromOrigin({ x: 10, y: 10 }));
// 11、抽象类 （抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化）
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name:' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this; // 在派生类的构造函数中必须调用 super()
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department; // 允许创建一个对抽象类型的引用
department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在
// 12、把类当作接口使用
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
