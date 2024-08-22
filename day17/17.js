const name = Symbol("name")
const obj = {
    [name]: "Mahedi Hassan"
};

// console.log(obj[name]);

// this is used for name collision;


const personName = Symbol("Name");
const personEmail = Symbol("Email");


const person = {

    [personName]: "Mahedi Hassan",
    [personEmail]: "mahedinir34678@gmail.com",

    getPersonalDetails() {
        return {
            [personName]: this[personName],
            [personEmail]: this[personEmail]

        }
    }

};


console.log(person[personName]);
console.log(person[personEmail]);
console.log(person.getPersonalDetails()[personName]);
console.log(person.getPersonalDetails()[personEmail]);