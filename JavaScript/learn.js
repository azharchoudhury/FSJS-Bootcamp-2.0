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

// switch case

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
    default:
        console.log("Invalid");
}


//ternary operator

// Condtion ? True : False


5 < 7 ? console.log("It is true") : console.log("It is false")


*/


/*
//Arrays and Objects

let friends = ['Abhijnan' , 'Bhargav' , 'Chiradeep', 'Abhishek', 'Janmajay', 'Shubhrojit' , 'Swami' , 'Hrithik' , 'Vivek' , 'Guddu'];

console.log(friends);

for(let i =0; i<friends.length; i++){
    console.log(friends[i]);
}



let accountDetails = {
    name : "Azhar Choudhury",
    age : 25,
    profession : "Software Engineer",
    contactNumber : 9543216780,
    balance : 9542200,
    city : "Silchar"
};

console.log(accountDetails);
console.log(accountDetails.name);
console.log(accountDetails.profession);


const myDate = new Date();
console.log(myDate.toString());
console.log(myDate.getFullYear());
console.log(myDate.getMonth()); // month starts from 0 and ends in 11
console.log(myDate.getDay()); //day starts from 0 i.e. Sunday is at 0 and Saturday is at 6
console.log(myDate.getTime()); //the time shown will be in miliseconds
console.log(myDate.getHours()); //it will be shown in 24 hours format
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());


const piValue = Math.PI;    //access the value of PI variable from the Math object
console.log(piValue);

console.log(Math.round(piValue));
console.log(Math.round(5.765));
console.log(Math.round(5.365));


console.log(Math.floor(9.5));   //the value will decrease
console.log(Math.ceil(9.5));    //the value will increase

*/

/*

console.log(Math.max(10,4,22,189,1,10,999));
console.log(Math.min(10,4,22,189,1,10,999));

console.log(Math.random()); //this will always give a random value from 0 to 0.9999999999 (0-1)

console.log(Math.random() * 10); //this will give values more than 1 but limited to the result of 0-0.999999 * (number)

console.log(Math.random() * 50);
console.log(Math.round(Math.random() * 51)); //this will round off the random number
console.log(Math.pow(3, 2));
console.log(Math.log(2));

*/

/*

let nums = [25, 55, 100, 2, 66, 12, 5];
console.log(nums);

let names = ["Anurag", "Chiru", "Swami", "Bhargab"];
console.log(names);

console.log("Length of array nums: " , nums.length);
console.log("Length of array names: " , names.length);

console.log("----------------");

console.log("The name at 3rd position is: " , names[2]);
console.log("The name at the last position is: ", names[names.length-1]);

//Change name of last index
names[names.length-1] = "Abhirup";
console.log("The changed name at last position is: ", names[names.length - 1]);


//Another way to declare array

let namesList = new Array("Vivek", "Guddu", "Anki", "Shuvan");
console.log(namesList);

//But this method is not recommended

*/

// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************


//  ARRAY METHODS

//To insert an element in the array, we use the push() method . Ex-


let names = ["Anurag", "Chiradeep", "Swami", "Bhargab", "Abhirup", "Shuvan"];
console.log(names);

// If I want to insert the name Hrithik in the array.. ** when we use the push() method, the element is always added at the last index.

names.push("Hrithik");
console.log(names);

// slice() method - print the elements from a given start index to a given end index, and the end index is not included(it selects the elements till before the end index). **It doesn't change the original array. Ex-

console.log("Printing the names from Chiru to Abhirup- ", names.slice(1,5));
console.log("Printing the names from Chiru to Shuvan- ", names.slice(1,6)); //index 6 is not present though


// splice() method - add elements in the array either by keeping the existing elements or by removing/replacing the existing elements.

let fruits = ["Apple", "Mango", "Banana", "Kiwi", "Orange"];
fruits.splice(1,0,"Pineapple", "Watermelon");
console.log(fruits);

let vegetables = ["Potato", "Onion", "Carrot", "Ginger", "Garlic", "Cabbage", "Tomato"];
vegetables.splice(3, 2, "Beet", "Cauliflower", "Brokoli");

console.log(vegetables);