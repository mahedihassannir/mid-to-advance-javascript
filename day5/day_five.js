// the topic is:

//      global scope
//      function scope
//      block scope



// global scope every thing outside a function is global scope 
var num = 10
const num1 = 10
let num2 = 10
// we can access a variable from local scope 


// example of local scope
const func = () => {
    console.log(num, num1, num2);

    // this is local scope or function scope variable we can access from the function only we can not access the variable outer of the function it says local function or function scope
    const num11 = 20
    console.log(num11);
};
// console.log(num11);
// it gives error num11 is not define 
func()


//example of  block scope
/*
block scope is a block of code use if else or switch case
*/
if (true) {
    // block scope 
    const num11 = 30;
    console.log(num11);
};
// we can not access the num11 outer the condition


// scopes ends



















