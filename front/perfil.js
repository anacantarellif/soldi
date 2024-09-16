document.addEventListener("DOMContentLoaded", (event) => {
    async function getDados () {
    
        const pontos = localStorage.getItem("usuarioPontos")
        console.log(pontos)

        let spanPontos = document.getElementById('pontos')
        spanPontos.innerHTML = pontos; 
    }
    getDados()
  });