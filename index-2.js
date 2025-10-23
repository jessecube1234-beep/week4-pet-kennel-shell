// Factory fuction creating the pet objects
function createPet(name, species) {
    return {
        name: name,
        species: species,
        happiness: 0,
        energy: 100,

        //Play method: drains energy and boosts happiness
        play: function () {
             this.energy -= 20;
             this.happiness += 10;
             return `You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
        },

        //Feed method: increases happiness and energy
        feed: function () {
            this.happiness +=20;
            this.energy +=20;
            return `You fed ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
        },

        //Status method: Shows pet stats
        status: function () {
            console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`);
        }
    };
}

//Testing pet methods
const pet1 = createPet("Zoey", "Cat");
const pet2= createPet("Ella", "Dog");

//Pet starting status
pet1.status();
pet2.status();

//Playing with Zoey
console.log(pet1.play());
pet1.status();

//Feeding Zoey
console.log(pet1.feed());
pet1.status();

//Playing with Ella
console.log(pet2.play());
pet2.status();

//Feeding Ella
console.log(pet2.feed());
pet2.status();