/**
 * Created by isaacwatts on 6/13/16.
 */

function Dictionary() {
    this.add = add;
    this.datastore = {};
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key, val) {
    this.datastore[key] = val;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for(var key in this.datastore) {
        console.log(key + " -> " + this.datastore[key]);
    }
}

var myPbook = new Dictionary();

myPbook.add("Jenny", "801-867-5309");
myPbook.add("Mike", "801-123-9874");
myPbook.add("Fred", "801-865-5531");

console.log("Mike's phone number is: " + myPbook.find("Mike"));

myPbook.remove("Mike");

myPbook.showAll();
