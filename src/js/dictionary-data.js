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

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}

function show() {
    return this.data;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root === null) {
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current === null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current === null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}


var nums = new BST();
nums.insert(12);
nums.insert(64);
nums.insert(28);
nums.insert(15);
console.log("In order traversal: ");
nums.inOrder(nums.root);
