const doctor = require("./Doctor.js");
const soldier = require("./Soldier.js");
const heavy = require("./Heavy.js");

let animalDoctor = new doctor('Cat');
let animalSoldier = new soldier('Dog');
let animalSoldier2 = new soldier('Frog');
let animalHeavy = new heavy('Duck');

let plantDoctor = new doctor('Flower');
let plantSoldier = new soldier('Tod');
let plantSoldier2 = new soldier('Grass');
let plantHeavy = new heavy('Tree');


console.log('\nfight is starting...\n');


console.log(plantHeavy.getName() + ' machine attacks ' + animalSoldier.getName() + ': ' + plantHeavy.machineGunAttack(animalSoldier, 3) + ' xp');

console.log(animalDoctor.getName() + ' heals ' + animalSoldier.getName() + ': ' + animalDoctor.heal(animalSoldier) + ' xp');

console.log(animalSoldier.getName() + ' hand attacks ' + plantSoldier2.getName() + ': ' + animalSoldier.handAttack(plantSoldier2) + ' xp');

console.log(animalHeavy.getName() + ' machine attacks ' + plantHeavy.getName() + ': ' + animalHeavy.machineGunAttack(plantHeavy, 8) + ' xp');

console.log(animalSoldier.getName() + ' hand attacks ' + plantSoldier2.getName() + ': ' + animalSoldier.handAttack(plantSoldier2) + ' xp');

console.log(plantSoldier.getName() + ' hand attacks ' + animalDoctor.getName() + ': ' + plantSoldier.handAttack(animalDoctor) + ' xp');

console.log(plantSoldier2.getName() + ' hand attacks ' + animalSoldier2.getName() + ': ' + plantSoldier2.handAttack(animalSoldier2) + ' xp');

console.log(plantDoctor.getName() + ' heals ' + plantHeavy.getName() + ': ' + plantDoctor.heal(plantHeavy) + ' xp');

console.log(plantHeavy.getName() + ' machine attacks ' + animalSoldier2.getName() + ': ' + plantHeavy.machineGunAttack(animalSoldier2, 120) + ' xp');

console.log(animalSoldier.getName() + ' hand attacks ' + plantSoldier.getName() + ': ' + animalSoldier.handAttack(plantSoldier) + ' xp');

console.log(plantDoctor.getName() + ' heals ' + plantSoldier.getName() + ': ' + plantDoctor.heal(plantSoldier) + ' xp');

console.log(animalSoldier.getName() + ' hand attacks ' + plantHeavy.getName() + ': ' + animalSoldier.handAttack(plantHeavy) + ' xp');

console.log(animalHeavy.getName() + ' machine attacks ' + plantSoldier.getName() + ': ' + animalHeavy.machineGunAttack(plantSoldier, 54) + ' xp');

console.log(animalSoldier.getName() + ' hand attacks ' + plantDoctor.getName() + ': ' + animalSoldier.handAttack(plantDoctor) + ' xp');

console.log(animalSoldier2.getName() + ' hand attacks ' + plantDoctor.getName() + ': ' + animalSoldier2.handAttack(plantDoctor) + ' xp');

console.log(animalSoldier.getName() + ' hand attacks ' + plantHeavy.getName() + ': ' + animalSoldier.handAttack(plantHeavy) + ' xp');

console.log(animalDoctor.getName() + ' heals ' + animalSoldier.getName() + ': ' + animalDoctor.heal(animalSoldier) + ' xp');

console.log('\nfight is finishing...\n');
