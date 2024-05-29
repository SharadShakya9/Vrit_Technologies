
//const string = 'XIX'

romanToInt = (str) => {
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
    }

    let result = 0
    for(let i = 0; i < str.length; i++) {
        let current = roman[str[i]]
        let next = roman[str[i+1]]
        

        if(next && current < next) {
            result -= current
        } else {
            result += current
        }
    }

    return result
}

const res = romanToInt('IV')
console.log(res)