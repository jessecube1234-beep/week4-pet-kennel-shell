// Factory function creating the pet objects
function createPet(name, species, energy, happiness) {
    return {
        name: name,
        species: species,
        happiness: happiness,
        energy: energy,

        //Status method: Shows pet stats
        status: function () {
            console.log(
                `Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`
            );
        },

        //Feed method: increases pets happiness
        feed: function () {
            //increasing happiness
            this.happiness += 15;
            if ( this.happiness > 100) this.happiness = 100;

            console.log(`Feeding ${this.name}! Happiness is now ${this.happiness}`);
        }
    };
}

//Creating kennels
const dogKennel = [];
const catKennel = [];
const fishTank = [];

//Pets in dog kennel
dogKennel.push(
    createPet("Rover", "Dog", 75,35),
    createPet("Spot", "Dog", 80, 45),
    createPet("Ella", "Dog", 60, 60),
    createPet("Fido", "Dog", 80, 60),
    createPet("Roofus", "Dog", 65, 50)
);

//Pets in cat kennel
catKennel.push(
    createPet("Zoey", "Cat", 65, 55),
    createPet("Yogi", "Cat", 85, 50),
    createPet("Big Fat BOI", "Cat", 90, 50),
    createPet("Whiskers", "Cat", 80, 60),
    createPet("Chloey", "Cat", 80, 60)
);

//Pets in fish tank
fishTank.push(
    createPet("Goldie", "Fish", 65, 55),
    createPet("Wave", "Fish", 85, 50),
    createPet("Coral", "Fish", 90, 50),
    createPet("Coral II", "Fish", 80, 60),
    createPet("Splash", "Fish", 80, 60)
);

//For loops for feeding pets

//Feed all dogs
for (let i = 0; i < dogKennel.length; i++) {
    dogKennel[i].feed();
}

//Feed all cats
for (let i = 0; i < catKennel.length; i++) {
    catKennel[i].feed();
}

//Feed all fish
for (let i = 0; i < fishTank.length; i++) {
    fishTank[i].feed();
}

//Output for final status on all pets
console.log("\nFinal Status of All Pets:");
console.log("Dogs:");
dogKennel.forEach(dog => dog.status());

console.log("\nCats:");
catKennel.forEach(cat => cat.status());

console.log("\nFish:")
fishTank.forEach(fish => fish.status());
