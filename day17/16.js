
// task 1
// Create a simple iterator that iterates over an array of numbers and returns each number incremented by 1.
const arr = [1, 2, 3, 4, 5];
for (let element of arr) {
    // console.log(element + 1);
};


// task 2
// Implement a generator function that yields a sequence of numbers from 1 to 5.

function* oneToFive() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};
const iterator = oneToFive();
// console.log(iterator.next());


// task 3
// Create an iterable object with a custom iterator method that iterates over a range of numbers.

const obj = {};


// steps
// 1 make the object iterable
// 2 make a object that return next function 
// 3 the next function return value and done value 

// 4 thats it here we go we make a iterable object and we can loop it

obj[Symbol.iterator] = function () {
    let counter = 0;
    let done = false;
    return {
        next() {
            let result;
            // condition 
            if (counter == 100) { done = true };
            result = {
                value: counter,
                done: done
            };
            counter += 10
            // console.log(result);
            return result
        }
    };
}

for (let i of obj) {

};

// task four
// Use the for...of loop to iterate over the values produced by a generator function.

//steps
//1 create a generator function
//2 crate the generator function iterable
//3 loop with for any method  

function* gen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};
const iteratorOfGen = gen();


for (let i of iteratorOfGen) {
    // console.log(i);
}


// task five

// Create an async generator function that simulates fetching data asynchronously and yields the results.


const one = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("tackOrder Data");
        }, 2000);
    })

};

const two = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Ordered Data");
        }, 1000);
    })

};


async function* gen2() {
    yield await one();
    yield await two();
};

// Handle the async generator
async function handleGenerator() {
    const iterator3 = gen2();
    
    for await (const result of iterator3) {
        // Since we're logging within the generator, no need to log here
        console.log(result);
    }
};

// Run the async generator
handleGenerator();