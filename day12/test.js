/* what is the use case of promise in real world project ?

Ans: Mainly the main reason wo use promise chaining is handling the async work.

Ans: Promise is batter then call back hell call back hell are very messy it is not readable and and the best part of promise its readable and clear code 

*/



console.log("hello world")


const store = new Promise((resolve, reject) => {

    const error = false;

    if (!error) {
        resolve({ name: "mahedi", age: "17" });
    } else {
        reject("you are rejected");
    };

});


console.log("dev");

store
    .then((data) => {
        console.log(data);

        return data.name
    })
    .then((username) => {
        console.log(username)
    })
    .catch((err) => {

        console.log(err);

    })
    .finally(() => {
        console.log("done");
    })




