# random-color-generator


## NPM
[npm link (@momo112/random-color-generator)](https://www.npmjs.com/package/@momo112/random-color-generator)

## functions

1. ```rcg.get(rgbColorOptions:JSON);```<br />
get random color

```nodejs
var rcg = require('@momo112/random-color-generator');
rcg.get();

{
    hex: "#A200FF",
    R: "162",
    G: "0",
    B: "255",
    H: "278",
    S: "100",
    L: "50",
    C: "36",
    M: "100",
    Y: "0",
    K: "0"
}
```

```nodejs
var rcg = require('@momo112/random-color-generator');
rcg.get({ R: "100", G: "163" });

{
    hex: "#64A345",
    R: "100",
    G: "163",
    B: "69",
    H: "100", 
    S: "58", 
    L: "45", 
    C: "39", 
    M: "0", 
    Y: "58", 
    K: "36" 
}
```

2. ```rcg.```**```|color|```**```()```
```nodejs
var rcg = require('@momo112/random-color-generator');

rcg.black();
rcg.white();
rcg.red();
rcg.blue();
rcg.green();
```