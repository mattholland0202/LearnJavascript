'use strict';

// BLOCK SCOPE - Variables declared in catch statement are not hoisted
try {
    throw 123;
}
catch (ex) {
    console.log("Caught" + ex);
}

// 'window' IS THE GLOBAL OBJECT WHEN WORKING WITHIN A BROWSER
// THE SAME AS USING 'this.'
//var productId = 9000;
//console.log(productId);
//console.log(window.productId);

//console.log(undefined == null);
//console.log(undefined === null); // False because undefined's type is undefined, null's type is object

// EXPLICITLY SET TO NULL RATHER THAN LEAVING UNDEFINED
//var leaveUndefined;
//console.log(leaveUndefined);
//var setToNull = null;
//console.log(setToNull);

// BOOLEANS: MUST DECLARE IN LOWERCASE
//var isSpecial: boolean = true;
//if (isSpecial) {
//    console.log("It's Special!");
//}

// LIKE PYTHON: CAN SWAP SINGLE & DOUBLE QUOTES EITHER WAY AROUND
//console.log('The Order is "In progress"');

//var n = NaN;
//if (isNaN(n)) {
//    console.log("It's not a number!");
//}

//console.log(typeof NaN);

//var value = 3.2e4;
//console.log(value);

//console.log(productId);
//var productId = 98765;