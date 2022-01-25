"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/*
1. Variable declaraions
    - Use keyword "let" and "const"
*/
var str = "Hello TypeScript!";
var num = 15;
// -----------------------------------------------------------------------------
// 2. Variable types
// 2.1 Static type
var firstname = "Sorawong";
var age = 21;
var student = true;
var girlfriend = null; // Can assign null or undefined to static type variable
girlfriend = "temp"; // Can change value afterward
var strAge = age.toString(); // TypeScript variable (string, number) has function to convert data type
// 2.1.1 Array of static type (one type)
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5]; // Same result as list1
// 2.1.2 Array of mix types (Tuple)
var list3 = [1, "Hello"]; // Fixed length
// 2.2 Dynamic type (any)
var randomVar; // any type prefer to dynamic type, randomVar can be number, string, bool
randomVar = 5;
randomVar = "Hey";
randomVar = true;
// randomVar.hey() // It not error, any can be variable, object, etc., to solve this problem, use "unknown" instead
// 2.3 Dynamic type (unknown)
var randomVar2 = 10;
randomVar2 = "Hey";
randomVar2 = false;
// randomVar2.hey() // Error, property 'hey()' doesn't exist on type 'unknown'
/*
2.4 Type inference
    - Specifying type is optional, you can declare bariable like JavaScript without define variable type.
      TypeScript is already assigned variable type depend on initial assign value.
*/
var a = 5;
// a = "Hello" // Error, Type 'string' isn't assignable to type 'number'
a = 10;
// ***Type inference work if you declare variable w/ keyword 'let' and initialize value to variable, in this case, b not has initial value so type inference is not working.
var b;
b = 5;
b = "Hello";
// 2.5 Union type for same variable (one variable able to multiple type)
var mulVar;
mulVar = 20;
mulVar = "twenty";
// mulVar = true // Error, value can be number or string
// Recommend to use Union type instead any because Union type have initelliSense when you write code (when you type . it show list of function able to use, but any is not)
// -----------------------------------------------------------------------------
// 3. Function
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// add(5, '10') // Error, argument of type 'string' is not assignable to parameter type 'number'
// 3.1 Optional parameter (You can add '?' after variable that you want to be optional)
function add2(num1, num2) {
    // num2 is optional parameter
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add2(5);
// ***Note! Optional parameter always be after required parameter, you can't start with optional parameter
// function add3(num1?: number, num2: number): number {
//   // num2 is optional parameter
//   if (num2) {
//     return num1 + num2
//   } else {
//     return num1
//   }
// }
// add3() is error because parameter start with optional parameter (num1?: number)
// 3.2 Default parameter
function add4(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    // num2 is optional parameter, if no argument for num2, value of num2 is 10
    return num1 + num2;
}
add4(5);
// -----------------------------------------------------------------------------
/*
4. Interface
    - Specify an object as a type
*/
// Old way (If object have many key-value, code looks ugly)
function showName(person) {
    console.log("Hello, ".concat(person.firstName, " ").concat(person.lastName));
}
var p1 = {
    firstName: "temp",
    lastName: "user"
};
showName(p1);
function showName2(person) {
    if (person.age) {
        console.log("Hello, ".concat(person.firstName, " ").concat(person.lastName, ", age : ").concat(person.age));
    }
    else {
        console.log("Hello, ".concat(person.firstName, " ").concat(person.lastName));
    }
}
var p2 = {
    firstName: "Sorawong",
    lastName: "Leardmongkonrut"
};
showName2(p2);
// -----------------------------------------------------------------------------
// 5. Class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greeting = function () {
        console.log("Good morning, ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("Sorawong");
console.log(emp1.employeeName);
emp1.greeting();
// 5.1 Inherit
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this; // 'super' keyword use for call base class constructor (Employee constructor)
    }
    Manager.prototype.working = function () {
        console.log("Manager ".concat(this.employeeName, " is working..."));
    };
    return Manager;
}(Employee));
var m1 = new Manager("Boss");
console.log(m1.employeeName);
m1.greeting();
m1.working();
// -----------------------------------------------------------------------------
// 6. Access modifiers
// 6.1 private
//  - In class, using 'private' keyword if you didn't want outside to access variable in class. private variable can access only in class using 'this' keyword
var Phone = /** @class */ (function () {
    function Phone(pName) {
        this.phoneName = pName;
    }
    Phone.prototype.showName = function () {
        console.log("This is ".concat(this.phoneName)); // able to access private variable because this code inside class, can use 'this' keyword to access private variable
    };
    return Phone;
}());
var iphone = new Phone("iPhone");
// console.log(iphone.phoneName) // Error, phoneName is private
iphone.showName();
// 6.2 protected
//  - 'private' keyword, outside ***AND EXTEND CLASS*** can't access variable
//  - If you didn't want outside to access variable BUT want extend class (inherit class) able to access variable, use 'protected' keyword instead
var Player = /** @class */ (function () {
    function Player(name) {
        this.playerName = name;
    }
    return Player;
}());
var GM = /** @class */ (function (_super) {
    __extends(GM, _super);
    function GM(name) {
        return _super.call(this, name) || this; // call parent constructor (Player constructor)
    }
    GM.prototype.showName = function () {
        console.log("Hello GM, ".concat(this.playerName)); // extend class can access protected variable in parent class
    };
    return GM;
}(Player));
var gm1 = new GM("GOD");
// console.log(gm1.playerName); // Error, can't access protected variable
gm1.showName();
// -----------------------------------------------------------------------------
