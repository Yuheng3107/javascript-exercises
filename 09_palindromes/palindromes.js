const palindromes = function (data) {

    data = data.trim();
    let regex = /[0-9a-zA-Z]+/g;
    let arr = data.match(regex);
    word = arr.reduce((word,letter) => word+letter, "");
    word = word.toLowerCase();
    console.log(word);
    for (let i = 0; i < word.length/2; i++) {
        if (word[i] != word[word.length - i - 1]) return false;
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
