namespace MyMath {
    //constant created in My math namespace not registered to global namespace.
    const PI = 3.14;
    //function registered to MyMath namespace but can be accessed outside as it is exported
    export function calculateCircumference(diameter: number) {
        console.log('PI value in MyMath namespace ' + PI);
        return diameter * PI;
    }
    //nested namespace
    export namespace squareMath {
        export function calculateSquarePerimeter(side: number) {

            return side * 4;
        }
    }
    //nested namespace
    export namespace triangleMath {
        //triangle area calculation using Heron's formula
        export function calculateTriangleArea(side1: number, side2: number, side3: number) {
            let semiperimeter: number = (side1 + side2 + side3) / 2;
            let area = Math.sqrt(semiperimeter * ((semiperimeter - side1) * (semiperimeter - side2) * (semiperimeter - side3)));
            return area;
        }
    }

}