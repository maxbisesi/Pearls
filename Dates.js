// Problem 4 column 3
/**
 * Write functions for the following problems
 * - Given two Dates calculate the number of days between them
 * - Given a date calculate its day of the week
 * - Given a month and year produce a calendar for the month as 
 *      an array of characters.
 */

 function dateDiff(date1, date2) {
    const from = validateCreateDate(date1);
    const to = validateCreateDate(date2);
    console.log(`From ${from} to ${to}`)
 }

 // Ensure MM-DD-YYYY format
 function validateCreateDate(dateVal) {
    if( typeof dateVal === 'string') {
        const datenum = [];
        const tokens = dateVal.split('');
        if(tokens.length !== 10) { throw new Error(' Use 10 charcters.'); }

        for(let i = 0; i<10; i++) {
            let num = tokens[i];
            if(num === '-' || num === ','){
                continue;
            }
            num = parseInt(num,10);
            datenum.push(Number(num));
        }

        return datenum;
    }
    throw new Error('use strings');
 }
 

let a = process.argv[2];
let b = process.argv[3];

dateDiff(a,b);