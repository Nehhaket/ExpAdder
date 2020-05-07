const assert   = require('assert')
const ExpAdder = require('../index')

describe('ExpAdder', function() {
  describe('#add_two()', function() {
    it('should return empty object when given no arguments', function() {
      const result  = ExpAdder.add_two()
      const entries = Object.entries(result)
      assert.strictEqual(entries.length, 0)
    })

    it('should throw a TypeError when given wrong type of argument', function() {
      try { // array
        ExpAdder.add_two([], [])
        throw Error
      } catch(err) {
        assert.strictEqual(true, err instanceof TypeError)
      }
      try { // string
        ExpAdder.add_two('', '')
        throw Error
      } catch(err) {
        assert.strictEqual(true, err instanceof TypeError)
      }
      try { // number
        ExpAdder.add_two(1, 2)
        throw Error
      } catch(err) {
        assert.strictEqual(true, err instanceof TypeError)
      }
    })
  })
})
