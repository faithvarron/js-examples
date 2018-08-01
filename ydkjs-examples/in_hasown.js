var myObject = {
	a: 2
};

console.log(("a" in myObject));				// true
console.log(("b" in myObject));				// false
console.log(("hasOwnProperty" in myObject));				// true , because of traversal behavior of "in"

console.log(myObject.hasOwnProperty( "a" ));	// true
console.log(myObject.hasOwnProperty( "b" ));	// false
console.log(myObject.hasOwnProperty( "hasOwnProperty" )); // false, because "Object.hasOwnProperty" does not traverse