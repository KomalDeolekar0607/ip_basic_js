/// creating object using literal syantax
var person = {
    name : "komal",
    surname : "Deolekar",
    age : 19,
    DOB : "06-07-2005",
    displayName : function(){
        alert(this.name)
    }
}

for (const key in person) {
        const element = person[key];
        console.log(element)
}

//creating object using Object() constructor
var person = new Object()
person.firstName = "Rama"
person.age = 22
person.degree = "BCA"
person.printAll = ()=>{
    console.log(`person name : ${person.firstName}`)
    console.log(`person age : ${person.age}`)
    console.log(`person degree : ${person.degree}`)
}

person.printAll()

//creating object using class keyword
class Person {
    constructor(name ,age){
        this.name = name
        this.age = age
    }

    showDetails(){
        console.log(`Your name : ${this.name} and age is : ${this.age}`)
    }
}

const p1 = new Person("Komal", 19)
p1.showDetails()


//creating object using Constructor function
function Person1(name , age , salary){
    this.name = name
    this.age = age
    this.salary = salary

    this.showAll = ()=>{
        console.log(`name : ${this.name} salary : ${this.salary}`)
    }
}

let p2 = new Person1("sara" ,25 , 25000)
p2.showAll()


//assigning class to a variable
let person3 = class {
    constructor(lastname , idNumber){
        this.lastname = lastname
        this.idNumber = idNumber
    }

    show(){
        console.log(this.lastname)
        console.log(this.idNumber)
    }
}

let p4 = new person3("Deo" , 202 )
p4.show()


let arrow1 = (num1 ,num2)=>{
    return console.log(num1+num2)
}

arrow1(2,2)

let arrow2 = num1 => num1*num1

console.log(arrow2(22))

let arrow3 = ()=>{
    console.log("Hello everyone....")
}

arrow3()



function Person5(name) {
    this.name = name;
    this.sayName = function() {
        setTimeout(() => {
            console.log(this.name); // 'this' refers to the Person object, not the global object
        }, 1000);
    };
}

const p5 = new Person5('Komal');
p5.sayName(); // After 1 second, logs "Komal"



function Person6(name) {
    this.name = name;
    this.sayName = function() {
        setTimeout(function() {
            console.log(this.name); // 'this' refers to the global object or is undefined
        }, 1000);
    };
}

const p6 = new Person6('Komal');
p6.sayName(); // After 1 second, logs undefined or throws error in strict mode
