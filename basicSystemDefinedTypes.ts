//------------------------------------------------------ Basic System Defined Types -----------------------------------------------------------------------------
//------------------------------------ Basic Types ------------------------------------------------------------------------

//----------------Assigning types implicitly--------------------

//------------------------------------
//String
let myName='Rudhra';
//myName=28;
console.log('my name is '+ myName);
console.log('typeof my name is '+ typeof myName);

//------------------------------------
// number
let myNumber=5;
//myNumber='Rudhra';
console.log('my luck number is '+ myNumber);
console.log('typeof my luck number is '+ typeof myNumber);

//------------------------------------
// boolean
let hasHobbies=true;
//hasHobbies='Rudhra';
//hasHobbies=1;
console.log('Does  '+myName +' with lucky number '+ myNumber+' have any hobbies '+ hasHobbies);
console.log('typeof myName is '+ typeof myName +' typeof myNumber is '+ typeof myNumber+' typeof hasHobbies is '+ typeof hasHobbies);

//------------------------------------

//----------------Assigning types implicitly ends --------------------


//----------------Assigning types explicitly--------------------------
// This works because since we dd decleration and assignment on different lines.
// ts couldnt know at decleration time about the type of variable myRealName so assigned it as type any which is a js type that signifies it can save any type of data
// The disadvantage of any type is we are back to js world we dont get any type-checking,ide support etc
let myRealName;
myRealName='Rudhra';
console.log('my real name is '+ myRealName);
console.log('typeof myRealName is '+ typeof myRealName);
myRealName=7;
console.log('i am also sometimes reffered to as 00'+ myRealName);
console.log('typeof myRealName after reassignment is '+ typeof myRealName);

//------------------------------------
//Solution to the above problem is explicit type declearation  using the syntax let variableName: DataType ;
let myActualName: String;
myActualName='Rudhra';
//Below line results in error now as we explicitly introduced type checking
//myActualName=7;
console.log('my actual name is'+ myActualName);
console.log('typeof myActualName is '+ typeof myActualName);

//------------------------------------

// number
let myExplicitNumber: number=5;
//myExplicitNumber='Rudhra';
console.log('my explicit lucky number is '+ myExplicitNumber);
console.log('typeof myExplicitNumber is '+ typeof myExplicitNumber);

//------------------------------------
// boolean
let hasExplicitHobbies: boolean=false;
//hasExplicitHobbies='Rudhra';
//hasExplicitHobbies=1;
console.log('Does  '+myActualName +' with explicit lucky number '+ myExplicitNumber+' have any explicit hobbies '+ hasExplicitHobbies);
console.log('typeof myActualName is '+ typeof myActualName +' typeof myExplicitNumber is '+ typeof myExplicitNumber+' typeof hasExplicitHobbies is '+ typeof hasExplicitHobbies);

//------------------------------------

//----------------Assigning types explicitly ends---------------------

//------------------------------------ Basic Types ends -------------------------------------------------------------------

//------------------------------------ Arrays and Other Advenced Types ----------------------------------------------------

//--------------------------arrays with implicit type inference------------------------------------

//------------------------------------

let hobbies = ["poetry","coding"];
console.log('my top hobby is '+ hobbies[0]);
console.log('typeof hobbies is '+ typeof hobbies);
//The above code creates an array of strings(infered implicitly by ts) and if i try to assign an array of numbers to it i get an error
//hobbies =[100]
hobbies=["coding"];
console.log('now my top hobby changed to '+ hobbies[0]);
console.log('but still the type of hobbies is '+ typeof hobbies);

//------------------------------------

//--------------------------arrays with implicit type inference ends-------------------------------

//--------------------------arrays with explicit type inference------------------------------------

//------------------------------------

let newHobbies:any[] = ["poetry","coding"];
console.log('my new top hobby is '+ newHobbies[0]);
console.log('typeof newHhobbies is '+ typeof newHobbies);
//The above code creates an array of type any and if i try to assign an array of numbers to it i dont get an error
newHobbies =[100];
console.log('now my new top hobby changed to '+ newHobbies[0]);
console.log('but still the type of hobbies is '+ typeof newHobbies);
//the assignment still must be an array otherwise it will give an error
//newHobbies =100;

//------------------------------------

let petNames:String[] = ["bond","king"];
console.log('my petname '+ petNames[0]);
console.log('typeof petNames is '+ typeof petNames);
//The above code creates an array of type String and if i try to assign an array of numbers to it i  get an error
//petNames =[100];

//------------------------------------

let luckyNumbers:number[] = [5,6];
console.log('my lucky Number is '+ luckyNumbers[0]);
console.log('typeof luckyNumbers is '+ typeof luckyNumbers);
//The above code creates an array of type number and if i try to assign an array of Strings to it i  get an error
//luckyNumbers =["rudhra"];

//------------------------------------

let lies:boolean[] = [true,false,true];
console.log('is it a lie '+ lies[2]);
console.log('typeof lies is '+ typeof lies);
//The above code creates an array of type boolean and if i try to assign an array of Strings to it i  get an error
//lies =["rudhra"];

//------------------------------------

//--------------------------arrays with explicit type inference ends-------------------------------

//-----------------------------------------tuples--------------------------------------------------

//------------------------------------
//tuples are just like arrays but they are used in scenarios where we have mixed data type arrays in a particular order
let addresses=["roop nagar kholi no",420];
console.log("address array contains "+addresses[0] +' and '+ addresses[1]);
//the above is treated as an array of type any
addresses=["roop nagar kholi no",420,22];
console.log("address array contains "+addresses[0] +' and '+ addresses[1]+' and '+ addresses[2]);
//if we are sure that it will always contain string | number we can declare it as a touple

//------------------------------------
let addressTouple: [String,number]=["roop nagar kholi no",420];
console.log("address touple contains "+addressTouple[0] +' and '+ addressTouple[1]);
//the above is treated as an array of type [String,number]
//even if we try to reverse the order ie number|string it fails
//addressTouple=[420,"roop nagar kholi no"];
//Now we cant assign multiple values to it even if they have the same pattern string|number
//addressTouple=["roop nagar ",1,"prem gali",2];
console.log("address touple contains "+addressTouple[0] +' and '+ addressTouple[1]);
//------------------------------------

//-----------------------------------------tuples ends --------------------------------------------

//----------------------------------------- enums --------------------------------------------

//------------------------------------

//enums are used in ts for faster performance of branching like in case of switch case etc
enum Color {
    GRAY, // BY DEFAULT 0
    GREEN, // BY DEFAULT 1
    BLUE // BY DEFAULT 2
}

let colour :Color=Color.GREEN;
console.log('Default numerical value of green colour is '+ colour);

//------------------------------------

//enums default indexes can be changed
enum Fruits {
    APPLE, // BY DEFAULT 0
    BANANA = 200, // BY DEFAULT 1
    MANGO, // AUTOMATICALLY INCREMENTS THE VALUE BEFORE IT SO BECOMES 201
    ORANGE = 7,
    GRAPES //  AUTOMATICALLY INCREMENTS THE VALUE BEFORE IT SO BECOMES 8
}

console.log(' numerical value of APPLE is '+ Fruits.APPLE);
console.log(' numerical value of BANANA is '+ Fruits.BANANA);
console.log(' numerical value of MANGO is '+ Fruits.MANGO);
console.log(' numerical value of ORANGE is '+ Fruits.ORANGE);
console.log(' numerical value of GRAPES is '+ Fruits.GRAPES);

//------------------------------------

//----------------------------------------- enums ends ---------------------------------------

//----------------------------------------- type any -----------------------------------------

//------------------------------------

//any is a type that can be assigned any value and has no type checking.
//should be avoided as much as possible
let car : any ="BMW";
console.log("car is "+car)
car= 23;
console.log("car NOW IS is "+car)

//------------------------------------

//----------------------------------------- type any ends ------------------------------------

//------------------------------------ Arrays and Other Advenced Types Ends -----------------------------------------------

//------------------------------------------------------ Basic System Defined Types Ends ------------------------------------------------------------------------