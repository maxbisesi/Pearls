/**
 * This problem deals with a small part of the problem of hyphenating english words 
 * that end in c. The following list of rules describes some legal hyphenations of 'c'
 */

 const hyphs = ['et-ic','al-is-tic','s-tic','p-tic','-lyt-ic','ot-ic','an-tic','n-tic',
                'c-tic','at-ic','h-nic','n-ic','m-ic','l-lic','b-lic','-clic','l-ic','h-ic','f-ic',
                'd-ic','-bic','a-ic','-mac','i-ac'];
const nohyphs = [];

/**
 * How would you represent such rules in a function if given a word and returning a suffix
 * 
 * The rules must be in this order. Thus 'eth-nic' is caught by the rule 'h-nic' 
 *  and clinic which falls through to 'n-ic' 
 */

 // for example cryptic would be caught by p-tic so cryp-tic

 //first create the rules without the hypens
 hyphs.forEach( (wor) => {
    nohyphs.push(wor.replace('-',''));
 });

 if(nohyphs.length !== hyphs.length){ throw new Error(''); }

 function hyphenate(word) {
    for(let i = 0; i<hyphs.length; i++) {
        // Get the rule that we'll check the word
        // against without the hyphen
        const rule = nohyphs[i];
        // Get its length
        let len = rule.length;
        // Make it negative, this
        // will get the last x letters from
        // our word to compare to to the rule
        len = Math.abs(len) * -1;
        const last = word.slice(len);
        // If the last few letters of that word
        // are the rule then return the hyphenated rule
        if(last === rule) { return hyphs[i]; } 
    }
    return 'No matches';
 }

 let word = process.argv[2];
 console.log(`Hypenation rule matching: ${word}`);
 console.log(` -> ${hyphenate(word)}`);