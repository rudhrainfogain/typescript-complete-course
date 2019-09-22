class Person {

    name: string;//No access specifier specified.By Default public.
    public hairColour: String; // adding public access specifier. Available everywhere.
    private type: String; // adding private access specifier. Available only inside the class.
    protected age: number;// adding protected access specifier. Available inside the class as well as to child class in inheritance.

    private eyeColor: String = 'green'; //Assigning value directly in class body.

    //username  declared in constructor directly
    constructor(name: string, public username: string) {
        this.name = name; // Use of this keyword to assign value to name.  
    }
    //public method accessing protected property
    public logAgeToConsole() {
        console.log('age is ' + this.age);
    }
    //public method calling another private method
    public printAge() {
        console.log('age is ' + this.getAge());
    }
    //private method with return and accessing protected property
    private getAge(): number {
        return this.age;
    }
    //public method with argument and modifying protected property
    public setAge(age: number) {
        this.age = age;
        console.log('age set sucessfully');
    }
    //protected method without argument and accessing private property
    protected printType() {
        console.log('age is ' + this.type);
    }
    //public method with return and accessing private property
    public getType(): String {
        return this.type;
    }
    //public method with argument and modifying private property
    public setType(type: String) {
        this.type = type;
        console.log('type set sucessfully');
    }
}
//instantiating a class with new keyword
const person = new Person("rudhra", "useRudhra");

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
let type: String = person.getType();
console.log('person type is ' + type);
console.log('person type is ' + person.getType());


//Inheritance
class Rudhra extends Person {
    //Overriding name property from parent class
    name = 'Boss';
    //parent class constructor called implicitly
}

//we still need to pass two arguments as parent class constructor wants it.
//But although i passed Ram as name it is overridden by Boss in child clas Rudhra.
const rudhra = new Rudhra('Ram', 'useRudhra');

console.log("rudhra is " + JSON.stringify(rudhra));
console.log('name in rudhra is ' + rudhra.name + ' username is ' + rudhra.username);

//Inheritance and Constructors
class Superman extends Person {
    //Overriding name property from parent class using constructor
    constructor(username: string) {

        console.log('Mai to superman Salman ka fan....');
        //calling parent class constructor using super keyword
        super('Superman', username);
        //can access public parent properties
        console.log('name is ' + this.name);
        //can access protected parent properties as  they are available through inheritance
        this.age = 28;
        console.log('superman is ' + this.age + ' yaers old');
        this.setType('superman Type');
        //cant access private properties
        //console.log('parent private properties not accessible '+this.type);
        //we can access protected parent methods

        this.printType();
        //we can access public parent methods
        console.log('superman type is ' + this.getType());

    }
}

let superman: Superman = new Superman('kryptonite');
console.log('superman is ' + JSON.stringify(superman));

//Getters and Setters
class Plants {
    private biologicalSpecie: string = 'Plant Species';
    //creating getter
    get species() {
        return this.biologicalSpecie;
    }
    //creating setter
    set species(value: string) {
        if (value.length > 4) {
            this.biologicalSpecie = value;
        } else {
            this.biologicalSpecie = 'Plant Species';
        }
    }

}

let plant: Plants = new Plants();
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
class Helpers {
    //static property
    static PI: number = 3.14;
    //static method
    static calculateCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
//accessing static property
console.log('the value of PI is ' + Helpers.PI);
//accessing static method
console.log('the circumference of a circle with diameter 10 cm is ' + Helpers.calculateCircumference(10) + ' centimeters');

//abstract class
abstract class Project {

    projectName: string = 'Default';
    budget: number;
    //abstract method
    abstract changeName(name: string): void;
    //non-abstract method in an abstract class
    calcBudget() {
        return this.budget * 2;
    }
}

//class extending the abstract class
class ITProject extends Project {

    //implement the abstract method
    changeName(name: string): void {
        this.projectName = name;
    }

}
//Cannot create an instance of an abstract class
//let newProject =new Project();
//can instantiate an implementing class
let newProject = new ITProject();

console.log('new project is ' + JSON.stringify(newProject));
newProject.changeName('Swat Katz IT project');
newProject.budget = 200;

console.log('new project with updated details ' + JSON.stringify(newProject) + ' updated budget is ' + newProject.calcBudget());

//PRIVATE CONSTRUCTORS
class OnlyOne {
    // private static property
    private static instance: OnlyOne;
    // private constructor
    private constructor(public name: string) { }
    // static method returning singleton instance
    public static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one');
        }
        return OnlyOne.instance;
    }
}
//cant instantiate like this because constructor is private
//let wrong=new OnlyOne('The only one');

//returns same instance always
let right = OnlyOne.getInstance();
console.log('singleton instance of OnlyOne is ' + JSON.stringify(right));

//Readonly properties
class Details {
    public readonly name: string = 'Rudhra';
    public static readonly age: number = 26;
}

console.log('the readonly name in Details is ' + new Details().name + ' readonly age is ' + Details.age);
//Cannot assign to 'age' because it is a read-only property
//Details.age=22;