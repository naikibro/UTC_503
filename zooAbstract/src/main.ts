import './style.css'

abstract class Animal {
    protected name: any;
    protected consumption:any;
    protected timerange: any;

    constructor(name: any, waterNeed: any, timeRange: any) {
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

    abstract makeSound():any;
}

class Lion extends Animal {
    constructor(name: string, waterNeed: number, timeRange: string) {
        super(name, waterNeed, timeRange);
    }

    makeSound() {
        console.log("ROARRRRRRR !!!");
    }
}

class Dromedary extends Animal {
    constructor(name: string, waterNeed: number, timeRange: string) {
        super(name, waterNeed, timeRange);
    }

    makeSound() {
        console.log("Slurp slurp ...");
    }
}

class Zoo {
    protected animals: any;
    public waterUsage: any;

    constructor(animals:any) {
        this.animals = animals;
        this.waterUsage = 0.;
        this.calculateDailyWaterUsage();
    }

    addAnimal(animal:Animal) {
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

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Zoo abstract</h1>
`
