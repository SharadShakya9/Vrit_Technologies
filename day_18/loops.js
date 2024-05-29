const person = [{ name: "John", age: 25 }, { name: "Hari", age: 16 }]

// const b = person.map((item) => {
//     item.salary = 1000
//     return item
// })

// console.log('b', b)

// const b = person.forEach((e) => {
//     return e.name
// });

// console.log('b', b)

const cars = ["BMW", "Volvo", "Mini"]
const numbers = [1, 2, 3]
var text = 0

for (const i of numbers) {
    text += i
}

console.log(text)