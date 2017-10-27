const expect = require("chai").expect;
const example = require('../lib/example.js')


describe("Some test", function() {
  it("Some sub-test", function(done) {
    expect(true).to.be.true;
    expect(example.test("bar")).to.equal("barfoo")
    done()
  })
})