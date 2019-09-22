// Exercise 1
class Car {
    private name: string;
    private acceleration: number = 0;
    public constructor(name: string) {
        this.name = name;
    }
    public get carName() {
        return this.name;
    }

    public set carName(name: string) {
        this.name = name;
    }

    public get carAcceleration() {
        return this.acceleration;
    }

    public set carAcceleration(acceleration: number) {
        this.acceleration = acceleration;
    }
    public honk(): void {
        console.log("Toooooooooot!");
    }
    public accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }

}

let carr = new Car("BMW");
carr.honk();
console.log(carr.carAcceleration);
carr.accelerate(10);
console.log(carr.carAcceleration);

// Exercise 2
abstract class BaseObject {
    width: number = 0;
    length: number = 0;

    abstract calcSize(): number;
}

class Rectangle extends BaseObject {

    calcSize(): number {
        return this.width * this.length;
    }

}
let rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(JSON.stringify(rectangle));
console.log(rectangle.calcSize());

// Exercise 3
class Personal {
    private _firstName: string = "";
    public enumerable: boolean = true;
    public configurable: boolean = true;
    public get firstName() {
        return this._firstName;
    }

    public set firstName(firstName: string) {
        if (firstName.length > 3) {
            this._firstName = firstName;
        } else {
            this._firstName = "";
        }
    }
}
let personal = new Personal();
console.log(personal.firstName);
personal.firstName = "ru";
console.log(personal.firstName);
personal.firstName = "Rudhra";
console.log(personal.firstName);