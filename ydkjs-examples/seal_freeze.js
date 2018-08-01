"use strict";
var topObject = {d:0};
var myObject = {a:0,b:9,c:topObject};
console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
console.log(Object.getOwnPropertyDescriptor(myObject, "b"));
console.log(Object.getOwnPropertyDescriptor(myObject, "c"));

Object.preventExtensions(myObject);

//myObject.e = "new"; // not possible as we blocked myObject to be extended
//console.log(myObject);

Object.seal(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
console.log(Object.getOwnPropertyDescriptor(myObject, "b"));
console.log(Object.getOwnPropertyDescriptor(myObject, "c"));
console.log(Object.getOwnPropertyDescriptor(topObject, "d"));

Object.freeze(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
console.log(Object.getOwnPropertyDescriptor(myObject, "b"));
console.log(Object.getOwnPropertyDescriptor(myObject, "c"));
console.log(Object.getOwnPropertyDescriptor(topObject, "d"));
myObject.c.d = 8;// possible, even console shows it is not writable, that is just a reference and topObject.d still writable
//myObject.c = {e:-1};// assigning not possible as we froze myObject
//topObject.d = 6;
console.log(myObject.c.d);
console.log(topObject.d);