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
//console.log(sP);

var tP = x + y + z;
//console.log(tP);

var cir = 2 * pi * r;
//console.log(cir);




var eg = Math.pow(9.81, 2);
var mg = Math.pow(1.622, 2);
var jg = 1.898 * Math.pow(10, 27);


var weight = 250;
var moonWeight = (weight / eg) * mg;
var jupiterWeight = (weight / eg) * jg;
//console.log(moonWeight);
//console.log(jupiterWeight);

var string = "String";
var number = 1;
var array = ["Apple", "Orange", "Banana"];
var me = '{"firstName":"Isaac", "lastName":"Watts", "age":28, "eyeColor":"blue" }';

var myString = String(400+56);
//console.log(myString);


var myBool = false;
//console.log(String(myBool));
//console.log(Number(myBool));

var obj = JSON.parse(me);
jsonFunction(obj);

function jsonFunction(arr) {
    var out = '<div>' + arr.firstName + ' ' + arr.lastName + ' ' + arr.age + '</div><br>';
    document.getElementById("id01").innerHTML += out;
}

var employees = [
    {"firstName":"John", "lastName":"Doe", "age":31},
    {"firstName":"Anna", "lastName":"Smith", "age":20},
    {"firstName":"Peter","lastName": "Jones", "age":18}
];

jsonFunction2(employees);
function jsonFunction2(arr) {
    for(var i = 0; i < arr.length; i++) {
        jsonFunction(arr[i]);
    }
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myObj = JSON.parse(xmlhttp.responseText);
        document.getElementById("id02").innerHTML += myObj.weather[0].description;
        document.getElementById("id02").innerHTML += ' '+ myObj.main.temp + '&deg;';
    }
};
//xmlhttp.open("GET", "js/weather.json", true);
//xmlhttp.send();

var url= "http://api.openweathermap.org/data/2.5/weather?id=5780026&appid=20e833c9715665014beb18e4e9f50aa5"

xmlhttp.open("GET", url, true);
xmlhttp.send();

function numCheck(x) {
    if (x >= 1 && x <= 20) {
        return true;
    } else {
        return false;
    }

}
console.log(numCheck(2));

function stringCheck(s) {
    if (s.length == 5) {
        return true;
    } else {
        return false;
    }

}
console.log(stringCheck("isaac"));
