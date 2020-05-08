const assert   = require('assert');
const ExpAdder = require('../index');

describe('ExpAdder', function() {
  describe('#add()', function() {
    it('should work propperly for inputs given in example', function() {
      const result   = ExpAdder.add({ 2: 2, 0: 3 }, { 3: 3, 2: 1 });
      const expected = { 2: 3, 3: 3, 0: 3 };
      for (key in result) {
        assert.strictEqual(key in expected, true);
        assert.strictEqual(expected[key], result[key]);
      }
    });
    
    it('should return empty object when given no arguments', function() {
      const result  = ExpAdder.add();
      const entries = Object.entries(result);
      assert.strictEqual(typeof result, 'object');
      assert.strictEqual(entries.length, 0);
    });

// arguments type test
    let arguments_test_data = [ [], '', 1 ];
    arguments_test_data.forEach( (elem) => {
      it('should throw TypeError when given ' + elem.constructor.name + ' as an argument', function() {
        try {
          ExpAdder.add(elem, elem);
          throw Error;
        } catch(err) {
          assert.strictEqual(true, err instanceof TypeError);
        }
      });
    });

// coefficients type test
    let coefficients_test_data = [
      [ 1, '' ],
      [ 2, [] ],
      [ 1, {} ]
    ];
    coefficients_test_data.forEach(([arg_number, coeff]) => {
      let coeff_type = coeff.constructor.name;
      it('should throw TypeError when given ' + coeff_type + ' as a coefficient', function() {
        try {
          let args = [];
          for(let i = 1; i < arg_number; i++) {
            args.push({});
          }
          args.push({ arg_number: coeff });
          ExpAdder.add(...args);
          throw Error;
        } catch(err) {
          assert.strictEqual(true, err instanceof TypeError);
          assert.strictEqual(err.message, 'Invalid coefficient type "' + coeff_type + '" in expression ' + arg_number);
        }
      });
    });
  });
});
