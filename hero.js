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

  addQuest: function(quest) {
    this.quests.push(quest);
  },

  sortQuestsByUrgency: function() {
    this.quests.sort(function (quest1, quest2){
      return quest1.urgency - quest2.urgency;
    });
  },

  sortQuestsByDifficulty: function() {
    this.quests.sort(function (quest1, quest2){
      return quest1.difficulty - quest2.difficulty;
    });
  },

  sortQuestsByReward: function() {
    this.quests.sort(function (quest1, quest2){
      return quest1.reward - quest2.reward;
    });
  },

  listIncompleteQuests: function() {
    var incompleteQuests = [];
    for (quest of this.quests) {
      if (quest.complete === false) {
        incompleteQuests.push(quest);
      };
    };
    return incompleteQuests;
  },

  listCompleteQuests: function() {
    var completeQuests = [];
    for (quest of this.quests) {
      if (quest.complete === true) {
        completeQuests.push(quest);
      };
    };
    return completeQuests;
  },


};

module.exports = Hero;
