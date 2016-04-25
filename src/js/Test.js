/**
 * Created by isaacwatts on 4/25/16.
 */
var s = 4

var x = 4;
var y = 2;
var z = 3;

var r = 3;
var pi = Math.PI;

var sP = 4 * s;
console.log(sP);

var tP = x + y + z;
console.log(tP);

var cir = 2 * pi * r;
console.log(cir);




var eg = Math.pow(9.81, 2);
var mg = Math.pow(1.622, 2);
var jg = 1.898 * Math.pow(10, 27);


var weight = 250;
var moonWeight = (weight / eg) * mg;
var jupiterWeight = (weight / eg) * jg;
console.log(moonWeight);
console.log(jupiterWeight);
