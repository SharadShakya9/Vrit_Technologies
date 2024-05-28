/*var a = [1, 2, 3, 4,]

var b = [...a, 5, 6]

var c = [...a]

console.log(a)
console.log(...a)
console.log(b)
console.log(c)*/

var a = [1,2,3,4,4,5,6,5,6,7,7]

var unique = [...new Set(a)]
console.log(unique)