// Higher order promise chain sequential async operation.


const first = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("i am one");
    }, 2000);
})


const two = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("i am two");
    }, 1000);
})

Promise.race([first, two])
    .then((res) => console.log(res));