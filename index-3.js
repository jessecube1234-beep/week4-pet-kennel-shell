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

        //Play method: drains energy and boosts happiness
        play: function () {
            this.energy -= 20;
            this.happiness += 10;
                
            //Keeping the values between 0-100
            if (this.energy < 0) this.energy = 0;
            if (this.happiness > 100) this.happiness = 100;


            return `You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
        },

        //Feed method: increases happiness and energy
        feed: function () {
            this.happiness +=20;
            this.energy +=20;

            //Keeping the values between 0-100

            if (this.energy > 100) this.energy = 100;
            if (this.happiness > 100) this.happiness = 100;

            return `You fed ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
        }
    };
}

//Creating multiple pets
const pet1 = createPet("Zoey", "Cat", 80, 40);
const pet2 = createPet("Ella", "Dog", 60,30);
const pet3 = createPet("Yogie", "Cat", 75,60);

//Initializing the kennel array
const kennel = [];

//Add pets to kennel
kennel.push(pet1);
kennel.push(pet2);

//Added with bracket notation
kennel[kennel.length] = pet3;

//Logging the kennel
console.log("All pets in the kennel:");
console.table(kennel);

