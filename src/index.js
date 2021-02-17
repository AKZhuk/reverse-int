module.exports = function reverse(n) {
    n = Math.abs(n);
    let str = String(n);
    return Number(str.split("").reverse().join(""));
};
