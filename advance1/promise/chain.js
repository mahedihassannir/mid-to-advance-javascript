// /*
// Write a function fetchUserData that fetches user data from an API (https://jsonplaceholder.typicode.com/users). Then, using the user's ID, fetch their posts from another endpoint (https://jsonplaceholder.typicode.com/posts?userId={userId}). Chain the promises to handle sequential fetching.

// */

// // this promise process is called chining when the first func return then we get the value on the chining process then from there call the second function and pass the data as a argument;


// // func
// const fetchUserData = () => {
//     // return the promise and fetch itself a promise
//     const url = "https://jsonplaceholder.typicode.com/users";
//     return fetch(url)
//         .then((response) => {
//             if (!response) {
//                 throw new Error("fail to fetch user data");
//             };
//             return response.json();
//         })
//         .catch((err) => {
//             console.log(err);
//             throw Error(err);
//         });
// };
// // func
// const fetchUserPost = (userId) => {
//     // return the promise and fetch itself a promise
//     const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId})`;
//     return fetch(url)
//         .then((response) => {
//             if (!response) {
//                 throw new Error("fail to fetch user post data");
//             };
//             return response.json();
//         })
//         .catch((err) => {
//             console.log(err);
//             throw Error(err);
//         });

// };

// // . then chining
// fetchUserData()
//     .then((data) => {
//         console.log("user data", data);
//         return fetchUserPost(data[1].id);
//     })
//     .then((data) => {
//         console.log("userPostData", data)
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// // async await chining

// //code here

// // async await chining



// in async await


const fetchUserData = async () => {
    try {
        // return the promise and fetch itself a promise
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url)

        const result = await response.json()

        return result;

    } catch (error) {
        console.log(error);
    }
};


const fetchUserPost = async (userId) => {
    try {
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch user posts');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        throw error; // Re-throw the error to propagate it further if needed
    }
};

// chaining
const handleChain = async () => {
    try {
        const userData = await fetchUserData();
        console.log(userData);

        const postData = await fetchUserPost(userData[0].id);
        console.log(postData);

    } catch (error) {
        console.log(error);
    };
};
handleChain()
