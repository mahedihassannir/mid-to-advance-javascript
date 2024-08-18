const tackOrder = (customer) => {


    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(`tack order for ${customer}`);


        }, 3000);


    })
};
const processOrder = (customer) => {


    return new Promise((resolve) => {
        setTimeout(() => {

            resolve(`process order for ${customer}`);


        }, 2000);


    })

};
const completeOrder = (customer) => {

    return new Promise((resolve) => {
        setTimeout(() => {

            resolve(`complete order for ${customer}`);


        }, 1000);



    })
};

async function* gen(customer) {
    yield await tackOrder(customer);
    yield await processOrder(customer);
    yield await completeOrder(customer);
};

const iterator = gen("Sohag");

// iterator.next().then((value)=>console.log(value.value))
// iterator.next().then((value)=>console.log(value.value))
// iterator.next().then((value)=>console.log(value.value))
// iterator.next().then((value)=>console.log(value.value))

const promises = [iterator.next(), iterator.next(), iterator.next()];

(async function async () {
    for await (let element of promises){
        console.log(element);
    }
})()