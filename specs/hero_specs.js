var assert = require("assert")
var Hero = require("../hero.js")
var Food = require("../food.js")

describe("Hero", function() {
  var hero1;
  var food1;

  beforeEach(function() {
    hero1 = new Hero("Matt", 100, "Salt & Vinegar Crisps");
    food1 = new Food("Pizza", 75);
    food2 = new Food("Salt & Vinegar Crisps", 50);
  });

  it("should have a name", function() {
    assert.strictEqual(hero1.name, "Matt");
  });
  it("should have health", function() {
    assert.strictEqual(hero1.maxHealth, 100)
  });
  it("should have a favourite food", function() {
    assert.strictEqual(hero1.favourite_food, "Salt & Vinegar Crisps")
  });
  it("should start with no quests", function() {
    assert.strictEqual(hero1.quests.length, 0)
  });
  it("should say its name", function() {
    assert.strictEqual(hero1.talk(), "Matt")
  });
  it("should report correct missing health", function() {
    hero1.currentHealth = 75;
    assert.strictEqual(hero1.calculateHealthMissing(), 25)
  });
  it("should report correct missing health", function() {
    assert.strictEqual(hero1.calculateHealthMissing(), 0)
  });
  it("should heal when eating food", function() {
    hero1.currentHealth = 75;
    hero1.eat(food1);
    assert.strictEqual(hero1.calculateHealthMissing(), 0)
  });
  it("should heal when eating food", function() {
    hero1.currentHealth = 10;
    hero1.eat(food1);
    assert.strictEqual(hero1.currentHealth, 85)
  });
  it("should heal more when eating favourite food", function() {
    hero1.currentHealth = 10;
    hero1.eat(food2);
    assert.strictEqual(hero1.currentHealth, 85)
  });
});
