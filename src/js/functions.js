/**
 * Created by isaacwatts on 4/28/16.
 */
function greeting(person) {
    console.log("Hello " + person + "! You are running a function!");
};

var addItem =(function () {
    var cartItems = 0;
    return function () {
        return cartItems += 1;
    };
})();

addItem();
addItem();
addItem();
addItem();

console.log(addItem());
console.log(addItem());
