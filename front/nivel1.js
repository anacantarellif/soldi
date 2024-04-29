const propgresso = document.querySelector(".barra div")
const input = document.querySelector("input")

const alterarProgresso = () => {
    propgresso.setAttribute("style", "width" + input.value + "%")
}