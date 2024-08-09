/*
Write a function fetchUserData that fetches user data from an API (https://jsonplaceholder.typicode.com/users). Then, using the user's ID, fetch their posts from another endpoint (https://jsonplaceholder.typicode.com/posts?userId={userId}). Chain the promises to handle sequential fetching.

*/

// this promise process is called chining when the first func return then we get the value on the chining process then from there call the second function and pass the data as a argument;


// func
const fetchUserData = () => {
    // return the promise and fetch itself a promise
    const url = "https://jsonplaceholder.typicode.com/users";
    return fetch(url)
        .then((response) => {
            if (!response) {
                throw new Error("fail to fetch user data");
            };
            return response.json();
        })
        .catch((err) => {
            console.log(err);
            throw Error(err);
        });
};
// func
const fetchUserPost = (userId) => {
    // return the promise and fetch itself a promise
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId})`;
    return fetch(url)
        .then((response) => {
            if (!response) {
                throw new Error("fail to fetch user post data");
            };
            return response.json();
        })
        .catch((err) => {
            console.log(err);
            throw Error(err);
        });

};

// . then chining
fetchUserData()
    .then((data) => {
        console.log("user data", data);
        return fetchUserPost(data[1].id);
    })
    .then((data) => {
        console.log("userPostData", data)
    })
    .catch((err) => {
        console.log(err);
    });


// async await chining

//code here 

// async await chining