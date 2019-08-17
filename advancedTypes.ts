//------------------------------------------------------ Advanced Types -----------------------------------------------------------------------------

//---------------------------- Functions ---------------------------------

//---------------- Functions Basics --------------------

//------------------------------------

//in ts we can define functions as follows
let maName='Rudhra'; 
function returnMyName() {
    return maName;
}
console.log('calling returnMyName function '+ returnMyName());

//------------------------------------

 
let realNumber=10; 
function returnMyRealName() {
    return realNumber;
}
console.log('calling returnMyRealName function '+ returnMyRealName());
//since we dont define a return type explicitly we can return anything from a function

//------------------------------------

let realName='Rudhra'; 
let realNum=10; 
//we can define the return type explicitly as follows
function returnMyRealNam() : String {
    //return realNumber;
    return realName;
}
console.log('calling returnMyRealNam function '+ returnMyRealNam());
//since we  define a return type explicitly we can return only a string from this function

//------------------------------------
//function with void return type
function sayHello() : void {
    console.log('hello');
}
console.log('calling returnMyName function '+ sayHello());

//------------------------------------

//we can define the return type explicitly as follows 
//to show this example comment out strict usage in tsconfig
// function multiply(value1 , value2): number {
//     return value1 * value2;
// }
// console.log('calling multiply function '+ multiply(10,'MAX'));
//The above function call returns NaN(Not a Number) which is a type in js specifying that result should have been a number but was not

//------------------------------------

let num1 : number =30; 
let num2 : number =10; 
//we can define the parameter types explicitly as follows
function multiplyWithStrictTypes(value1: number , value2: number): number {
    return value1 * value2;
}
//following line will give an error as we defined parameter types explicitly
//console.log('calling multiply function '+ multiplyWithStrictTypes(10,'MAX'));
console.log('calling multiplyWithStrictTypes function '+ multiplyWithStrictTypes(num1,num2));

//------------------------------------

//---------------- Functions Basics Ends ---------------

//-------------------- Functions As Types -------------------

//------------------------------------

//in typr script we can use functions as types 
//It is important to note here that we are not using the function return type as typ but the whole function as a type
let myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply=multiplyWithStrictTypes;
console.log('calling myMultiply as multiplyWithStrictTypes '+myMultiply(10,20));

//------------------------------------

//in above example we are able to hold any type of function in a variable
//If we want to define what kind of function signatures the variable can hold we can do that
let myNewMultiply : (val1:number,val2:number) => number ;
//Now since we are restricting it to hold a function with two parameters the below lines would give an error
//we also notice that the names of parameters do not matter  only types and order matter
//myNewMultiply = sayHello;
//myNewMultiply();
myNewMultiply=multiplyWithStrictTypes;
console.log('calling myNewMultiply as multiplyWithStrictTypes '+myNewMultiply(10,20));

//------------------------------------

//-------------------- Functions As Types Ends ---------------


//---------------------------- Functions Ends ----------------------------

//---------------------------- Objects -----------------------------------

//------------------------------------

//we can create objects in ts using below syntax

let userData = {
    name:'rudhra',
    age: 28
}
//now this userData object has a name property of type string and age property of type number automatically infered by ts
//so since the types are explicitly defined for the  parameters the below line fails as we cant assign an empty object to it.
//userData={};
console.log('userData is '+ userData);
//------------------------------------

//similarly we cant  do something like below as property names should match exactly with the definition
// userData= {
//     a: 'rudhra',
//     b:28

// }

//------------------------------------

// we can specify the exact types that are required by an object as follows

let usersData: {name: String, age: number} = {
    name:'rudhra',
    age: 28
}

console.log('usersData with type restrictions is '+ usersData);
console.log('usersData contains name as  '+ usersData.name + ' usersData contains age as ' +userData.age);

//------------------------------------

//complex object example

let complexObject : {data: number[] , getData : (returnAll : boolean) => number[]} ;

//the above object has two fields 
//data field of type array of numbers
//getData field of type function which takes in a parameter boolean and returns an array of numbers
// lets assign values to this object
complexObject = {
    data : [10,20,30],
    getData : function (returnAll: boolean) : number[] {
        if(returnAll)
        {
            return this.data;
        } 
        else {
            return [this.data[0]];
        }
    } 
}
console.log('complex object with true passed to getdata is '+complexObject.getData(true));
console.log('complex object with false passed to getdata is '+complexObject.getData(false));

//------------------------------------

//-------------------------- custom Types with Type Aliases --------------------------------

//------------------------------------

//to be able to reuse types we can save the type definition by using type alias below is the syntax to create a type matching the complexObject Created above

type complexType = {data: number[] , getData : (returnAll : boolean) => number[]} ;

let complexObject1 : complexType = {
    data : [10,20,30],
    getData : function (returnAll: boolean) : number[] {
        if(returnAll)
        {
            return this.data;
        } 
        else {
            return [this.data[0]];
        }
    } 
}

let complexObject2 : complexType = {
    data : [10,33,340],
    getData : function (returnAll: boolean) : number[] {
        if(returnAll)
        {
            return this.data;
        } 
        else {
            return [this.data[0]];
        }
    } 
}

//Now the complexObject1 and complexObject2 must match the type defined by type alias complexType.This helps us to reuse type definitions
console.log('complex object1 with true passed to getdata is '+complexObject1.getData(true));
console.log('complex object1 with false passed to getdata is '+complexObject1.getData(false));
console.log('complex object2 with true passed to getdata is '+complexObject2.getData(true));
console.log('complex object2 with false passed to getdata is '+complexObject2.getData(false));

//------------------------------------

//-------------------------- custom Types with Type Aliases Ends ----------------------------

//-------------------------- Allowing multiple Types with Union Types -----------------------------

//------------------------------------

//we might have a scenario where we want our variable to be able to handle more than one data type
//say for example a string or a number
//to achieve this we need to declare it as type any
//but the disadvantage is now it can also hold boolean array function etc

let myRealAge :any ;
myRealAge =28;
console.log('my real age is '+ myRealAge);
myRealAge ='28';
console.log('my real age is '+ myRealAge);
myRealAge =true;
console.log('my real age is '+ myRealAge);

//if we want our data type to be able to handle just a few data types we can do that using union types as shown below
let myActualAge :String | number;
myActualAge =28;
console.log('my actual age is '+ myActualAge);
myActualAge ='28';
console.log('my actual age is '+ myActualAge);
//below line gives an error as our variable can only be assigned String or number not boolean
//myActualAge =true;

//------------------------------------

//-------------------------- Allowing multiple Types with Union Types Ends  -----------------------

//-------------------------- Checking for Types during Runtime -------------------------------------

//------------------------------------

//to achieve type checks we can use typeof operator

let exampleValue;
exampleValue=20;
if(typeof exampleValue == 'number')
{
    console.log('exampleValue is a number '+ exampleValue);
}
exampleValue ='rudhra';
if(typeof exampleValue == 'string')
{
    console.log('exampleValue is a string '+ exampleValue);
}

//------------------------------------

//-------------------------- Checking for Types during Runtime Ends --------------------------------

//---------------------------- Objects Ends ------------------------------

//---------------------------- Never ------------------------------

//------------------------------------

//never is a new type introduced after ts 2
// it is used to signify that if this is called the code will never return
//for example consider below function

function neverReturns() : never {
    throw new Error('dangerous error now you are stuck here and will never return');
}

//------------------------------------

//---------------------------- Never Ends -------------------------

//---------------------------- Nullable ------------------------------

//------------------------------------

//nullable is a new type introduced after ts 2
// By default e can assign null to any type
//for example consider below code

// let canBeNull=12;
// canBeNull=null;
// let canAlsoBeNull; //here value is undefined as per js standard not null
// canAlsoBeNull=null;

// but after we set strictNullChecks compiler option to true we cant do it.
//we can either specify a type to be nullable or  assign null during declearation or else we cant assign null
//set an object to be nullable
let canBeNull : number | null=12;
console.log('can be null is '+ canBeNull);
canBeNull=null;
console.log('can be null now is '+ canBeNull);
let canAlsoBeNull;
console.log('canalsobenull is '+ canAlsoBeNull);
canAlsoBeNull=null;
console.log('canalsobenull now is '+ canAlsoBeNull);

//------------------------------------

//---------------------------- Nullable Ends -------------------------

//------------------------------------------------------ Advanced Types Ends -------------------------------------------------------------------------