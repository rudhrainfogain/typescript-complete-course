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
})(MyMath || (MyMath = {}));
//# sourceMappingURL=circleMath.js.map