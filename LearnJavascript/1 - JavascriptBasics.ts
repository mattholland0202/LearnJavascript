'use strict';

var lineItem = {
    product: "Widget 1",
    quantity: 4,
    price: 9.50
}

for (var bit in lineItem) {
    console.log(bit + " : " + lineItem[bit]);
}

// FOR...IN LOOPS
//var itemCount = 5;
//outerLoop:
//for (var i = 0; i < itemCount; i++) {
//    console.log(i);
//    for (var j: number = 0; j < 5; j++) {
//        if (j == i) {
//            continue outerLoop;
//        } else {
//            console.log("j : " + j);
//        }
//    }
//}

// DO WHILE LOOP
//var lineItemCount : number = 3;
//var currentItem : number;
//do {
//    console.log("Item: " + currentItem);
//    currentItem++;
//}
//while (currentItem < lineItemCount);

// SWITCHES
//var orderTotal: number = 99.99;
//var method: string;
//switch (true) {
//    case orderTotal >= 50 && orderTotal < 75:
//        method = "A";
//        break;
//    case orderTotal >= 75 && orderTotal < 100:
//        method = "B";
//        break;
//    default:
//        method = "D";
//        break;
//}
//console.log(method);

//FUNCTION EXPRESSIONS
//var func_exp = function (input: number) {
//    console.log("NoName: " + input);
//};

//func_exp(27);

//JSON
//var od =
//    {
//        fname: "Matt",
//        age: 24
//    };

//var od = [9, 10, 11];

//var od = null;

//console.log(typeof od);

//TYPESCRIPT CLASS
//class MyClass
//{
//    message: string;

//    constructor(orderID: number)
//    {
//        this.cancelled(orderID);
//    }

//    cancelled(orderID)
//        {
//            console.log(orderID);
//        }
//}

//new MyClass(25);