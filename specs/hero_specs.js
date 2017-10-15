var assert = require("assert");
var Hero = require("../hero.js");
var Food = require("../food.js");
var Quest = require("../quest.js");

describe("Hero", function() {
  var hero1;
  var food1;
  var food2;
  var quest1;
  var quest2;

  beforeEach(function() {
    hero1 = new Hero("Matt", 100, "Salt & Vinegar Crisps");
    food1 = new Food("Pizza", 75);
    food2 = new Food("Salt & Vinegar Crisps", 50);
    quest1 = new Quest("Do the shopping", 1, 4, 100);
    quest2 = new Quest("Washing Up", 3, 3, 250);
  });

  it("should have a name", function() {
    assert.strictEqual(hero1.name, "Matt");
  });
  it("should have health", function() {
    assert.strictEqual(hero1.maxHealth, 100);
  });
  it("should have a favourite food", function() {
    assert.strictEqual(hero1.favourite_food, "Salt & Vinegar Crisps");
  });
  it("should start with no quests", function() {
    assert.strictEqual(hero1.quests.length, 0);
  });
  it("should say its name", function() {
    assert.strictEqual(hero1.talk(), "Matt");
  });
  it("should report correct missing health", function() {
    hero1.currentHealth = 75;
    assert.strictEqual(hero1.calculateHealthMissing(), 25);
  });
  it("should report correct missing health", function() {
    assert.strictEqual(hero1.calculateHealthMissing(), 0);
  });
  it("should heal when eating food", function() {
    hero1.currentHealth = 75;
    hero1.eat(food1);
    assert.strictEqual(hero1.calculateHealthMissing(), 0);
  });
  it("should heal when eating food", function() {
    hero1.currentHealth = 10;
    hero1.eat(food1);
    assert.strictEqual(hero1.currentHealth, 85);
  });
  it("should heal more when eating favourite food", function() {
    hero1.currentHealth = 10;
    hero1.eat(food2);
    assert.strictEqual(hero1.currentHealth, 85);
  });
  it("should be able to have a quest", function() {
    hero1.addQuest(quest1);
    assert.strictEqual(hero1.quests.length, 1);
  });
  it("should be able to sort quests by urgency", function() {
    hero1.addQuest(quest2);
    hero1.addQuest(quest1);
    hero1.sortQuestsByUrgency();
    assert.strictEqual(hero1.quests[1], quest1);
  });
  it("should be able to sort quests by difficulty", function() {
    hero1.addQuest(quest2);
    hero1.addQuest(quest1);
    hero1.sortQuestsByDifficulty();
    assert.strictEqual(hero1.quests[0], quest1);
  });
  it("should be able to sort quests by reward", function() {
    hero1.addQuest(quest2);
    hero1.addQuest(quest1);
    hero1.sortQuestsByReward();
    assert.strictEqual(hero1.quests[0], quest1);
  });
  it("should be able to view incomplete quests", function() {
    hero1.addQuest(quest2);
    hero1.addQuest(quest1);
    hero1.quests[1].completeQuest();
    var incompleteQuests = hero1.listIncompleteQuests();
    assert.strictEqual(incompleteQuests.length, 1);
  });
  it("should be able to view complete quests", function() {
    hero1.addQuest(quest2);
    hero1.addQuest(quest1);
    hero1.quests[1].completeQuest();
    var completeQuests = hero1.listCompleteQuests();
    assert.strictEqual(completeQuests.length, 1);
  });
});
