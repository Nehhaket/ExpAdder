const assert   = require('assert')
const ExpAdder = require('../index')

describe('ExpAdder', function() {
  describe('#add_two()', function() {
    it('should work propperly for inputs given in example', function() {
      const result   = ExpAdder.add_two({ 2: 2, 0: 3 }, { 3: 3, 2: 1 })
      const expected = { 2: 3, 3: 3, 0: 3 }
      for (key in result) {
        assert.strictEqual(key in expected, true)
        assert.strictEqual(expected[key], result[key])
      }
    })
    
    it('should return empty object when given no arguments', function() {
      const result  = ExpAdder.add_two()
      const entries = Object.entries(result)
      assert.strictEqual(typeof result, 'object')
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
