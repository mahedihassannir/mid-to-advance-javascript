/*
Write a function fetchData that uses fetch to get data from an API (https://jsonplaceholder.typicode.com/posts/1). Use promises to handle the asynchronous operation.


*/
// this is problem 6 

// task
/*
Error Handling
Modify the fetchData function from Problem 6 to handle errors using .catch() and log an error message if the request fails.
*/
const fetchData = () => {

    return fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            return data
        })
        .catch((err) => {
            console.log(err);
        });

}

fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });


// here add async await

// code

// here add async await