const fetchData = async (url, count, wait) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.log(`error occur`);
            throw new Error("Http error");
        };
        return res.json();
    } catch (error) {
        if (count > 0) {
            console.error("trying", count);
            new Promise(resolve => setTimeout(resolve, wait));
            return fetchData(url, count - 1, wait);
        }
        else {
            throw new Error("Max retry over ");
        };
    };
};

const url = "https://jsonplaceholder.typicode.com/pots";
fetchData(url, 5, 5000)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });