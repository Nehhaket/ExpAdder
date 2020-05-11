# Installation
1. Make sure you have Node.js with npm
2. Clone the repository
```
$ git clone https://github.com/ExpAdder.git
```
3. Go into `ExpAdder/` and install dependencies
```
$ cd ExpAdder && npm install
```

# Running
1. [Install](#installation)
2. Run Node.js REPL
3. Import `index.js` with `require`
```javascript
const ExpAdder = require('./index');
```
4. Use (for how to use, see [documentation](#documentation)).

# Testing
1. [Install](#installation)
2. Run tests
```
$ npm test
```

# Documentation
```
Math expressions are represented by collections of (key : value) pairs,
where key is an exponent and value is a coefficient. E.g.:
      2x^2 + 3   becomes   { 2: 2, 0: 3 }
    3x^3 + x^2   becomes   { 3: 3, 2: 1 }
```
## `.sum()`
### Arguments:
- `args` : list of math expressions (any size)

### Returns:
- `result` : math expression; sum of arguments (empty object if none given)

### Exaple:
Note: this sections assumes that you already have `ExpAdder` object.
For how to import it, see [Running](#running) section.
```javascript
const expressions = [
  { 2: 2, 0: 3 },
  { 3: 3, 2: 1 },
  { 3: 3, 2: 3, 0: 3}
];
let result = ExpAdder.add(...expressions);
// result: { 3: 6, 2: 6, 0: 6 }
```
Note: arguments list is destructured for convenience.<br>
It is also possible to pass arguments separately:
```javascript
const expr1 = { 4: 2, 1: 3 };
const expr2 = { 3: 3, 2: 1 };
let result = ExpAdder.sum(expr1, expr2);
// result: { 4: 2, 3: 3, 2: 1, 1: 3 }
```