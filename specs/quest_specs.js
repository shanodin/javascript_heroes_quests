var assert = require("assert")
var Quest = require("../quest.js")

describe("Quest", function() {
  var quest1;

  beforeEach(function() {
    quest1 = new Quest("Do the shopping", "easy", 3, 100);
  })

  it("should have a name", function() {
    assert.strictEqual(quest1.name, "Do the shopping");
  });
  it("should start incomplete", function() {
    assert.strictEqual(quest1.complete, false);
  });
  it("should be completable", function() {
    quest1.completeQuest();
    assert.strictEqual(quest1.complete, true);
  });
});
