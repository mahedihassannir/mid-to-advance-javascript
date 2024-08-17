const obj = {};
obj[Symbol.iterator] = function () {

    let n = 0;
    let done = false;

    return {

        next() {
            n +=10
            if(n==100){done=true}
            return {
                value: n,
                done: done
            }

        }
    }


}


for (let m of obj) {
    console.log(m);
}


// const obj = {};

// obj[Symbol.iterator] = function () {

//     let n = 0;
//     let done = false;
//     return {

//         next() {
//             n += 10
//             if (n == 100) {
//                 done= true
//             }
//             return {
//                 name: n,
//                 done: done
//             }
//         }

//     }
// };



// for(let nas of obj){
//     console.log(nas);
// }