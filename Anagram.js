// implement Anagram program...
// Given a dictionary full of words count how many are anagrams 
// of each other.

const dic = ['Apple','Robot','Teamwork','Asparagus','Glory',
            'CoffeeBean','Mexico','Notorize','Post','Zuchini'
            ,'Whipsaw','Treasure','Tandom','Leech']; 
const sigs = [];
// Sign the dictionary
const LETTER_MAX = 100;
if(dic.includes(undefined) === true) { throw new Error(); } 
dic.forEach( (elm) => {
    //turn the word into an array of chars
    if( elm.length > LETTER_MAX){ throw new Error(); }
    
    let word = elm.toLowerCase().split('');
    word.sort();
    const line = `${word.toString()} - ${elm}`;
    sigs.push(line);
    console.log(line);
});

squashed = {};

sigs.forEach( (word) => {
    let sig = word.split('-');
    sig = sig[0].trim();
    console.log(sig); 
    if( Object.keys(squashed).includes(sig) ) { squashed[sig].push(sig[1]); }
    else { squashed[sig] = [sig[1]]; }
});

console.log(JSON.stringify(squashed));





