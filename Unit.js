function Unit(name) {
    this._health = this.max_health;
    this._name = name || 'anonym';
    this._level = 1;
    this._xp = 0;           //experience points
}
Unit.prototype.max_health = 100;
Unit.prototype.level_xp = 1000;
Unit.prototype.damage_xp = 500;
Unit.prototype.action_xp = 250;

Unit.prototype.getName = function () {
    return this._name;
};

Unit.prototype.getLevel = function () {
    return this._level;
};

Unit.prototype.isAlive = function () {
    if (this._health > 0) {
        return true;
    }
};

Unit.prototype.addHealth = function (amount) {
    if (this.isAlive()) {
        this._health = this._health + amount > this.max_health ? this.max_health : this._health + amount;
    }

};

Unit.prototype.takeDamage = function (amount) {
    this._health = this._health - amount > 0 ? this._health - amount : 0;
};

Unit.prototype._levelUp = function () {
    if (this._xp >= this.level_xp) {
        this._xp -= this.level_xp;
        this._level += 1;
        console.log(this._name + ' is on the level ' + this._level);
    }
};

Unit.prototype._earnExperience = function (amount) {
    this._xp += this._level > 1 ? amount : amount * (1 - this._level * 0.1);
    this._levelUp();
};

module.exports = Unit;

