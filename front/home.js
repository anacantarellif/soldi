// async function getPontos() {
//     const Id_User = localStorage.getItem('id');
 
//     const response = await fetch('http://localhost:3000/api/itens/'+ Id_User, {
//         method: "GET",
//         headers: {
//             "Content-Type":"application/json"
//         }
//     })
 
//     const results = await response.json();
//     console.log('ID do usuário: ', Id_User)
//     console.log(results)
//     if(results.success) {
//         let todosPontos = results.data;
 
//         let div = document.getElementById('pontos');
 
//         todosPontos.map(ponto => {
        
//             textContent = ponto.pontos;
   
//             div.appendChild(textContent);
 
//         });
//     }
// }
 
// getPontos();


  
document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

    async function getDados () {
    
        const pontos = localStorage.getItem("usuarioPontos")
        console.log(pontos)

        let spanPontos = document.getElementById('pontos')
        spanPontos.innerHTML = pontos; 
    }
    getDados()

    async function nextLevel(event) {
        event.preventDefault();

        let id = localStorage.getItem('usuarioId');
        let dataDados = {id}
    
        const responseDados = await fetch(`http://localhost:3000/api/user/dados`, {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=UTF-8" }, 
            body: JSON.stringify(dataDados)
        });
    
        const resultsDados = await responseDados.json();
        console.log(resultsDados)
        
        //pegar os dados do localstorage
        let Id_user = localStorage.getItem('usuarioId');
        let Nivel_user = resultsDados.data.nivel;
    
        let data = {Id_user, Nivel_user,}
        console.log(data)
        
        if (Nivel_user == 1) {
            window.location.href = "home.html"
        } else if (Nivel_user == 2 ) {
            window.location.href = "home2.html"
        } else {
            window.location.href = "home3.html"
        }
    
    }
    nextLevel()

  });

