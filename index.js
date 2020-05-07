const add_two = (expression_1 = {}, expression_2 = {}) => {

  for (key in expression_2)
    if(key in expression_1)
      expression_1[key] = parseFloat(expression_1[key])
                        + parseFloat(expression_2[key])
    else expression_1[key] = expression_2[key]

  return expression_1
}

const ExpAdder = { add_two }

module.exports = ExpAdder