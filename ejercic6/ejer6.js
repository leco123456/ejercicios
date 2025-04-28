const añadirelemnt = function(){
    const list = document.getElementById("lista1")
    const agregar = document.createElement("li")
    agregar.innerText = "Elementos de la lista"
    list.appendChild(agregar)

}

const main = function(){
    const a = document.getElementById("but")
    a.addEventListener("click",añadirelemnt)

}

main()