const Unit = require('./Unit');

function Doctor(name) {
    Unit.apply(this, arguments);
    this._healPower = 10;
}
Doctor.prototype = Object.create(Unit.prototype);

Doctor.prototype.heal = function (unit) {

    let healedAmount;

    if (unit.isAlive()) {
        healedAmount = this._level === 1 ? this._healPower : this._healPower * (1 + this._level * 0.1);

        unit.addHealth(healedAmount);
        this._earnExperience(this.action_xp);
    } else {
        console.log(this._name + ' is out of the game');
    }

    return healedAmount;
};

module.exports = Doctor;