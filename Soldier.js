const Unit = require("./Unit");

function Soldier(name) {
    Unit.apply(this, arguments);
    this._attackPower = 15;
}
Soldier.prototype = Object.create(Unit.prototype);

Soldier.prototype.handAttack = function (unit) {

    let damageAmount = 0;

    if (unit.isAlive()) {
        damageAmount = this._level === 1 ? this._attackPower : this._attackPower * (1 + this._level * 0.1);
        unit.takeDamage(damageAmount);
        this._earnExperience(this.action_xp);
    } else {
        console.log(this._name + ' is out of the game');
    }

    return damageAmount;
};

module.exports = Soldier;