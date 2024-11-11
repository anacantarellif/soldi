async function nextLevel() {

    let id = localStorage.getItem('usuarioId');
    let dataDados = { id }

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

    let data = { Id_user, Nivel_user }
    console.log(data)

    if (Nivel_user == 1) {
        window.location.href = "../home.html"
    } else if (Nivel_user == 2) {
        window.location.href = "../home2.html"
    } else {
        window.location.href = "../home3.html"
    }


}
