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
    async function getDados () {
    
        const pontos = localStorage.getItem("usuarioPontos")
        console.log(pontos)

        div = document.getElementById('pontos')
        div.textContent = ''
        div.textContent = content.pontos
    }
    getDados()
  });
