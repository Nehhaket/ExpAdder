const assert   = require('assert')
const ExpAdder = require('../index')

describe('ExpAdder', function() {
  describe('#add_two()', function() {
    it('should return empty object when given no params', function() {
      const result  = ExpAdder.add_two()
      const entries = Object.entries(result).length
      assert.strictEqual(entries, 0)
    })
  })
})
