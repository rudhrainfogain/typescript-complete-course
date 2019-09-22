import { PI, calculateCircumference } from "./Math/circle";
import * as Circle from "./Math/circle";
import Rectangle from "./Math/rectangle";

console.log('circumference calculation using Math module ' + calculateCircumference(10));
console.log('rectangle area calculation using Math module ' + Rectangle(10, 20));

console.log('value of PI from Math module is ' + Circle.PI);