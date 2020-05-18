// To implement a binary Search tree in javascript
// the first step is to define the basic interface
/* old JS -->

function BinarySearchTree () {
    this._root = null;
}

BinarySearchTree.prototype {
    // restore constructor func
    constructor: BinarySearchTree;

    add: function (value){

    },

    contains: function(value){
    },

    remove: function(value){
    },

    size: function(){
    },

    toArray: function(){
    },

    toString: function(){
    }

};*/

class BinarySearchTree {
    constructor() {
        this._root = null;
    }

    function add(value) {
        // nulll
    }

    function contains(value) {
        let found = false;
        let current = this._root;

        //Make sure there's a node to search
        while(!found && current) {
            //if the value is less than the current node's go left
            if(value < current.value) {
                current = current.left;
            }
            // if the value is greater than the current node's go right
            else if( value > current.value) {
                current = current.right;
            }
            // they mathc found 
            else {
                found = true;
            }
        }
        //Only preceed if the node was found
        return found;

    }
    
    function remove(value) {

    }
    function size(value) {

    }
    function toArray(value) {

    }
    function toString(value) {

    }
};