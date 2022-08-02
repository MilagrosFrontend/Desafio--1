// variables del contenedor 1,2,3
let contenedor1 = document.getElementById("blanco1")
let contenedor2 = document.getElementById("gris2")
let contenedor3 = document.getElementById("negro3")

// funciones color (colors), volver(back), esconder(hide)
function colors() {
    contenedor1.style="background-color:black";
    contenedor3.style="background-color:white";
}
function back() {
    contenedor1.style="background-color:white";
    contenedor3.style="background-color:black";
}
function hide() {
    contenedor2.classList.toggle("apareceDesaparece")
}