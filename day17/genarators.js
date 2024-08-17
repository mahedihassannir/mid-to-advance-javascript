// // const func = (start, end, step) => {

// //     let count = start;

// //     return { // making this object iterable done;
// //         [Symbol.iterator]: () => {
// //             return {
// //                 next() {
// //                     let obj
// //                     if (count <= end) {
// //                         obj = {
// //                             value: count,
// //                             done: false
// //                         }
// //                         count += step;
// //                         return obj;
// //                     }
// //                     return {
// //                         value: count,
// //                         done: true
// //                     }
// //                 }
// //             }
// //         }
// //     };
// // };

// // console.log([...func(1, 10000000, 2)]);






// // generator


// function* generator() {
//     yield 3;
//     yield 1
//     yield 4;
//     yield 2
//     yield 5;
// };

// let iterator = generator();

// for (let n of iterator){ 
//     console.log(n);
// }


// const userFunc = () => {
//     console.log("user");
// }
// const productFunc = () => {
//     console.log("productFunc");
// }

// function* gen() {

//     yield 1 
//     yield 2

// };


// const iterator = gen();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// const obj = {
//     value1: 1,
//     value2: 2,
//     value3: 3,
// };
// console.log(Object.entries(obj));// [ [ 'value1', 1 ], [ 'value2', 2 ], [ 'value3', 3 ] ]

// function* gen() {
//     const arr = Object.entries(obj)

//     for (let element of arr) {
//         yield element[1];
//     };
// };

// const iterator = gen()

// for(let i of iterator){
//     console.log(i);
// }



// custom iterebal loop

// function* gen(start, end, step) {
//     let count = start;
//     while (count < end) {
//         yield count
//         count += step
//     }
// }


// const iterator = gen(1,999990,2);

// console.log(iterator.next());