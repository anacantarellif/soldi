document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

    async function getDadosUser () {

        const Id_User = localStorage.getItem('usuarioId');
 
        const response = await fetch("http://localhost:3000/api/user/dadosUser/" + Id_User, 
        {
            method: "GET",
            headers: { "Content-Type": "application/json;charset=UTF-8" }
        })

        const results = await response.json();

        if (results.success) {
            console.log(results)

            const pontos = localStorage.getItem("nome")
            console.log(nome)

            let spanPontos = document.getElementById('pontos')
            spanPontos.innerHTML = pontos; 

            let spantitulo = document.getElementById('nome')
            spantitulo.innerHTML = titulo;


        } else {
            console.log("erro")
        }
    }

    getDadosUser()

  });