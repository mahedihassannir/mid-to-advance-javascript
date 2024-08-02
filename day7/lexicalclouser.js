// what is lexical scope and what is closure



const outerFunction = () => { //local function;

    let outerVariable = "I am an outer variable"// variable inside a function so it is a local variable it can not access for outer side 

    const innerFunction = () => {// this is an another function
        let check = "m"
        console.log(outerVariable);// this log access the local scope function variable from the function 
    };

    // console.log(check);// inner function also a local function but we can not access the check variable why

    return innerFunction

};

const myClosure = outerFunction();
myClosure();
// outerFunction();
// outerFunction();






/* 

function outerFunction() {
    let outerVariable = 'I am an outer variable';

    function innerFunction() {
        console.log(outerVariable); // Accesses outerVariable from the outerFunction's scope
    }

    return innerFunction; // Returns the inner function
}

const myClosure = outerFunction(); // outerFunction runs and returns innerFunction
myClosure(); // Output: I am an outer variable


*/