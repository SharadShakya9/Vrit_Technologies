function callBackFunction() {
    console.log('CBF')
}

function higherOrderFunction(func) {
    console.log('HOF')
    return func
}

higherOrderFunction(callBackFunction())