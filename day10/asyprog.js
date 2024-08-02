// // example of async programming concept

// const func = () => {
//     console.log("processing order for customer one");
//     const timeNow = new Date().getTime();

//     while (timeNow + 3000>= new Date().getTime())

//         console.log("3 second done ");


// }


// console.log("order get successfully");
// func();
// console.log(
//     "order delivered successfully"
// );


const func = () => {
    console.log("processing order for customer one");
    const timeNow = new Date().getTime();

    setTimeout(() => { }, 3000)

    console.log("3 second done ");


}


console.log("order get successfully");
func();
console.log(
    "order delivered successfully"
);
