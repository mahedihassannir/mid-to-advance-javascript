/*
Write a function fetchData that uses fetch to get data from an API (https://jsonplaceholder.typicode.com/posts/1). Use promises to handle the asynchronous operation.


*/
// this is problem 6 

// task
/*
Error Handling
Modify the fetchData function from Problem 6 to handle errors using .catch() and log an error message if the request fails.
*/
// const fetchData = () => {

//     return fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((result) => {
//             return result.json();
//         })
//         .then((data) => {
//             return data
//         })
//         .catch((err) => {
//             console.log(err);
//         });

// }


const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const result = await response.json();
        return result;

    } catch (error) {
        console.log(error);
        throw error
    }
};













// .then promise handle

// fetchData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });



/*
Problem 9: Async Function
Convert the fetchData function from Problem 6 to use async/await syntax for cleaner asynchronous code.
*/


// here add async await

const handleFetchData = async () => {
    try {
        const response = await fetchData();
        console.log(response);
    } catch (error) {
        console.log(error);
    };
};
handleFetchData();
// here add async await