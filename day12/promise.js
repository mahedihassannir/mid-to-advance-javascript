/* what is promise 
promise is promise use which can be happen or not happen.
*/


/* promise is totally work like callback hell but it is not massy it works in a structure way promise is batter then call back hell thats it.

*/


const firstPromise = new Promise((resolve, reject) => {


    const err = false

    if (!err) {

        resolve("Hello World");

    } else {

        reject("error:Something went wrong");

    };

})


firstPromise
    .then((welcome) => {

        console.log(welcome)

    }).catch((error) => {

        console.log(error);

    })