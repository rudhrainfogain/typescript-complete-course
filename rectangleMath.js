var MyMath;
(function (MyMath) {
    //function registered to MyMath namespace but can be accessed outside as it is exported
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
//# sourceMappingURL=rectangleMath.js.map