const assert   = require('assert');
const ExpAdder = require('../index');

describe('ExpAdder', function() {
  describe('#add()', function() {
    it('should work propperly for inputs given in example', function() {
      const result   = ExpAdder.sum({ 2: 2, 0: 3 }, { 3: 3, 2: 1 });
      const expected = { 2: 3, 3: 3, 0: 3 };
      for (key in result) {
        assert.strictEqual(key in expected, true);
        assert.strictEqual(expected[key], result[key]);
      }
    });
    
    it('should work propperly with number strings as exponent', function() {
      const result   = ExpAdder.sum({ '.5': 1, '2.35': '2.5' }, { 0.5: 1, '2.35': 1.5 });
      const expected = { '0.5': 2, '2.35': 4};
      const entries = Object.entries(result);
      assert.strictEqual(entries.length, 2);
      for (key in result) {
        assert.strictEqual(key in expected, true);
        assert.strictEqual(expected[key], result[key]);
      }
    });

    it('should return empty object when given no arguments', function() {
      const result  = ExpAdder.sum();
      const entries = Object.entries(result);
      assert.strictEqual(typeof result, 'object');
      assert.strictEqual(entries.length, 0);
    });

    it('should throw TypeError when given wrong type for an argument', function() {
      let arguments_test_data = [ [], '', 1 ];
      arguments_test_data.forEach( (elem) => {
        try {
          ExpAdder.sum({ 1: 2, 2: 3 }, elem);
          throw Error;
        } catch(err) {
          assert.strictEqual(true, err instanceof TypeError);
        }
      });
    });

    it('should throw TypeError when given wrong type for a coefficient', function() {
      let coefficients_test_data = [ { 1: '' }, { 2: [] }, { 1: {} } ];
      coefficients_test_data.forEach((elem) => {
        try {
          ExpAdder.sum({ 1: 2, 2: 3 }, elem);
          throw Error;
        } catch(err) {
          assert.strictEqual(true, err instanceof TypeError);
        }
      });
    });
    
    it('should throw TypeError when given non-number string for en exponent', function() {
      try {
        ExpAdder.sum({ 1: 2, 2: 3 }, { 'a': 1 });
        throw Error;
      } catch(err) {
        assert.strictEqual(true, err instanceof TypeError);
      }
    });
  });
});
