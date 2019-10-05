function greet(person: any) {
    console.log('hi ' + person.name);
}

const person = {
    name: 'Rudhra',
    age: 27
};
// if i dont define a name property above in const person no compilation error will be there as no contract is defined but at runtime i will get undefined
greet(person);

//Now we are defining a contract that person should be an object that has a name property
function greetMe(person: { name: string }) {
    console.log('hi ' + person.name);
}
const personWithFirstName = {
    Firstname: 'Rudhra',
    age: 27
};
greetMe(person);
//below line gives a compilation error as personWithFirstName doesnt satisfy the contract that it should have a field name of type string
//greetMe(personWithFirstName);

// now we may have multiple functions that also uses the same contract but we cant reuse the contract and if contract changes we need to update it at multiple places
//to resolve this we can create an interface with interface keyword 
interface personWithName {
    name: string;
}


function changeName(person: personWithName) {
    person.name = 'jalebi bai';
}


function getName(person: personWithName) {
    console.log('name is ' + person.name);
}

getName(person);
changeName(person);
getName(person);
//below line gives a compilation error as personWithFirstName doesnt satisfy the contract specified by the interface personWithName
//getName(personWithFirstName);

//if object literals are directly passed they are more strictly checked as Object literal may only specify known properties
//getName({name:'rudhra', age: 27});
getName({ name: 'rudhra' });

// we can also specify optional arguments in interfaces
interface personWithNameAndMaybeAge {
    name: string;
    //optional arguments
    age?: number;
}




function getNameAgain(person: personWithNameAndMaybeAge) {
    console.log('name again is ' + person.name);
}


getNameAgain({ name: 'rudhra' });
getNameAgain(person);
getNameAgain({ name: 'rudhra', age: 27 });

//unnamed properties
interface personWithNameAndMaybeAgeMaybeSomethingElse {

    name: string;
    //optional arguments
    age?: number;
    //dont know property name yet
    [propName: string]: any;


}

function whatIsMyName(person: personWithNameAndMaybeAgeMaybeSomethingElse) {
    console.log('name issss ' + person.name);
}

const per = {
    name: 'baby',
    age: 1,
    gender: 'male'
};

const pers = {
    name: 'baby',
    gender: 'male'
};

whatIsMyName(per);
whatIsMyName(pers);

// interfaces with methods

interface personWithNameAndMaybeAgeMaybeSomethingElseAndAMethod {

    name: string;
    //optional arguments
    age?: number;
    //dont know property name yet
    [propName: string]: any;
    greet(lastName: string): void;


}



const perso: personWithNameAndMaybeAgeMaybeSomethingElseAndAMethod = {
    name: 'baby',
    age: 1,
    gender: 'male',
    greet(lastName: string): void {
        console.log('heya i am ' + this.name + ' ' + lastName);
    }
};
perso.greet(' bacha ');


//interfaces with classes
class Aadmi implements personWithNameAndMaybeAgeMaybeSomethingElseAndAMethod {
    name: string;
    age: number;
    gender: 'male';
    greet(lastName: string): void {
        console.log('heya i am ' + this.name + ' ' + lastName);
    }
    constructor(name: string) {
        this.name = name;

    }
}

let AamAadmi: Aadmi = new Aadmi('Arvind');

AamAadmi.greet('kejriwal');


//interfaces and function types


interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (value1: number, value2: number): number {
    return value1 + value2;
}

console.log(myDoubleFunction(10, 30));
//doesnt work as doesnt follow interface contract
//myDoubleFunction= function(value1: string,value2: number): number
//{
// return value2;
//}

//interface inheritance
interface NamedPersonWithGender extends personWithNameAndMaybeAge {
    gender: string;
}

interface NamedPersonWithGenderAndAge extends personWithNameAndMaybeAge {
    gender: string;
    //overriding
    age: number;
}
const malePerson: NamedPersonWithGender = {
    name: 'rudhraaaa',
    //age: 28,
    gender: 'male'
}

const femalPerson: NamedPersonWithGenderAndAge = {
    name: 'sheila',
    age: 28,
    gender: 'female'
}

greet(malePerson);
greet(femalPerson);
