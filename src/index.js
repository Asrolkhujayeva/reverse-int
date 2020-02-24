module.exports = function reverse (n) {
    let str;

    str = String(Math.abs(n)).split('').reverse().join('')
    return str;
}
