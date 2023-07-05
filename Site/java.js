var menu = document.querySelector("ul.mobile-menu")
var si = document.querySelector("h1.ti")
var ham = document.querySelector("div.menu")

function clicar() {
        if (menu.style.display == "none" && si.style.display == "block" &&  ham.style.display == "block" ) {
            menu.style.display = "block"
            si.style.display = "none"
            ham.style.display = "none"


        }
        
        else {
            menu.style.display = "none"
            si.style.display = "block"
            ham.style.display = "block"}
}


