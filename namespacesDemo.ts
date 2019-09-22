/// <reference path ="circleMath.ts" />
/// <reference path ="rectangleMath.ts" />
import triangleMath = MyMath.triangleMath;
//Can create constant with same name as it is in Global namespace and not in MyMath namespace
const PI = 3.1472816;
//cant access PI value from MyMath namespace as it has not been exported and also is not registered to global namespace
//console.log('PI value in MyMath namespace ' + MyMath.PI);
console.log('PI value in Global namespace ' + PI);
//can be accessed outside the namespace as it has been exported.
console.log('circumference calculation using MyMath namespace ' + MyMath.calculateCircumference(10));
console.log('rectangle area calculation using MyMath namespace ' + MyMath.calculateRectangle(10, 20));
console.log('square perimeter calculation using nested SquareMath namespace ' + MyMath.squareMath.calculateSquarePerimeter(10));
console.log('triangle area calculation using alias for nested triangleMath namespace ' + triangleMath.calculateTriangleArea(10, 10, 10));
