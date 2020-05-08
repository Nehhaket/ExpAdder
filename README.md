# Expression Adder
This package sums mathematical expressions.
It's been done for recruitment purposes.

## Running
In order to run the package do the following:
1. Make sure you have Node.js with npm
2. Clone repository
```
$ git clone https://github.com/<repo_name>.git
```
3. Go into `<dir_name>` and install package
```
$ cd <dir_name> && npm install
```
3. Run Node.js REPL, import the package and use freely
```javascript
> const ExpAdder = require('');
> const example_expressions = [
...   { 2: 2, 0: 3 },
...   { 3: 3, 2: 1 }
... ];
> ExpAdder.add(...example_expressions);
```

## Testing
In order to run tests
```
$ npm test
```