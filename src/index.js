module.exports = function reverse (n) {
    n = Math.abs(n);
    let result = 0;
    for(; n; n = Math.floor(n / 10)) {
        result *= 10;
        result += n % 10;
    }
    return result;
};
