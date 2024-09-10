/* What is Encanpsulation A similar work under a container like a bucket for example 
e.g: Camping Related all work under a camping named bucket.
*/


class camping {
    constructor(name, location, age) {
        this.name = name
        this.location = location
        this.age = age
    };
    getCamper() {
        return `Camper name ${this.name}`
    };
    getCamperCampingLocation() {
        return `Camper Camping Location ${this.location}`
    };
    getCamperAge() {
        return `Camper age ${this.age}`
    };

};
const mahedi =new camping("Mahedi","Russia","17");

console.log(mahedi.getCamper());
console.log(mahedi.getCamperCampingLocation());
console.log(mahedi.getCamperAge());


