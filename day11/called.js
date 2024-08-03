// const myDisplayer = (some) => {
// console.log("result form displayer func",some);
//     document.getElementById("display").innerHTML = some;

// };


// const fisrtFunc = () => {


//     myDisplayer(
//         "hello"
//     )

// }

// const secondFunc = () => {


//     myDisplayer("bye")

// }

// fisrtFunc();
// secondFunc();


/*

the result it bye the reason is javascript work in sync way means it works by line by line  first time the result it hello then it changed to bye

 */





// first example 

/*

with this way need to call two functions at a time so it also cause for high memory
*/

// const calculator = (num1, num2) => {
//     console.log("called the func");
//     let sum = num1 + num2

//     console.log("return the sum");
//     return sum

// }


// console.log(" give the numbers");

// let result = calculator(10, 10);
// console.log("result")

// console.log("give the result to the displayer func");
// myDisplayer(result)




// second example 
/*

on this func we first calculate the numbers then we pass the result to the display func if we use it in this way so we can not prevent the result to the display func 
*/
// const calculator = (num1, num2) => {
//     console.log("called the func");
//     let sum = num1 + num2

//     console.log("return the sum");
//     myDisplayer(sum)

// }


// console.log(" give the numbers");

// calculator(10, 10);
// console.log("result")
