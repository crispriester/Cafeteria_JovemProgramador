document.getElementById("2").style.opacity = "0.7"

function escondePromocao() {
    document.getElementById("promocoes").style.display = "none"
    document.getElementById("melhores-cardapio").style.display = "flex"
    document.getElementById("2").style.opacity = "0.7"
    document.getElementById("1").style.backgroundColor = "burlywood"
    document.getElementById("1").style.opacity = "1"
}
document.getElementById("1").addEventListener("click", escondePromocao)

function melhoresCardapio() {
    document.getElementById("melhores-cardapio").style.display = "none"
    document.getElementById("promocoes").style.display = "flex"
    document.getElementById("1").style.opacity = "0.7"
    document.getElementById("2").style.backgroundColor = "burlywood"
    document.getElementById("2").style.opacity = "1"
}
document.getElementById("2").addEventListener("click", melhoresCardapio)
