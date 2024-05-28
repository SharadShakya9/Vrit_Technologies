//Prototyper Inheritance

var a = [1,2,3]

splitting = () => {
    console.log('split')
}

Array.prototype.splitting = splitting

console.log(a.splitting())
console.log(splitting())