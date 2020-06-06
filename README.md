# Calculator Engine

This is very simple Calculator can evaluate string math expressions (without `eval`).  
By default there is few operations, but you can add your own ones.

*Example:*
```js
let calc = new Calculator();
// defineOperator(symbol, func, notation, precedence, rightToLeft)
calc.defineOperator("%", (a, b) => a%b, "infix", 4);
```

Using calculator:
```js
let calc = new Calculator();
calc.evaluate("2+2+(3-1)"); // 6
```

You can see real calculator example in /example folder.
