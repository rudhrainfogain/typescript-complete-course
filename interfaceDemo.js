function greet(person) {
    console.log('hi ' + person.name);
}
var person = {
    name: 'Rudhra',
    age: 27
};
// if i dont define a name property above in const person no compilation error will be there as no contract is defined but at runtime i will get undefined
greet(person);
//Now we are defining a contract that person should be an object that has a name property
function greetMe(person) {
    console.log('hi ' + person.name);
}
var personWithFirstName = {
    Firstname: 'Rudhra',
    age: 27
};
greetMe(person);
function changeName(person) {
    person.name = 'jalebi bai';
}
function getName(person) {
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
function getNameAgain(person) {
    console.log('name again is ' + person.name);
}
getNameAgain({ name: 'rudhra' });
getNameAgain(person);
getNameAgain({ name: 'rudhra', age: 27 });
function whatIsMyName(person) {
    console.log('name issss ' + person.name);
}
var per = {
    name: 'baby',
    age: 1,
    gender: 'male'
};
var pers = {
    name: 'baby',
    gender: 'male'
};
whatIsMyName(per);
whatIsMyName(pers);
var perso = {
    name: 'baby',
    age: 1,
    gender: 'male',
    greet: function (lastName) {
        console.log('heya i am ' + this.name + ' ' + lastName);
    }
};
perso.greet(' bacha ');
//interfaces with classes
var Aadmi = /** @class */ (function () {
    function Aadmi(name) {
        this.name = name;
    }
    Aadmi.prototype.greet = function (lastName) {
        console.log('heya i am ' + this.name + ' ' + lastName);
    };
    return Aadmi;
}());
var AamAadmi = new Aadmi('Arvind');
AamAadmi.greet('kejriwal');
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return value1 + value2;
};
console.log(myDoubleFunction(10, 30));
var malePerson = {
    name: 'rudhraaaa',
    //age: 28,
    gender: 'male'
};
var femalPerson = {
    name: 'sheila',
    age: 28,
    gender: 'female'
};
greet(malePerson);
greet(femalPerson);
//# sourceMappingURL=interfaceDemo.js.map