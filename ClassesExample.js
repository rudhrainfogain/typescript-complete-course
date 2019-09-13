var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        //enable use strict in tsconfig to show demo of below property
        this.eyeColor = 'green';
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log('age is ' + this.getAge());
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
        console.log('age set sucessfully');
    };
    Person.prototype.printType = function () {
        console.log('age is ' + this.getAge);
    };
    Person.prototype.getType = function () {
        return this.type;
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log('type set sucessfully');
    };
    return Person;
}());
var person = new Person('rudhra', 'useRudhra');
console.log("person is " + person);
console.log('name is ' + person.name + ' username is ' + person.username);
//console.log('cannot access private and  name is ' + person.type + ' age is ' + person.age);
person.setAge(28);
person.printAge();
//console.log(person.getAge())
person.setType('cool dude');
var type = person.getType();
console.log('person type is ' + type);
//# sourceMappingURL=ClassesExample.js.map