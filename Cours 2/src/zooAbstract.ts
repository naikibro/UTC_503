abstract class Animal {
    protected name: any;
    protected consumption; any
    protected timerange: any;

    constructor(name, waterNeed, timeRange) {
        this.name = name;
        this.consumption = waterNeed;
        this.timerange = timeRange;
        this.calculateDailyWaterNeed();
    }

    toString() {
        return `${this.name} drinks ${this.consumption}L/${this.timerange}`;
    }

    getConsumption() {
        return this.consumption;
    }

    getTimeRange() {
        return this.timerange;
    }

    calculateDailyWaterNeed() {
        if (this.timerange === 'month') {
            this.consumption /= 30;
            this.timerange = "daily";
        }

        if (this.timerange === 'year') {
            this.consumption /= 365;
            this.timerange = "daily";
        }

        return this.consumption;
    }

    abstract makeSound();
}

class Lion extends Animal {
    constructor(name, waterNeed, timeRange) {
        super(name, waterNeed, timeRange);
    }

    makeSound() {
        console.log("ROARRRRRRR !!!");
    }
}

class Dromedary extends Animal {
    constructor(name, waterNeed, timeRange) {
        super(name, waterNeed, timeRange);
    }

    makeSound() {
        console.log("Slurp slurp ...");
    }
}

class Zoo {
    protected animals: any;
    public waterUsage: any;

    constructor(animals) {
        this.animals = animals;
        this.waterUsage = 0.;
        this.calculateDailyWaterUsage();
    }

    addAnimal(animal) {
        this.animals.push(animal);
    }

    toString() {
        this.showAnimals();
        console.log('\nWater usage of the zoo:\t' + this.waterUsage + "L/day");
    }

    showAnimals() {
        for (const animal of this.animals) {
            console.log(animal.toString());
        }
    }

    visit() {
        for (const animal of this.animals) {
            animal.makeSound();
        }
    }

    calculateDailyWaterUsage() {
        this.waterUsage = 0;
        for (const animal of this.animals) {
            this.waterUsage += animal.calculateDailyWaterNeed();
        }
    }
}

let lion1 = new Lion('Alex', 20, 'day');
let lion2 = new Lion('Simba', 20, 'day');

let dromedary1 = new Dromedary('Mahmoud', 40, 'month');
let dromedary2 = new Dromedary('Mahomed', 30, 'month');
let dromedary3 = new Dromedary('Mohamed', 30, 'month');

let zoo = new Zoo([lion1, lion2, dromedary1, dromedary2, dromedary3]);

zoo.toString();

console.log("\n-----\n");
zoo.visit();