var MyMath;
(function (MyMath) {
    //constant created in My math namespace not registered to global namespace.
    var PI = 3.14;
    //function registered to MyMath namespace but can be accessed outside as it is exported
    function calculateCircumference(diameter) {
        console.log('PI value in MyMath namespace ' + PI);
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
    //nested namespace
    var squareMath;
    (function (squareMath) {
        function calculateSquarePerimeter(side) {
            return side * 4;
        }
        squareMath.calculateSquarePerimeter = calculateSquarePerimeter;
    })(squareMath = MyMath.squareMath || (MyMath.squareMath = {}));
    //nested namespace
    var triangleMath;
    (function (triangleMath) {
        //triangle area calculation using Heron's formula
        function calculateTriangleArea(side1, side2, side3) {
            var semiperimeter = (side1 + side2 + side3) / 2;
            var area = Math.sqrt(semiperimeter * ((semiperimeter - side1) * (semiperimeter - side2) * (semiperimeter - side3)));
            return area;
        }
        triangleMath.calculateTriangleArea = calculateTriangleArea;
    })(triangleMath = MyMath.triangleMath || (MyMath.triangleMath = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    //function registered to MyMath namespace but can be accessed outside as it is exported
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
/// <reference path ="circleMath.ts" />
/// <reference path ="rectangleMath.ts" />
var triangleMath = MyMath.triangleMath;
//Can create constant with same name as it is in Global namespace and not in MyMath namespace
var PI = 3.1472816;
//cant access PI value from MyMath namespace as it has not been exported and also is not registered to global namespace
//console.log('PI value in MyMath namespace ' + MyMath.PI);
console.log('PI value in Global namespace ' + PI);
//can be accessed outside the namespace as it has been exported.
console.log('circumference calculation using MyMath namespace ' + MyMath.calculateCircumference(10));
console.log('rectangle area calculation using MyMath namespace ' + MyMath.calculateRectangle(10, 20));
console.log('square perimeter calculation using nested SquareMath namespace ' + MyMath.squareMath.calculateSquarePerimeter(10));
console.log('triangle area calculation using alias for nested triangleMath namespace ' + triangleMath.calculateTriangleArea(10, 10, 10));
//# sourceMappingURL=namespacesDemo.js.map