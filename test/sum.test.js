const sum = require("../sum");
const assert = require("assert");


describe("sum",()=>{
    it("should return 3",()=>[
        assert.strictEqual(sum(1,2),3)
    ])
})
