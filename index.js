// Creating the pet object
const pet = {
    name: "Pete",
    species: "Platypus",
    happiness: 50,

//Adding methods play feed and status

    //Play method
    play: function () {
        this.happiness +=10;
        return `You played with ${this.name}! Your happiness is now ${this.happiness}!`;
    },

    //Feed method
    feed: function () {
        this.happiness +=20;
        return `You fed ${this.name}! Your happiness is now ${this.happiness}!`;
    },

    //Status method
    status: function () {
        console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}`);
    }
};

//Implement and test

//Beginning status
pet.status();

//Message returned after playing with your pet
console.log(pet.play());
pet.status();

//Message returned after feeding your pet
console.log(pet.feed());
pet.status();
