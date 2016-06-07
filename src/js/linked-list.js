/**
 * Created by isaacwatts on 6/7/16.
 */
function LinkedList() {
    this.head = null;
    this.length = 0;

    this.insert = function (element) {
        var tempNode = new Node(element);

        var currentNode = this.head;

        if (!currentNode) {
            this.head = tempNode;
            return tempNode;
        }

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        tempNode.length ++;
        return tempNode;

    };
    this.remove = function (element) {
        var currentNode = this.head;

        if (currentNode !== null) {
            if (currentNode.value === element){
                
            }
        }

    };
    this.contains = function (element) {
        var currentNode = this.head;

        if (currentNode !== null) {
            if (currentNode.value === element){
                return currentNode.value;
            }
        }
    };
    this.size = function () {
        var currentNode = this.head;
        return currentNode.length;
    };
}

function Node(value) {
    this.value = value;
    this.next = null;
}
