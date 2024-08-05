const first = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("i am one");
        }, 1000);
    })

}



const handleFirst = async () => {
    try {

        const res =await first();
        console.log(res);
    } catch (err) {
        console.log(err);

    }
};

handleFirst()