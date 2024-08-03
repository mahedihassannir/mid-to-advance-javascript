const first = (cb) => {

    console.log("hey i get the order")
    cb()


};


const second = (cb) => {

    console.log("process the order");

    setTimeout(() => {

        console.log("processing done")
        cb();

    }, 3000)

};


const third = () => {

    console.log("order delivered completed");


};



first(() => {

    second(() => {
        third()
    })

})
