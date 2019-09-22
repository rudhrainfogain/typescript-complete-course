var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    //username  declared in constructor directly
    function Person(name, username) {
        this.username = username;
        this.eyeColor = 'green'; //Assigning value directly in class body.
        this.name = name; // Use of this keyword to assign value to name.  
    }
    //public method accessing protected property
    Person.prototype.logAgeToConsole = function () {
        console.log('age is ' + this.age);
    };
    //public method calling another private method
    Person.prototype.printAge = function () {
        console.log('age is ' + this.getAge());
    };
    //private method with return and accessing protected property
    Person.prototype.getAge = function () {
        return this.age;
    };
    //public method with argument and modifying protected property
    Person.prototype.setAge = function (age) {
        this.age = age;
        console.log('age set sucessfully');
    };
    //protected method without argument and accessing private property
    Person.prototype.printType = function () {
        console.log('age is ' + this.type);
    };
    //public method with return and accessing private property
    Person.prototype.getType = function () {
        return this.type;
    };
    //public method with argument and modifying private property
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log('type set sucessfully');
    };
    return Person;
}());
//instantiating a class with new keyword
var person = new Person("rudhra", "useRudhra");
console.log('person is' + person); // This prints person is[object Object]
console.log("person is " + JSON.stringify(person)); // This prints person is {"username":"useRudhra","eyeColor":"green","name":"rudhra"}
console.log('name is ' + person.name + ' username is ' + person.username);
//console.log('cannot access private and  type is ' + person.type + ' age is ' + person.age);
//calling methods
person.setAge(28);
person.printAge();
//console.log(person.getAge())
person.setType('cool dude');
//capturing method returns
var type = person.getType();
console.log('person type is ' + type);
console.log('person type is ' + person.getType());
//Inheritance
var Rudhra = /** @class */ (function (_super) {
    __extends(Rudhra, _super);
    function Rudhra() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //Overriding name property from parent class
        _this.name = 'Boss';
        return _this;
        //parent class constructor called implicitly
    }
    return Rudhra;
}(Person));
//we still need to pass two arguments as parent class constructor wants it.
//But although i passed Ram as name it is overridden by Boss in child clas Rudhra.
var rudhra = new Rudhra('Ram', 'useRudhra');
console.log("rudhra is " + JSON.stringify(rudhra));
console.log('name in rudhra is ' + rudhra.name + ' username is ' + rudhra.username);
//Inheritance and Constructors
var Superman = /** @class */ (function (_super) {
    __extends(Superman, _super);
    //Overriding name property from parent class using constructor
    function Superman(username) {
        var _this = this;
        console.log('Mai to superman Salman ka fan....');
        //calling parent class constructor using super keyword
        _this = _super.call(this, 'Superman', username) || this;
        //can access public parent properties
        console.log('name is ' + _this.name);
        //can access protected parent properties as  they are available through inheritance
        _this.age = 28;
        console.log('superman is ' + _this.age + ' yaers old');
        _this.setType('superman Type');
        //cant access private properties
        //console.log('parent private properties not accessible '+this.type);
        //we can access protected parent methods
        _this.printType();
        //we can access public parent methods
        console.log('superman type is ' + _this.getType());
        return _this;
    }
    return Superman;
}(Person));
var superman = new Superman('kryptonite');
console.log('superman is ' + JSON.stringify(superman));
//Getters and Setters
var Plants = /** @class */ (function () {
    function Plants() {
        this.biologicalSpecie = 'Plant Species';
    }
    Object.defineProperty(Plants.prototype, "species", {
        //creating getter
        get: function () {
            return this.biologicalSpecie;
        },
        //creating setter
        set: function (value) {
            if (value.length > 4) {
                this.biologicalSpecie = value;
            }
            else {
                this.biologicalSpecie = 'Plant Species';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plants;
}());
var plant = new Plants();
//calling getter
console.log('plant species by default is ' + plant.species);
// cant call like a method
//plant.species('rozessi');
//calling setter
plant.species = 'rose';
//calling getter after value change
console.log('plant species after calling setter  is still ' + plant.species + ' as input didnt pass setter validation logic');
//calling setter
plant.species = 'rozessi';
//calling getter after value change
console.log('plant species after calling setter  is ' + plant.species + ' as input passed setter validation logic');
//static properties and methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    //static method
    Helpers.calculateCircumference = function (diameter) {
        return this.PI * diameter;
    };
    //static property
    Helpers.PI = 3.14;
    return Helpers;
}());
//accessing static property
console.log('the value of PI is ' + Helpers.PI);
//accessing static method
console.log('the circumference of a circle with diameter 10 cm is ' + Helpers.calculateCircumference(10) + ' centimeters');
//abstract class
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
    }
    //non-abstract method in an abstract class
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
//class extending the abstract class
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //implement the abstract method
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
//Cannot create an instance of an abstract class
//let newProject =new Project();
//can instantiate an implementing class
var newProject = new ITProject();
console.log('new project is ' + JSON.stringify(newProject));
newProject.changeName('Swat Katz IT project');
newProject.budget = 200;
console.log('new project with updated details ' + JSON.stringify(newProject) + ' updated budget is ' + newProject.calcBudget());
//PRIVATE CONSTRUCTORS
var OnlyOne = /** @class */ (function () {
    // private constructor
    function OnlyOne(name) {
        this.name = name;
    }
    // static method returning singleton instance
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//cant instantiate like this because constructor is private
//let wrong=new OnlyOne('The only one');
//returns same instance always
var right = OnlyOne.getInstance();
console.log('singleton instance of OnlyOne is ' + JSON.stringify(right));
//Readonly properties
var Details = /** @class */ (function () {
    function Details() {
        this.name = 'Rudhra';
    }
    Details.age = 26;
    return Details;
}());
console.log('the readonly name in Details is ' + new Details().name + ' readonly age is ' + Details.age);
//Cannot assign to 'age' because it is a read-only property
//Details.age=22;
//# sourceMappingURL=ClassesExample.js.map