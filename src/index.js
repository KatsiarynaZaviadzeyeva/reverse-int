module.exports = function reverse (n) {
//function reverse(n) {
    let positiveNumber = Math.abs(n)
    console.log(positiveNumber);
    let string = String(positiveNumber);
    console.log(string);
    return Number(string.split('').reverse().join(''));
}
//console.log(reverse(-100));

