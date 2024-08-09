// simple callback function

/*
Problem 1: Basic Callback
Write a function sayHello that accepts a callback function as an argument and invokes the callback function with the string "Hello, World!".
*/

/*
const cseOne = (message, callback) => {

    callback(message);

};
cseOne("Hello World", (data) => {
    console.log(data);
})
*/



// higher order func
/*
Problem 2: Higher Order Function
Write a higher-order function runFunctionNTimes that takes a function func and a number n, and runs the function func n times.
*/

// const runFunctionNTimes = (func, n) => {

//     for (let i = 0; i < n; i++) {
//         func();
//     }

// }

// function sayHello() {
//     console.log("hello");
// }

// runFunctionNTimes(sayHello, 5); 


/*
Callback with Array Method
Implement a function filterArray that takes an array arr

and a callback function callback.

It should return a new array containing only the elements for which the callback returns true.
*/

// const filterArray = (arr, callback) => {

//     let storeFilteredArray = [];
//     for (let i = 0; i < arr.length; i++) {

//         if (callback(arr[i])) {
//             storeFilteredArray.push(arr[i]);
//         };
//     };
//     return filterArray;
// };

// let arr = [1, 2, 3, 4, 5, 6]

// filterArray(arr, ((callback) => {

//     console.log(callback);

// }));


/*

Callback with Array Method
Implement a function filterArray that takes an array arr and a callback function callback. It should return a new array containing only the elements for which the callback returns its odd.


*/



// const findEvenNumbers = (arr, callback) => {

//     for (let i = 0; i < arr.length; i++) {


//         const filterEvenNumbers = arr[i] % 2 == 0

//         console.log(arr[i], filterEvenNumbers);
//     }


// }
// findEvenNumbers([1, 2, 3, 4, 5, 6])