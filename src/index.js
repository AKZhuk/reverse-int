module.exports = function reverse (n) {
    n = Math.abs( n );
    let str = String( n )
    reverseInt=Number( str.split('').reverse().join(''))
    return reverseInt
}
