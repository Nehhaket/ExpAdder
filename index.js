/*
 * name: 
 *  add_two
 *
 * arguments:
 *   - expression_1 : math expression
 *   - expression_2 : math expression
 * 
 * returns:
 *   - math expression; sum of arguments
 *
 * note:
 *   math expressions are represented as a collection of (key: value) pairs,
 *   where key is an exponent and value is a coefficient. For ex.:
 *       `2x^2 + 3` becomes `{ 2: 2, 0: 3 }`
 *     `3x^3 + x^2` becomes `{ 3: 3, 1: 2 }`
 * 
 */
const add_two = (expression_1 = {}, expression_2 = {}) => {
// argument checks
  if(typeof(expression_1)     !== 'object'
  || expression_1.constructor !== Object
  || expression_1.forEach     !== undefined)
    throw TypeError('wrong type for argument 1')
  if(typeof(expression_2)     !== 'object'
  || expression_2.constructor !== Object
  || expression_2.forEach     !== undefined)
    throw TypeError('wrong type for argument 2')
// coefficient checks
  for(key in expression_1) if(isNaN(parseFloat(expression_1[key])))
    throw TypeError('Coefficient "' + expression_1[key] + '" is not a number.')
  for(key in expression_2) if(isNaN(parseFloat(expression_2[key])))
    throw TypeError('Coefficient "' + expression_2[key] + '" is not a number.')

// for every key in expression_2 check if it exists in expression_1,
// if it does then incement the value, otherwise insert new
  for (key in expression_2)
    if(key in expression_1)
      expression_1[key] = parseFloat(expression_1[key])
                        + parseFloat(expression_2[key])
    else expression_1[key] = expression_2[key]
  
  return expression_1
}

const ExpAdder = { add_two }

module.exports = ExpAdder