async function getProduct() {
    var data = await fetch('https://dummyjson.com/products')

    return data.json()
}

async function loadJSON() {
    var result = await getProduct()
    console.log(result)
}

loadJSON()