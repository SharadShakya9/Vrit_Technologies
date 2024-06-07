const body = document.body
const logoText = document.getElementById('logo')
const navbarElement = document.getElementById('navbar')
const lightButton = document.getElementById('img-in')

window.onload = () => {
    let themeValue = localStorage.getItem("theme") === 'true'
    toggleTheme(themeValue)
}

let themeValue = body.classList === 'true'
toggleTheme(themeValue)

changeBackground = () => {
    themeValue = !themeValue
    localStorage.setItem("theme", JSON.stringify(themeValue))

    toggleTheme(themeValue)
}

function toggleTheme(themeValue) {
    if (themeValue) {
        body.classList.add('dark-mode')
        lightButton.src = "./assets/moon.png"
    } else {
        body.classList = ""
        lightButton.src = "./assets/sun.png"
    }
}