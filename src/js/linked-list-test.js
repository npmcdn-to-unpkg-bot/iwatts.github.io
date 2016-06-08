/**
 * Created by isaacwatts on 6/8/16.
 */

function LinkedLists() {
    this.head = null;
}

LinkedLists.prototype.push = function (val) {
    var node = {
        value: val,
        next: null
    }
    if (!this.head) {
        this.head = node;
    }
    else {
        current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }
}

var myll = new LinkedLists();

myll.push(7);
myll.push(8);
myll.push(9);

console.log(myll);
