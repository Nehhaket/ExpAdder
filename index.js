/*
 * name: 
 *  add_two
 *
 * arguments:
 *   - args : list of math expression
 * 
 * returns:
 *   - result : sum of arguments; math expression
 *
 * note:
 *   math expressions are represented as a collection of (key: value) pairs,
 *   where key is an exponent and value is a coefficient. For ex.:
 *       `2x^2 + 3` becomes `{ 2: 2, 0: 3 }`
 *     `3x^3 + x^2` becomes `{ 3: 3, 1: 2 }`
 * 
 */
const add = (...args) => {
// argument checks
  args.forEach((expression, index) => {
    if(typeof(expression) !== 'object' || expression.constructor !== Object) {
      throw TypeError('wrong type for argument ' + (index + 1));
    }
  });

// main algorithm
  let result = {};
  args.forEach((expression, index) => {
    for(key in expression) {
      let coefficient = parseFloat(expression[key]);
      // coefficient check
      if(isNaN(coefficient)) {
        let coefficient_type = (expression[key]).constructor.name;
        throw TypeError('Invalid coefficient type "' + coefficient_type + '" in expression ' + (index + 1));
      }
      else if(key in result) {
        coefficient += result[key];
      }
      result[key] = coefficient;
    }
  });

  return result;
}

const ExpAdder = { add };

module.exports = ExpAdder;