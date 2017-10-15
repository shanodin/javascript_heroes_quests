var Quest = function(name, difficulty, urgency, reward) {
  this.name = name;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.complete = false;
};

Quest.prototype = {
  completeQuest: function () {
      this.complete = true;
    },


};

module.exports = Quest;
