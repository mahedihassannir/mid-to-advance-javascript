
// this is a template of car or blueprint,
class car {
    // the real object with function
    constructor(name, model) {
        this.name = name,
            this.model = model
    };
};

const rover = new car("rover1", "series7");
const rover2 = new car("rover2", "series6");
const rover3 = new car("rover3", "series4");

console.log(rover);
console.log(rover2);
console.log(rover3);