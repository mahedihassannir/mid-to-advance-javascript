/*
Create an example where you intentionally create a memory leak in JavaScript. Explain why this happens and how you can avoid it.
*/

// let num = 10


// function memory() {

//     console.log(num);

//     return num = null // avoid memory lack

// }

// memory()



// function createMemoryLeak() {
//     let hugeArray = new Array(1000000).fill('leak');

//     return function () {
//         console.log(hugeArray.length); // Closure holds reference to hugeArray
//     };
// }

// let leak = createMemoryLeak(); // hugeArray is not released
// leak()
// leak = null

