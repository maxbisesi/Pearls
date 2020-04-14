// Write an algorithm to find the GCD of A and B

// Use argv here to recieve parameters from the command line 
// first param argv[0] is the full path of the node command
// second param argv[1] is the path of the file being executed
/*
process.argv.forEach((val, index) => {
    console.log(`in: ${index} -> ${val}`);
});*/

let a = process.argv[2];
let b = process.argv[3];

// GCD(20 30) == 10
// 
console.log(`GCD of ${a} and ${b} is:`);

export default function gcd(x,y) {
    let r;
    while((a % b) > 0) {
        r = a % b; // r = 20, 10, 10
        a = b; // a = 30, 20, 10
        b = r; // b = 20, 10, 10
    }
    return b; // 10
}


const g = gcd(a,b);
console.log(`- > ${g}`);
