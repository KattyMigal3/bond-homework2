const Soldier = require('./Soldier');

function Heavy(name) {
    Soldier.apply(this, arguments);
    this._resistance = 0.2;
}
Heavy.prototype = Object.create(Soldier.prototype);

Heavy.prototype.machineGunAttack = function (unit, amountOfShots) {

    if (!amountOfShots) {
        amountOfShots = 1;
    }
    let damageAmount = 0;

    if (unit.isAlive()) {
        damageAmount = this._level === 1 ? this._attackPower * amountOfShots :
            this._attackPower * (1 + this._level * 0.1) * amountOfShots;
        unit.takeDamage(damageAmount);
        this._earnExperience(this.action_xp);
    } else {
        console.log(this._name + ' is out of the game');
    }

    return damageAmount;
};

Heavy.prototype.takeDamage = function (amount) {

    if (!amount) {
        amount = 1;
    }
    this._health -= amount * (1 - this._resistance);
    if (this._health < 0) {
        this._health = 0;
    } else {
        this._earnExperience(this.damage_xp)
    }
};

module.exports = Heavy;