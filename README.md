# Expression Adder
This package sums mathematical expressions.

## Documentation

### `.sum()`
Arguments:
- args : list of math expressions

Returns:
- result : sum of arguments; math expression

Note:
Math expressions are represented by collections of (key : value) pairs,
where key is an exponent and value is a coefficient. E.g.:
'2x<sup>2</sup> + 3' becomes `{ 2: 2, 0: 3 }`
'3x<sup>3</sup> + x<sup>2</sup>' becomes `{ 3: 3, 2: 1 }`

## Running

#### In order to run the package do the following:
1. Make sure you have Node.js with npm
2. Clone repository
```
$ git clone https://github.com/ExpAdder.git
```
3. Go into `ExpAdder/` and install package
```
$ cd ExpAdder && npm install
```
3. Run Node.js REPL, import the package and use like this
```javascript
> const ExpAdder = require('');
> const example_expressions = [
...   { 2: 2, 0: 3 },
...   { 3: 3, 2: 1 }
... ];
> ExpAdder.add(...example_expressions);
```

## Testing

#### In order to run tests
```
$ npm test
```