//import only what is needed
import { PI, calculateCircumference } from "./Math/circle";
//import everything using an alias
import * as Circle from "./Math/circle";
//importing default exported function
import Rectangle from "./Math/rectangle";

console.log('circumference calculation using Math module ' + calculateCircumference(10));
console.log('rectangle area calculation using Math module ' + Rectangle(10, 20));

console.log('value of PI from Math module is ' + Circle.PI);