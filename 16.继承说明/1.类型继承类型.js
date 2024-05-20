export default {
    //only separate the code as namespace
};

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} speaks.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog("Buddy", "Labrador");
myDog.speak(); // Output: Buddy barks.
