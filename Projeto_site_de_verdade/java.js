var menu = document.getElementById("menu")
var ti = document.getElementById("titulo")
var boas = document.getElementById("boas-vindas")

function clicou() {
    if (menu.style.display == "none" && ti.style.display == "block") {
        menu.style.display = "block"
        ti.style.display = "none"
    }
    else {
        menu.style.display = "none"
        ti.style.display = "block"
    }
}

function carregar() {
   var b = document.createElement("h1")
   b.textContent = `Bem vindo!`
   boas.appendChild(b)
   document.body.style.background = 'rgba(0, 0, 0, 0.274)'
}

function clicar() {
    boas.style.display = 'none'
    document.body.style.background = 'white'
}