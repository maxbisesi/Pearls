//import gcd from 'GCD';
console.log(' Rotate x by i: ');
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
console.log('Juggle, x before: '+x);
juggleRotate(i,x);
console.log('Juggle, x after: ' + x);

console.log('------------------------');

// Reverse ab ba
console.log('Reverse, x before: '+x);
reverseRotateAB(i,x);
console.log('Reverse, x after: ' + x);

console.log('------------------------');

// Reverse abc cba
console.log('Reverse abc, x before: '+x);
reverseRotateABC(i,x);
console.log('Reverse abc, x after: ' + x);

function juggleRotate(por,arr) {
    // for i = [0, gcd(rotdist,n))
    let rotdist = por;
    let n = arr.length;
    let lim = gcd(rotdist,n);
    let t;
    let j;
    let k;
    // let x = ['a','b','c','d','e','f','g','h'];
    for(let i = 0; i < lim; i++) {
        // move i th values of blocks
        t = arr[i]; // t = a
        j = i; // j = 0
        while(true) {
            k = j+rotdist; // k = 3, 6, 9
            if(k >= n) // false n = 8 k = 3, false n = 8 k = 6, true n = 8 k = 9
                k -= n; //  , ,k = 1 
            if(k === i) // false, false, false,
                break;
            arr[j] = arr[k]; // arr[0] = arr[k] d, arr[3] = arr[6] g, arr[6] = arr[1] b,
            j = k; // j = 3, 6, 1
        }
        arr[j] = t;
    }
}

function reverseRotateAB(por,arr) {
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

function reverseRotateABC(por,arr) {
    // Given ab
    // reverse a
    //reverse b
    // reverse arbr
    // (arbr)r === ba
    /*const len = arr.length;
    reversePortion(x,0,por);
    reversePortion(x,por,len);
    reversePortion(x,0,len);*/
}

// this function reverses a portion of the given array m - n
function reversePortion(arr,m,n) {
    if(m >= n) { throw new Error('n must be greater than m.'); }

    //console.log(`reverse portion: ${m} - ${n}`);
    // reverse the portion
    let x = arr.slice(m,n);
    x.reverse();
    //console.log(`portion: ${x}`);
    for(let i = m; i<n; i++) {
        arr[i] = x.shift();
    }
    //console.log(`reversed:     ${arr}`);
}

function gcd(x,y) {
    let r;
    while((x % y) > 0) {
        r = x % y; // r = 20, 10, 10
        x = y; // a = 30, 20, 10
        y = r; // b = 20, 10, 10
    }
    return y; // 10
}

function euclidGCD(i,j) {
    while(i != j) {
        if(i > j) {
            i -= j;
        } else { 
            j -= i;
        }
    }
    return i;
}

