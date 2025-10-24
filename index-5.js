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

        //Play method: increases pets happiness and decreases energy
        play: function () {
            //increasing happiness
            this.happiness += 10;
            this.energy -=15;
            
            //Keeping values between 0-100
            if (this.happiness > 100) this.happiness = 100;
            if(this.energy < 0) this.energy =0;

            return `You played with ${this.name}! Happiness is now ${this.happiness}, Energy is now ${this.energy}.`;

        },

        //Feed method: increases happiness and energy
        feed: function () {
            this.happiness +=5;
            this.energy += 20;

            //Keeping values between 0-100
            if (this.happiness > 100) this.happiness = 100;
            if (this.energy > 100) this.energy =100;

            return `You fed ${this.name}! Happiness is now ${this.happiness}, Energy is now ${this.energy}.`;
        }
    };
}

//Creating kennels
const dogKennel = [];
const catKennel = [];
const fishTank = [];

//Random starting energy
function randomEnergy() {
    return Math.floor(Math.random() * 51);
}

//Pets in dog kennel
dogKennel.push(
    createPet("Rover", "Dog", randomEnergy(),35),
    createPet("Spot", "Dog", randomEnergy(), 45),
    createPet("Ella", "Dog", randomEnergy(), 60),
    createPet("Fido", "Dog", randomEnergy(), 60),
    createPet("Roofus", "Dog", randomEnergy(), 50)
);

//Pets in cat kennel
catKennel.push(
    createPet("Zoey", "Cat", randomEnergy(), 55),
    createPet("Yogi", "Cat", randomEnergy(), 50),
    createPet("Big Fat BOI", "Cat", randomEnergy(), 50),
    createPet("Whiskers", "Cat", randomEnergy(), 60),
    createPet("Chloey", "Cat", randomEnergy(), 60)
);

//Pets in fish tank
fishTank.push(
    createPet("Goldie", "Fish", randomEnergy(), 55),
    createPet("Wave", "Fish", randomEnergy(), 50),
    createPet("Coral", "Fish", randomEnergy(), 50),
    createPet("Coral II", "Fish", randomEnergy(), 60),
    createPet("Splash", "Fish", randomEnergy(), 60)
);

//Playing with pets
console.log("\nPlaying with pets");

dogKennel.forEach((dog,index) => {
    //Play multiple Times
    const timesToPlay = index + 1;
    for(let i = 0; i < timesToPlay; i++) {
        console.log(dog.play());
    }
});

catKennel.forEach((cat) => {
    //Random
    const plays = Math.floor(Math.random() *3) +1;
    for (let i = 0; i < plays; i++) {
        console.log(cat.play());
    }
});

fishTank.forEach((fish) => {
    //Play once
    console.log(fish.play());
});

console.log("\nStatus after playing:");
[...dogKennel, ...catKennel, ...fishTank].forEach(pet => pet.status());

//Feeding pets conditionally
console.log("\nFeeding pets that are tired (energy < 30):");

[dogKennel, catKennel, fishTank].forEach(kennel => {
    for (let i = 0; i < kennel.length; i++) {
        let pet = kennel[i];
        if (pet.energy < 30) {
            console.log(pet.feed());
        } else {
            console.log(`${pet.name} has enough energy (${pet.energy}), skipping feeding.`);  
        }
    }
});

//Final Status
console.log("\nFinal status of All Pets:");
[...dogKennel, ...catKennel, ...fishTank].forEach(pet => pet.status());
