//------------------------------------------------------ ES6 Features ---------------------------------------------------------------
//-------------------------Let and Const----------------------------
//------------------------------------
//we know we can create variables in js using var ES6 introduced let
//the main difference between let and var is that var creates a global variable whereas let creates a block scoped variable
var variable = 'test';
console.log('variable is ' + variable);
variable = "new test";
console.log('variable now changed to ' + variable);
//const keyword is used to create a constant
var maxLevels = 100;
console.log('maxLevels constant value is ' + maxLevels);
//once defined a constant cant be changed that is why below line gives an error
//maxLevels=500;
//------------------------------------
//-------------------------Let and Const Ends------------------------
//------------------------- Block Scope ------------------------
//------------------------------------
function reset() {
    //the below line here gives error as the variable is declared outside the function so according to block scope it doesnt exist here 
    //if we want it here we would need to pass it as an argument
    //console.log(variable);
    var variable = null;
    console.log('variable inside reset function is ' + variable);
}
reset();
//this would print the variable declared at top in this file not the one inside reset as that is a seperate variable with scope only inside the reset function 
console.log('variable outside reset function is ' + variable);
//------------------------------------
//------------------------- Block Scope Ends------------------------
//------------------------- Arrow Function --------------------------
//------------------------------------
//traditionally we can define a function as follows
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log('adding numbers using a traditional function ' + addNumbers(10, 23));
//we have another syntax to declare functions called arrow function
var sayHelloToWorld = function () { return console.log('hello world'); };
console.log('lets say hello ');
sayHelloToWorld();
//if we have only 1 param we can skip the ()
var writeSquare = function (input) { return console.log(input * input); };
console.log('square of 4 is  ');
writeSquare(4);
//if we want to define type of our aram we need to use () even if we have one parameter
var writeSquareStrict = function (input) { return console.log(input * input); };
console.log('square of 4 is  ');
writeSquareStrict(4);
//if we want to define multiple params we need to use () 
var addNumbersArrow = function (number1, number2) { return console.log(number1 + number2); };
console.log('sum of 4 and 7 is  ');
addNumbersArrow(4, 7);
//if we want we can add multiline method body  
var addNumbersAndReturnSumArrow = function (number1, number2) {
    return number1 + number2;
};
console.log('sum of 4 and 7 is  ' + addNumbersAndReturnSumArrow(4, 7));
//if we have only single line in method body we can skip return keyword and {}  
var multiplyNumbersAndReturnProductArrow = function (number1, number2) { return number1 * number2; };
console.log('product  of 4 and 7 is  ' + multiplyNumbersAndReturnProductArrow(4, 7));
//------------------------------------
//------------------------- Arrow Function Ends------------------------
//------------------------- Default Parameters------------------------
//------------------------------------
//ES6 allows us to give default values to parameters if no value is passed.
//if we pass a value the default is overridden
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log('start initially was ' + start);
    while (start > 0) {
        start--;
    }
    console.log('done ' + start);
};
console.log('countdown using defaults ');
countdown();
console.log('countdown overriding defaults ');
countdown(20);
// default parameters can refer each other
var countdown1 = function (start, end) {
    if (start === void 0) { start = 10; }
    if (end === void 0) { end = start - 5; }
    console.log('start initially was ' + start);
    console.log('end initially was ' + end);
    while (start > 0) {
        start--;
    }
    while (end > 0) {
        end--;
    }
    console.log('done ' + start);
    console.log('end now is ' + end);
};
console.log('countdown using defaults ');
countdown1();
console.log('countdown overriding start defaults ');
countdown1(20);
console.log('countdown overriding all defaults ');
countdown1(20, 22);
//------------------------------------
//------------------------- Default Parameters Ends-------------------
//------------------------- Rest and Spread Operators -------------------
//------------------------------------
//spread operator represented by ... is used to spread out the elements of an array as a list 
var numbers = [1, 2, 3, 4, 5];
//the below used max function takes in a list of numbers and we cant pass an array to it
console.log(Math.max(5, 6, 7, 8));
//Thus below line gives an error
//console.log(Math.max(numbers));
//to solve this we can use the spread operator as follows
console.log(Math.max.apply(Math, numbers));
//------------------------------------
//rest operator also represented by ... is used to combine a list of parameters to an array
function makeArray(val1, val2) {
    return [val1, val2];
}
//the above function takes in two numbers and returns an array
console.log(makeArray(22, 33));
//the above function can take only two args if we want to supply multiple args and create an array we can use the rest operator ...
function makeArrayRest() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
//the above function can now take multiple args
console.log(makeArrayRest(22, 33, 44, 55));
//we can combine rest args and multiple args but we need to make sure that normal args are written first and rest arg is written at end
function makeArrayRest1(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log('passede name was ' + name);
    return args;
}
console.log(makeArrayRest1('rudhra', 22, 33, 44, 55, 66, 77));
//Since TypeScript 3, you can also use tuples as types for rest expressions.
//For example, these two function signatures are equal:
function printInfo(name, age) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
function printInfo1() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
printInfo('rudhr', 28);
printInfo1('rudhr', 28);
//------------------------------------
//------------------------- Rest and Spread Operators Ends---------------
//------------------------- Destructuring ---------------
//---------------- Destructuring Arrays --------------------
//------------------------------------
//Destructuring is a clean and neat syntax to get values out of an array
var myHobbies = ['coding', 'reveiw'];
//if i have to print the values in this array i have to do something like
var hobby1 = myHobbies[0];
var hobby2 = myHobbies[1];
console.log('my hobbies are ' + hobby1 + ' and ' + hobby2);
//using destructuring i can write same as
var hobby3 = myHobbies[0], hobby4 = myHobbies[1];
console.log('my hobbies using destructuring are ' + hobby3 + ' and ' + hobby4);
//------------------------------------
//---------------- Destructuring Arrays Ends ----------------
//---------------- Destructuring Objects --------------------
//------------------------------------
//Destructuring can also be used with objects
var myData = { name1: 'Rudhra', age: 28 };
//if i have to print the values in this array i have to do something like
var myNamee = myData.name1;
var myAgee = myData.age;
console.log('my details are ' + myNamee + ' and ' + myAgee);
//using destructuring i can write same as
var name1 = myData.name1, age = myData.age;
console.log('my details are ' + name1 + ' and ' + age);
//we have to keep the constant names same as variable names in object
//to change that we can use : to create aliases
var name3 = myData.name1, age3 = myData.age;
console.log('my details are ' + name3 + ' and ' + age3);
//------------------------------------
//---------------- Destructuring Objects Ends ----------------
//------------------------- Destructuring Ends-----------
//------------------------- Template Literals -----------
//------------------------------------
//template literals allow us to write complex /multiline strings with variables
var userName = 'rudhra';
var complexString = 'this is a heading ' + ' my name is ' + userName + ' i am so cool ';
console.log(complexString);
//in the above string we need to use a lot of + signs and also we are unable to write multiline strings
//we can do this using template literals
var templateLiteralComplexString = "this is a heading \nmy name is " + userName + " \ni am so cool";
console.log(templateLiteralComplexString);
//------------------------------------
//------------------------- Template Literals Ends-------
//------------------------------------------------------ ES6 Features Ends ---------------------------------------------------------
//# sourceMappingURL=es6Features.js.map