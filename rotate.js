console.log(' Rotate x by i: ');
console.log(Array.prototype);
/*
    Rotate an n element vector left by i positions. 
    For example with n=8 and i=3, the vector abcdefgh is rotated and becomes defghabc. 

    Move x[0] to temporary t.
    Then move x[i] to x[0]
    Then x[2i] to x[i] ( taking all indices to x modulo n )
    Do this until we come back to taking an element from x[0] 
        then take the element from t and stop the process.
*/

// Delicate juggling act

const n = 8;
let i = 3;
let x = ['a','b','c','d','e','f','g','h'];

// Iterative
console.log('Iterative, x before: '+x);
iterativeRotate(i,x);
console.log('Iterative, x after: ' + x);

console.log('------------------------');

// Reverse
console.log('Reverse, x before: '+x);
reverseRotate(i,x);
console.log('Reverse, x after: ' + x);

function iterativeRotate(por,arr) {

}

function reverseRotate(por,arr) {
    // Given ab
    // reverse a
    //reverse b
    // reverse arbr
    // (arbr)r === ba
    const len = arr.length;
    reversePortion(x,0,por);
    reversePortion(x,por,len);
    reversePortion(x,0,len);
}

// this function reverses a portion of the given array m - n
function reversePortion(arr,m,n) {
    if(m >= n) { throw new Error('n must be greater than m.'); }

    console.log(`reverse portion: ${m} - ${n}`);
    // reverse the portion
    let x = arr.slice(m,n);
    x.reverse();
    console.log(`portion: ${x}`);
    for(let i = m; i<n; i++) {
        arr[i] = x.shift();
    }
    console.log(`reversed:     ${arr}`);
}

