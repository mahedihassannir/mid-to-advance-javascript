
/**
 * promise all work like if all the func are fetched then give the result
 * if any one rejected then do not give the result reject this
 */


// const p1 = () => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve("i am first promise")
//         }, 1000);

//     })
// }
// const p2 = () => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             reject("Error promise 2 is rejected")
//         }, 2000);

//     })
// }


// Promise.all([p1(), p2()])
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })



/*

Promise allstalled is work like it give the result if it rejected or resolve no matter
 
*/



// const p1 = () => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve("i am first promise")
//         }, 1000);

//     })
// }
// const p2 = () => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             reject("Error promise 2 is rejected")
//         }, 2000);

//     })
// }


// Promise.allSettled([p1(), p2()])
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })


/**
 * 
 * promise race is work which is first fetch give me result only 
 * 
 */

const p1 = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("i am first promise")
        }, 1000);

    })
}
const p2 = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            reject("Error promise 2 is rejected")
        }, 2000);

    })
}


Promise.race([p1(), p2()])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

