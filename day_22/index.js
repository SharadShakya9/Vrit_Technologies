const body = document.body
const logoText = document.getElementById('logo')
const navbarElement = document.getElementById('navbar')

window.onload = () => {
    let themeValue = localStorage.getItem("theme") === true
    applyTheme(themeValue)
}

let themeValue = localStorage.getItem('theme') === true

changeBackground = () => {
    themeValue = !themeValue
    localStorage.setItem("theme", Boolean(themeValue))
    applyTheme(themeValue)
}

applyTheme = (themeValue) => {
    if (themeValue) {
        body.style.background = "#fff"
        body.style.color = "#000"
        logoText.style.color = "#000"
        navbarElement.style.borderBottom = "2px solid black"
    } else {
        body.style.background = "#111"
        body.style.color = "#fff"
        logoText.style.color = "#fff"
        navbarElement.style.borderBottom = "2px solid white"
    }
}

