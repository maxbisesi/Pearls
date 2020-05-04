let m = state.cards.length;
let i,t;
// While there remains elements to shuffle
while(m > 0) {
    // pick a remaining element
    i = Math.floor(Math.random * m--);
    // Swap with current element
    t = state.cards[m];
    state.cards[m] = state.cards[i];
    state.cards[i] = t;
}