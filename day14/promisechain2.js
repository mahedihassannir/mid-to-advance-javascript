// Higher order promise chain sequential async operation.


const first = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("i am one");
        }, 1000);
    })

}
const two = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("i am two");
        }, 1000);
    })

}
first()
    .then((res) => {
        console.log(res);
        return two();
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
