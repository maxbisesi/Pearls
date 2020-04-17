// implement Anagram program...
// Given a dictionary full of words count how many are anagrams 
// of each other.

const dic = ['Apple','Robot','Teamwork','Asparagus','Glory',
            'Whipsaw','Treasure','Tandom','Leech','subessential',
            'suitableness','nectar','recant','tanrec','Caret','carte',
            'cater','creat','creta','react','adroitley','idolatry','dilatory']; 
const sigs = [];
// Sign the dictionary
const LETTER_MAX = 100;

console.log('Sign each entry\n')
if(dic.includes(undefined) === true) { throw new Error(); } 
dic.forEach( (elm) => {
    //turn the word into an array of chars
    if( elm.length > LETTER_MAX){ throw new Error(); }
    
    let letters = elm.toLowerCase().split('');
    letters.sort();
    let word = '';
    letters.forEach((char) => { word+=char; });
    const line = `${word}-${elm}`;
    sigs.push(line);
    console.log(line);
});

console.log('Bring together words of a the same signature.\n');

squashed = {};
sigs.forEach( (elem) => {
    console.log(`===> ${elem}`);
    let tokens = elem.split('-');
    console.log(`size = ${tokens.length}`);
    let sig = tokens[0].trim();
    if( Object.keys(squashed).includes(sig) ) { squashed[sig].push(tokens[1]); }
    else { squashed[sig] = [tokens[1]]; }
});

console.log(JSON.stringify(squashed));





