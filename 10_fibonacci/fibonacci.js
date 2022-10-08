let memo = {};

const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (memo[n]) return memo[n];
    else {
        memo[n] = fibonacci(n-1) + fibonacci(n-2);
        return memo[n];
    }
};

// Do not edit below this line
module.exports = fibonacci;
