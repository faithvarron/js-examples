function Foo() { /* .. */ }
function Boo() { /* .. */ }

Foo.prototype = { /* .. */ }; // create a new prototype object

var a1 = new Foo();
// Need to properly "fix" the missing `.constructor`
// property on the new object serving as `Foo.prototype`.
// See Chapter 3 for `defineProperty(..)`.
Object.defineProperty( Foo.prototype, "constructor" , {
	enumerable: false,
	writable: true,
	configurable: true,
	value: Boo    // point `.constructor` at `Boo`
} );
console.log(a1.constructor === Foo); // false!
console.log(a1.constructor === Object); // false!
console.log(a1.constructor);