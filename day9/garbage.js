// this file is for understand the concept of garbage collection

// example:

let person = { // object
    name: "Mahedi",
    age: "17",
    hight: "5.6 feet"
};

// function

const executing = () => {
    console.log(person)
    let checkPersonObj = person;
    console.log(checkPersonObj);
};

executing();

// explain the function what is garbage collection 

/*

- garbage collection mainly remove the unusable variable , array, or object from the memory this process called garbage collection

- memory is very important for the application and load time

- in low level language need to maintain the garbage collection process manually but in high level language handle it automatically 

- for garbage management javascript use algorithm like [mark-and-sweep]

*/
person = null //  it is force the algorithm to remove the object from the memory 

