list = [1,2,3]

const letters = new Set(list)

letters.add(4)

console.log([...letters])

letters.delete(4)

console.log([...letters])