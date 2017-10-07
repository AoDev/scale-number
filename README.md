[![deprecated](http://badges.github.io/stability-badges/dist/deprecated.svg)](http://github.com/badges/stability-badges)

D3.js developers released their scaling functions into a separate package. I recommend to use these instead. [d3-scale](https://github.com/d3/d3-scale)

Scale number
==============

Let's you map a number from a range to another.

---------------------------
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://travis-ci.org/AoDev/scale-number.svg?branch=master)](https://travis-ci.org/AoDev/scale-number)

Current status: Alpha, API might change until 1.0.0

Scales
-------

### createLinearScale(fromRange, toRange)

Returns a scaling function from an input range to an output range.

Ranges are expressed with arrays.


```js
var scaleNumber = require('scale-number')
var scale = scaleNumber.createLinearScale([10, 20], [100, 200])

var number = scale(15)
console.log(number) // 150
```

If the value is out of the entry range, it will be mapped to the lowest or
greatest value. (this behaviour might be available as an option later)

```js
var scale = scaleNumber.createLinearScale([10, 20], [100, 200])

var number = scale(5)
console.log(number) // 100
```

Story
------
This project gets its inspiration from d3 scale.

https://github.com/mbostock/d3/wiki/Quantitative-Scales

I needed this functionality as stand alone.


Roadmap
-------

### done

* linear scale

### todo

* other type of scales and options like logarithmic, discrete, rounded, etc.
