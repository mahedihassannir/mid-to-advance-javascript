// Higher order promise sequential async operation.

const first = () => {

    return new Promise((resolve, reject) => {

        resolve("first is complete")

    })

}
const second = () => {

    return new Promise((resolve, reject) => {
        resolve("second is complete")


    })

}
const third = () => {

    return new Promise((resolve, reject) => {

        resolve("third is complete")

    })


}

first()
    .then((res)=>{
        console.log(res);
    })
second()
    .then(res => console.log(res))
third()
    .then(res => console.log(res))
    
    .catch(err => console.log(err));