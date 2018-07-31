/*
Determining the this binding for an executing function requires finding the direct call-site of that function. Once examined, four rules can be applied to the call-site, in this order of precedence:

Called with new? Use the newly constructed object.

Called with call or apply (or bind)? Use the specified object.

Called with a context object owning the call? Use that context object.

Default: undefined in strict mode, global object otherwise.

Be careful of accidental/unintentional invoking of the default binding rule. 
In cases where you want to "safely" ignore a this binding, 
a "DMZ" object like ø = Object.create(null) is a good placeholder value that protects the global object from unintended side-effects.

Instead of the four standard binding rules, 
ES6 arrow-functions use lexical scoping for this binding, 
which means they adopt the this binding (whatever it is) from its enclosing function call. 
They are essentially a syntactic replacement of self = this in pre-ES6 coding.
*/

function foo(p1,p2) {
    console.log("I am ", this);
    console.log("my name is", this.name);
	console.log("myvar a is ", this.a);
    console.log("my first arg p1 is" , p1);
    console.log("my first arg p2 is" , p2);
}
function fooStrict(p1,p2) {
    "use strict";
    console.log("I am ", this);
    console.log("my name is", this.name);
	console.log("myvar a is ", this.a);
    console.log("my first arg p1 is" , p1);
    console.log("my first arg p2 is" , p2);
}
var obj = {
    name:'myobj',
    a: "myvar"
}
var foo1 = new foo(1,2); // Called with new? foo should be "this"
var foo2 = foo.call(obj,2,3); // Called with call or apply (or bind)? obj should be "this"
var foo3 = foo.apply(obj,[3,4]); // Called with call or apply (or bind)? obj should be "this"
var foo4 = foo.bind(obj);// Called with call or apply (or bind)? obj should be "this"
foo4(4,5);
var foo5 = foo(5,6);// Default: undefined in strict mode, global object otherwise. "window" should be "this"
{
"use strict";
var foo6 = foo(6,7);// Default: undefined in strict mode, global object otherwise. "window" should be "this". Because this level of strict rule doesnt affect foo()
}

var fooStrict1 = new fooStrict(1,2); // Called with new? "fooStrict" should be "this"
var fooStrict2 = fooStrict.call(obj,2,3); // Called with call or apply (or bind)? "obj" should be "this"
var fooStrict3 = fooStrict.apply(obj,[3,4]); // Called with call or apply (or bind)? "obj" should be "this"
var fooStrict4 = fooStrict.bind(obj);// Called with call or apply (or bind)? "obj" should be "this"
fooStrict4(4,5);
var fooStrict5 = fooStrict(5,6);// Default: undefined in strict mode, global object otherwise. "undefined" should be "this"