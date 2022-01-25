export {} // Avoid block-scope warning
/* 
1. Variable declaraions
    - Use keyword "let" and "const"
*/
let str = "Hello TypeScript!"
const num = 15

// -----------------------------------------------------------------------------

// 2. Variable types
// 2.1 Static type
let firstname: string = "Sorawong"
let age: number = 21
let student: boolean = true

let girlfriend: string = null // Can assign null or undefined to static type variable
girlfriend = "temp" // Can change value afterward

let strAge = age.toString() // TypeScript variable (string, number) has function to convert data type

// 2.1.1 Array of static type (one type)
let list1: number[] = [1, 2, 3, 4, 5]
let list2: Array<number> = [1, 2, 3, 4, 5] // Same result as list1

// 2.1.2 Array of mix types (Tuple)
let list3: [number, string] = [1, "Hello"] // Fixed length

// 2.2 Dynamic type (any)
let randomVar: any // any type prefer to dynamic type, randomVar can be number, string, bool
randomVar = 5
randomVar = "Hey"
randomVar = true
// randomVar.hey() // It not error, any can be variable, object, etc., to solve this problem, use "unknown" instead

// 2.3 Dynamic type (unknown)
let randomVar2: unknown = 10
randomVar2 = "Hey"
randomVar2 = false
// randomVar2.hey() // Error, property 'hey()' doesn't exist on type 'unknown'

/* 
2.4 Type inference
    - Specifying type is optional, you can declare bariable like JavaScript without define variable type. 
      TypeScript is already assigned variable type depend on initial assign value.
*/
let a = 5
// a = "Hello" // Error, Type 'string' isn't assignable to type 'number'
a = 10

// ***Type inference work if you declare variable w/ keyword 'let' and initialize value to variable, in this case, b not has initial value so type inference is not working.
let b
b = 5
b = "Hello"

// 2.5 Union type for same variable (one variable able to multiple type)
let mulVar: number | string
mulVar = 20
mulVar = "twenty"
// mulVar = true // Error, value can be number or string
// Recommend to use Union type instead any because Union type have initelliSense when you write code (when you type . it show list of function able to use, but any is not)

// -----------------------------------------------------------------------------

// 3. Function
function add(num1: number, num2: number): number {
  return num1 + num2
}
add(5, 10)
// add(5, '10') // Error, argument of type 'string' is not assignable to parameter type 'number'

// 3.1 Optional parameter (You can add '?' after variable that you want to be optional)
function add2(num1: number, num2?: number): number {
  // num2 is optional parameter
  if (num2) {
    return num1 + num2
  } else {
    return num1
  }
}
add2(5)

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
function add4(num1: number, num2: number = 10): number {
  // num2 is optional parameter, if no argument for num2, value of num2 is 10
  return num1 + num2
}
add4(5)

// -----------------------------------------------------------------------------

/*
4. Interface
    - Specify an object as a type
*/

// Old way (If object have many key-value, code looks ugly)
function showName(person: { firstName: string; lastName: string }) {
  console.log(`Hello, ${person.firstName} ${person.lastName}`)
}

let p1 = {
  firstName: "temp",
  lastName: "user",
}

showName(p1)

// Use interface instead! (keyword is 'interface', you can use interface as a object type)
interface Person {
  firstName: string
  lastName: string
  age?: number // age is optional, most used in form input.
}

function showName2(person: Person) {
  if (person.age) {
    console.log(
      `Hello, ${person.firstName} ${person.lastName}, age : ${person.age}`
    )
  } else {
    console.log(`Hello, ${person.firstName} ${person.lastName}`)
  }
}

let p2 = {
  firstName: "Sorawong",
  lastName: "Leardmongkonrut",
}

showName2(p2)

// -----------------------------------------------------------------------------

// 5. Class
class Employee {
  employeeName: string

  constructor(name: string) {
    this.employeeName = name
  }

  greeting() {
    console.log(`Good morning, ${this.employeeName}`)
  }
}
let emp1 = new Employee("Sorawong")
console.log(emp1.employeeName)
emp1.greeting()

// 5.1 Inherit
class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName) // 'super' keyword use for call base class constructor (Employee constructor)
  }

  working() {
    console.log(`Manager ${this.employeeName} is working...`)
  }
}
let m1 = new Manager("Boss")
console.log(m1.employeeName)
m1.greeting()
m1.working()

// -----------------------------------------------------------------------------

// 6. Access modifiers
// 6.1 private
//  - In class, using 'private' keyword if you didn't want outside to access variable in class. private variable can access only in class using 'this' keyword
class Phone {
  private phoneName: string

  constructor(pName) {
    this.phoneName = pName
  }

  showName() {
    console.log(`This is ${this.phoneName}`) // able to access private variable because this code inside class, can use 'this' keyword to access private variable
  }
}
let iphone = new Phone("iPhone")
// console.log(iphone.phoneName) // Error, phoneName is private
iphone.showName()

// 6.2 protected
//  - 'private' keyword, outside ***AND EXTEND CLASS*** can't access variable
//  - If you didn't want outside to access variable BUT want extend class (inherit class) able to access variable, use 'protected' keyword instead
class Player {
  protected playerName: string

  constructor(name) {
    this.playerName = name
  }
}

class GM extends Player {
  constructor(name) {
    super(name) // call parent constructor (Player constructor)
  }

  showName() {
    console.log(`Hello GM, ${this.playerName}`) // extend class can access protected variable in parent class
  }
}
let gm1 = new GM("GOD")
// console.log(gm1.playerName); // Error, can't access protected variable
gm1.showName()

// -----------------------------------------------------------------------------
