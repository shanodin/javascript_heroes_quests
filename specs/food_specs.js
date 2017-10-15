var assert = require("assert")
var Food = require("../food.js")

describe("Food", function() {
  var food1;

  beforeEach(function() {
    food1 = new Food("Pizza", 75);
  });

  it("should have a name", function() {
    assert.strictEqual(food1.name, "Pizza");
  });
  it("should have a heal value", function() {
    assert.strictEqual(food1.healing, 75);
  });
});
