/*function* generatorFunction() {
    yield "First"
    yield sum(1,2)
    yield "Third"
}

sum = (a, b) => {
    return a + b
}

var gf = generatorFunction()
first = () => {
console.log(gf.next().value)
}
console.log(gf.next())
console.log(gf.next())
console.log(gf.next())

first()*/

function* generatorFunction() {
    let count = 1

    while(true) {
        yield count++
    }
}

var gf = generatorFunction()

const counterElement = document.getElementById('counter')
const buttonElement = document.getElementById('count')

buttonElement.addEventListener("click", () => {
    counterElement.textContent = gf.next().value
})