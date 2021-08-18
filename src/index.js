module.exports = function reverse (n) {
    return Math.abs(Math.sign(n) * parseInt(n.toString().split('').reverse().join('')));
}
