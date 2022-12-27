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




// Scope of a variable 

// var let and const



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





console.log(Math.max(10,4,22,189,1,10,999));
console.log(Math.min(10,4,22,189,1,10,999));

console.log(Math.random()); //this will always give a random value from 0 to 0.9999999999 (0-1)

console.log(Math.random() * 10); //this will give values more than 1 but limited to the result of 0-0.999999 * (number)

console.log(Math.random() * 50);
console.log(Math.round(Math.random() * 51)); //this will round off the random number
console.log(Math.pow(3, 2));
console.log(Math.log(2));





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
// fruits.splice(2); // this creates an array with the elements before the mentioned index i.e. 2 here.
console.log(fruits);

let vegetables = ["Potato", "Onion", "Carrot", "Ginger", "Garlic", "Cabbage", "Tomato"];
vegetables.splice(3, 2, "Beet", "Cauliflower", "Brokoli");

console.log(vegetables);





// concat() method - concatenates two or more arrays and returns a new array

console.log(fruits.concat(vegetables));

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arr3 = [9, 10, 11, 12];

console.log("The resultant array by concatenating arr1, arr2, and arr3: ", arr1.concat(arr2, arr3));




// fill() method - replaces elements in an array to a static value, from a start index to an end index.



let namesss = ["Vinay", "Ajay", "Reeshav", "Akash"];
namesss.fill("Aman", 2, 3);
// namesss.fill("Aman", 2, 4);
console.log(namesss);


let num = [1, 2, 3, 4 ,5, 6, 7, 7, 8, 10];
console.log("Is 5 present at or after the index 4? ", num.includes(5, 4));

console.log("Is 7 present at or after the index 3? ",num.includes(7, 3));

console.log("Is 4 present at or after the index 6? ",num.includes(4, 6));


// Another example 

let sentence = "Tiny Changes, Remarkable Results";

console.log("Is the word \"Changes\" present in the sentence after  0th index?", sentence.includes("Changes", 0));
//This will be true as the word Changes is after the 0th index

console.log("Is the word \"Changes\" present in the sentence after  5th index?", sentence.includes("Changes", 5));
//This will also be true as the word Changes starts from the 5th index

console.log("Is the word \"Changes\" present in the sentence after  6th index?", sentence.includes("Changes", 6));
//This will be false as the word Changes starts from 5th index and from the 6th index, it will start from "hanges".

// ****** the includes() method checks strings as case sensitive.


//indexOf() method - checks and returns the index of a given value and returns -1 if the value is not present. Also, if there are multiple occurance of the same value, then it will return the index of the value which comes first. 
// **** This is case sensitive for Strings

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Check the index of the number 6 - ", num.indexOf(6));

let quote = "Make better habits to make a change in life";
console.log(quote.indexOf("make"));


//isArray() - determines whether the passed value is an array.
// We can only use it as Array.isArray(name-of-the-array);
// If we use it as (arrayName).isArray(), it will return undefined.

let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log("Is fruits variable an array? ", Array.isArray(fruits));

let name = "Azhar Choudhury";
console.log("Is name variable an array? ", Array.isArray(name));


// join() - joins the elements of an array into a string. It doesn't chagne the oriiginal array

let arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.join(' '));
console.log(arr1.join(' ,and '));


//lastIndexOf() - returns the index of the last occurence of a specified value in a string and returns -1 if the value is not found. It is case-sensitive
// ** It starts searching from the end (it doesn't mean that it will count the last element as 0th index.)

let arr2 = [1, 2, 3, 4, "Azhar", 5, 6, 7 ,"Azhar", 8];
console.log(arr2.lastIndexOf("Azhar"));
console.log(arr2.lastIndexOf("Azhar", 7)); // it will start looking for Azhar from the 7th index till the 1st index and will ignore the elements which are after the 7th index. So, basically it will ignore the "Azhar" element which is at the 8th index.

let friendNames = ["Sanjay", "Aman", "Rehman", "Aman", "Rahul"];
console.log(friendNames.indexOf("Aman"));
console.log(friendNames.indexOf("Aman", 2)); //it will start searching from 2nd index and hence will return the index value 3 as Aman is at the 3rd index.



//map() 

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.map(
    function add(x){
        let multiply = x * 5;
        return multiply;
    }
    ))
    
    
    //pop() - removes the last element of an array. It changes the oirignal array and it returns the removed element when printed.
    
    let fruits = ["Mango", "Banana", "Orange", "Apple"];
    console.log(fruits.pop());
    console.log(fruits);
    
    
    //reverse() - reverses the order of the elements in an array and it overwrites the original array.
    
    let arr3 = [1, 2, 3, 4, 5, 6];
    console.log(arr3.reverse());
    
    let namess = ["Kunal", "Shitij", "Rahul", "Dherya"];
    console.log(namess.reverse());
    
    
    // shift() - removes the first element from an array and returns the removed element. It changes the length of the array
    
    let numArray = [10, 55, 25, 789, 100, 541];
    console.log(numArray.shift());
    console.log(numArray);
    
    
    //unshift() - adds new elements to the beginning of an array. It overwrites the original array
    
    let mixed = ["Azhar", 11, 67, 500, "Bhargav", 7, 10];
    mixed.unshift("Shuvan", "Hrithik", 99, 5);
    console.log(mixed);
    
    
    //sort()  - sorts the elements of an array in place and returns the reference to the same array.
    //The default sort order is ascending.
    
    
    let friends = ['Abhijnan' , 'Bhargav' , 'Chiradeep', 'Abhishek', 'Janmajay', 'Shubhrojit' , 'Swami' , 'Hrithik' , 'Vivek' , 'Guddu'];
    
    console.log(friends);
    console.log(friends.sort());    //ascending order
    console.log(friends.reverse());  //descending order
    //or,
    // console.log(friends.reverse(friends.sort())); //but this needs to be run before sorting the array
    
    
    // split() - splits a string into an array of substrings. It returns a new array, and it doesn't change the original string.
    
    let sentence1 = "Whatever it takes";
    // console.log(sentence1.split(' '));
    let newArray = sentence1.split(' ');
    console.log(newArray);
    console.log(newArray.length);
    console.log(sentence1.split(''));
    
    
    
    //for of loop - loops through the values of an iterable object.
    //It lets us loop over iterable data structures such as Arrays, Strings, Maps, Nodelists etc.
    
    let carBrands = ["BMW", "Mercedes", "Volvo", "Porsche", "Jaguar", "Volkswagen"];
    for(let element of carBrands){
        console.log(element);
    }
    
    console.log("*****************************");
    
    let name = "Azhar Choudhury";
    for(let i of name){
        console.log(i);
    }
    
    console.log("*****************************");
    
    let number = "2456";
    for(let digits of number){
        console.log(digits);
    }
    
    
    //This was fun....
    let oldBrands = ["Samsung", "Nokia", "Motorolla", "LG"];
    
    let newBrands = ["Oppo", "Vivo", "Lenovo", "Redmi"];
    
    let allBrands = [];
    
    for(let brands of newBrands){
        for(let brands of oldBrands){
            allBrands.push(brands.toUpperCase());
        }
        allBrands.push(brands.toUpperCase());
    }
    
    console.log(allBrands);
    
    
    
    //break
    for(let i=0; i<5; i++){
        if(i == 3){
            break;
        }
        console.log(i);
    }
    
    console.log("**********");
    
    //continue
    for(let i=0; i<5; i++){
        if(i == 3){
            continue;
        }
        console.log(i);
    }
    
    
    
    
    //functions
    
    function addNums() {
        let num1 = 5;
        let num2 = 15;
        
        console.log("Addition of two numbers: ", num1 + num2);
    }
    
    addNums();
    addNums();
    addNums();
    addNums();
    
    
    //let us change the numbers according to the user's will
    
    
    //if we want a void function then
    
    function addNums(num1, num2) {
        console.log("The sum of ", num1, " and ", num2, " is: ", num1 + num2);
    }
    
    
    addNums(2, 5);
    addNums(87, 44);
    addNums(19, 20);
    addNums(78, 52);
    addNums(29, 90);
    
    
    //function with return type
    
    function sum(a, b) {
        return a + b;
    }
    
    
    console.log("The sum is:  ", sum(2, 5));
    console.log("The sum is:  ", sum(25, 15));
    console.log("The sum is:  ", sum(66, 43));
    console.log("The sum is:  ", sum(103, 78));
    console.log("The sum is:  ", sum(66, 87));
    console.log("The sum is:  ", sum(256, 512));
    
    
    //**********************************************************
    //functions with strings
    
    function url(domain, path){
        let protocol = "https://";
        let result = protocol + domain + path;
        return result;
    }
    
    let site = url("fonts.google.com", "/icons");
    console.log(site);
    
    
    // array in functions
    
    function sumArray(array) {
        let sum = 0;
        
        // for(let i=0; i<array.length; i++){
            //     sum = sum + array[i];
            // }
            
            for (let i of array) {
                sum += i;
            }
            return sum;
        }
        
        
        
        let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        
        let result1 = sumArray(arr1);
        console.log("The sum of the array is: ", result1);
        
        
        //array as arguments
        
        function arr2(){
            let sum = 0;
            
            // let's see how arguments stores the values
            // this is not used generally. Instead of 'arguments', we use spread and rest operators.
            // will learn about them later
            console.log(arguments);
            
            for(let i =0; i<arguments.length; i++){
                sum += arguments[i];
            }
            return sum;
            
        }
        
        
        let result2 = arr2(2, 4, 5, 6, 7, 1, 8, 9);
        console.log(result2);
        
        
        
        //Arrow Functions
        
        let demoArrow = () => {
            console.log("This is just an arrow function!!");
        }
        
        demoArrow();
        
        
        let sum = (num1, num2) => {return num1 + num2};
        console.log("Sum: ", sum(55,95));
        
        
        
        //Objects
        
        let user = {
            firstName: 'Azhar',
            lastName: 'Choudhury',
            role: 'Front-End Developer',
            level: '11'
        }
        
        console.log(user);
        console.log(user.role);
        
        user.level= '10';
        console.log(user);
        console.log(user.level);
        
        //let us print all the keys of the object with for-in loop
        
        console.log("This will print all the keys of the objec")
        for(let x in user){
            console.log(x);
        }
        
        console.log('');
        
        //let us print all the values of the keys in the object
        console.log("This will print all the values of the keys in the object");
        for(let x in user){
            console.log(user[x]);
        }
        
        
        
        let user = {
            firstName: 'Azhar',
            lastName: 'Choudhury',
            role: 'Front-End Developer',
            level: '11'
        }   //tried with for of loop.. it doesn't work with objects
        
        
        console.log('');
        
        for(let x in user){
            console.log(user[x]);
        }   //for in loops works for objects
        
        
        */