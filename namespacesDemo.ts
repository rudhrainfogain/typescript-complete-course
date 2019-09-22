//namespaces
namespace MyMath {
    //constant created in My math namespace not registered to global namespace.
    const PI = 3.14;
    //function registered to MyMath namespace but can be accessed outside as it is exported
    export function calculateCircumference(diameter: number) {
        console.log('PI value in MyMath namespace ' + PI);
        return diameter * PI;
    }
    export function calculateRectangle(width: number, length: number) {
        return width * length;
    }
}
//Can create constant with same name as it is in Global namespace and not in MyMath namespace
const PI = 3.1472816;
//cant access PI value from MyMath namespace as it has not been exported and also is not registered to global namespace
//console.log('PI value in MyMath namespace ' + MyMath.PI);
console.log('PI value in Global namespace ' + PI);
//can be accessed outside the namespace as it has been exported.
console.log('circumference calculation using MyMath namespace ' + MyMath.calculateCircumference(10));
console.log('rectangle area calculation using MyMath namespace ' + MyMath.calculateRectangle(10, 20));