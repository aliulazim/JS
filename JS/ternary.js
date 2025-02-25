/* 
TERNARY  -----> THREE PARTS 
    ?    : 

    condition ? do something when true : do something when flase


*/

const age = 13;

// Normal condition 

/* if (age >= 18) {
    console.log("You can Vote");
    
} else {
    console.log("You litile");
    
}
 */

// Simple ternary

// age >= 18 ? console.log("You can Vote") : console.log("You are letile");

let price = 1100;
const isLeader = true;

/* if (isLeader === true) {
    price = 0;
    
} else {
    price = price + 200;
    
}
console.log(price); */


// price = isLeader === true ? 0 : price + 50;
// console.log(price);


if (isLeader === true) {
    if (price > 1000) {
        price = price /2 ;
        
    } else {
        price = 0;
    }
    
} else {
    price = price;
}
console.log(price);

// ternary

price =  isLeader === true ? price > 1000 ? price / 2 : 0 : price + 50;
console.log('You pray' + ' ' + price);




let basePrice = 200; // Base price for the ride
const isNight = false; // Checking if it is night time

// Using ternary operator to apply the price change based on time
basePrice = isNight ? basePrice - 50 : basePrice + 50; // Night time = Discount, Day time = Extra charge

console.log(basePrice); // Output: 150, because isNight is true


let totalAmount = 1200; // Customer's total order amount
const discount = totalAmount > 1000 ? 0.1 : 0; // 10% discount if total > 1000

let finalAmount = totalAmount - (totalAmount * discount);

console.log(finalAmount); // Output: 1080, because totalAmount > 1000







