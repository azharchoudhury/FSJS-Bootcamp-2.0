/*

let firstName = 'Azhar';
let lastName = 'Choudhury';
const mobileNum = 7002763674;

// console.log('My first name is ' + firstName);
// console.log('My last name is ' , lastName);
// console.log('My name is ' , firstName , lastName);
// console.log(mobileNum);

var text = "Hello India";
console.log(text);


// Template Literal

console.log(`My first name is ${firstName}`);
console.log(`My last name is ${lastName}`);
console.log(`My name is ${firstName} ${lastName} and my contact number is ${mobileNum}`);

*/



/*

// Operators


// 1. Assignment Operator ( = )

let x = 20;
let y = 5;
let z = x + y;
// console.log(z);

// Arithmetic Operator ( + - * / % )

console.log( x + y);
console.log( x - y);
console.log( x * y);
console.log( x / y);
console.log( x % y);

// Comparison Operator

let abc = 10;
let xyz = 20;

console.log(abc > xyz);
console.log(abc < xyz);
console.log(abc >= xyz);
console.log(abc <= xyz);

// Difference between == and ===

let num1 = 20;
let num2 = 20;
let num3 = '20';    // This is a string

console.log('num1 == num2: ', num1 == num2);  //This will give true
console.log('num1 == num3: ', num1 == num3);  //This will also give true even if we are comparing a number with a string, because == compares values irresprective of the data types
console.log('num1 === num2' , num1 === num2)  //This will show true as the data types are same for both the variables
console.log('num1 === num3', num1 === num3)   //This will show false as the data types are not same for both the variables: num1 is a number and num3 is a string

*/


// Scope of a variable 

// var let and const

/*

var a = 10;
a = 15;
console.log('Value of a: ', a);
//We can redefine the value of a variable initialised with the var keyword

let b = 20;
b = 77;
console.log('Value of b: ', b);
//We also see that we can redefine the value of a variable initialised with the let keyword

//Let us see with the const keyword
const c = 28;
// c = 14;  //This cannot be done for a constant variable 
console.log('Value of c: ',c);
//This will throw a run-time error as the variable c is a constant variable and we cannot change the values of constant variables.

*/


/*

var x = 10;

if(true){
    var x = 25;
    console.log('Value of x inside the if condition: ', x); //This will print 25
}
console.log('Value of x outside the if condition: ', x);    //This will also print 25

//Both the values will be same that is, the scope of var is global. The same variable once declared outside a scope can be redeclared inside any other scope and the value will be changed.


let y = 24;

if(true){
    let y = 85;
    console.log('Value of y inside the if condition: ', y); //This will print 85
}
console.log('Value of y inside the if condition: ', y); //This will print 24 because the scope of y declared outside the if condition is global but, the scope of the variable y declared inside the if condition is local to the if condition only and hence, that value can't be accessed outside the if condition or outside that scope.

const z = 88;
if(true){
    const z = 100;
    console.log('Value of z inside the if condition: ', z); //This will print 100
}
console.log('Value of z outside the if condition: ', z);    //This will print 88 as the scope of z declared outside the if condition is global but, the scope of the variable z declared inside the if condition is local to the if condition only and hence, that value can't be accessed outside the if condition or outside that scope.

*/


/*

// conditions

// if-else

let age = 12;

if(age>=18){
    console.log("You are an adult. You can have the access.");
}
else if(age<18){
    if(age<15){
        console.log("You are too young to ask for the permission as well.. Go home.. ☹️");
    }
    else
    console.log("You can have the minor access. Please bring your guardian along with you..")
}

// switch

let day = 4;

switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
}


*/

