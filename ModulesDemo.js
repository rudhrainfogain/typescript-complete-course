"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import only what is needed
var circle_1 = require("./Math/circle");
//import everything using an alias
var Circle = __importStar(require("./Math/circle"));
//importing default exported function
var rectangle_1 = __importDefault(require("./Math/rectangle"));
console.log('circumference calculation using Math module ' + circle_1.calculateCircumference(10));
console.log('rectangle area calculation using Math module ' + rectangle_1.default(10, 20));
console.log('value of PI from Math module is ' + Circle.PI);
//# sourceMappingURL=ModulesDemo.js.map