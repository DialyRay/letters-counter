let fs = require('fs');
function countLetters(file) {
    let text = fs.readFileSync(file, 'utf8').toLowerCase();
    let letterCounts = {};
    for (let char of text) {
        if (/[a-яё]/.test(char)) {
        letterCounts[char] = (letterCounts[char] || 0) + 1;
        }
    }
     let result = Object.entries(letterCounts)
  console.log(result);
}
countLetters('voyna_mir.txt');