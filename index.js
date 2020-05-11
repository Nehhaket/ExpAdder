const sum = (...args) => {
// argument checks
  args.forEach((expression, index) => {
    if(typeof(expression) !== 'object' || expression.constructor !== Object) {
      throw TypeError('wrong type for argument ' + (index + 1));
    }
  });

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

const ExpAdder = { sum };

module.exports = ExpAdder;