let word_With_Numbers = '123"№№223344'
let word_Without_Numbers = word_With_Numbers.replace(/\d+/g,'');

console.log(word_Without_Numbers)