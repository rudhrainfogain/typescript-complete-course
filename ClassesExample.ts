class Person {
    //By Default public
    name: string;
    private type: String;
    protected age: number;

    //enable use strict in tsconfig to show demo of below property
    private eyeColor :String = 'green';


    constructor(name: string, public username: string) {
        this.name = name;
    }

    public printAge() {
        console.log('age is '+ this.getAge());
    }

    private getAge() : number  {
        return this.age;
    }

    public setAge(age :number) {
        this.age=age;
        console.log('age set sucessfully');
    }

    protected printType() {
        console.log('age is '+ this.getAge);
    }

    public getType() : String  {
        return this.type;
    }

    public setType(type :String) {
        this.type=type;
        console.log('type set sucessfully');
    }
}
const person = new Person('rudhra', 'useRudhra');
console.log("person is " + person);
console.log('name is ' + person.name + ' username is ' + person.username);
//console.log('cannot access private and  name is ' + person.type + ' age is ' + person.age);
person.setAge(28);
person.printAge();
//console.log(person.getAge())
person.setType('cool dude');
let type :String =person.getType();
console.log('person type is '+ type);