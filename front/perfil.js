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

            let Nome = document.getElementById('nome');
            Nome.innerHTML = results.data.nome; 

            let dataCriacao = document.getElementById('criacao');
            dataCriacao.innerHTML = results.data.nome; 


            // let spantitulo = document.getElementById('nome')
            // spantitulo.innerHTML = titulo;


        } else {
            console.log("erro")
        }
    }

    getDadosUser()

  });