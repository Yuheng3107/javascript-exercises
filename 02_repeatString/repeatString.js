const repeatString = function(string, times) {
    if (times < 0) return "ERROR";
    let answer = "";
    for (let i = 0; i < times; i++) {
        answer += string;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
