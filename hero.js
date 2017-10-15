var Hero = function(name, health, favourite_food) {
  this.name = name;
  this.maxHealth = health;
  this.currentHealth = health;
  this.favourite_food = favourite_food;
  this.quests = [];
  this.inventory = [];
}

Hero.prototype = {
  talk: function () {
    return this.name;
  },

  calculateHealthMissing: function () {
    if ((this.maxHealth - this.currentHealth) <= 0) {
      return 0;
    }
    else return this.maxHealth - this.currentHealth;
  },

  eat: function(food) {
    if (food.name === this.favourite_food) {
      food.healing = food.healing + (food.healing / 2);
    }
    if (this.calculateHealthMissing() === 0) {
      this.inventory.push(food);
    }
    if (this.calculateHealthMissing() > 0 && this.calculateHealthMissing() <= food.healing) {
      this.currentHealth = this.maxHealth;
    }
    if (this.calculateHealthMissing() > 0 && this.calculateHealthMissing() > food.healing) {
      this.currentHealth += food.healing;
    }
  },

};

module.exports = Hero;
