/*
Task: Create an array of 10 numbers and write a function that returns the sum of all the numbers using the forEach method.
*/
// const someOfArray = (arr) => {
//     let sum = 0
//     arr.forEach(element => {
//         sum += element;
//     });
//     console.log(sum);
//     return sum
// };
// someOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);



// Task: Write a function that removes duplicate elements from an array without using any additional arrays or libraries.

// const filterArray = (arr) => {

//     return arr.filter((element, index) => {
//         console.log(element);
//         console.log(index);
//         let remove = arr.indexOf(element) === index
//         console.log(remove);
//     })



// };
// filterArray([1, , 1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 7, 8, 9, 10]);



const countDown = () => {

    let seconds = 2;

    const timer = setInterval(() => {
        seconds--;

        if (seconds < 0) {
            clearTimeout(timer)
            console.log("done times up");
        }

    }, 1000);

}
countDown()

