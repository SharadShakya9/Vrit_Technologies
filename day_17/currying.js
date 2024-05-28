add = () => {
    let a = 1
    console.log('add', a)
    
    return function multiply() {
        console.log('multiply', a)

        return function sub() {
            console.log('sub', a)
        }
    }
}

add()()()