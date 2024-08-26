async function voltar(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/api/login',{
        method: "POST",
        headers: { "Content-Type": "application/json;charset=UTF-8" }, 
        body: JSON.stringify(data)
    });

    const results = await response.json();

    localStorage.setItem('usuarioId', JSON.stringify(results.data.id))
        Id_user = localStorage.getItem('usuarioId');
        console.log(`Id do usuário é ${Id_user}`);

        //setando e pegando nivel do usuario
    localStorage.setItem('usuarioNivel', JSON.stringify(results.data.nivel))
        Nivel_user = localStorage.getItem('usuarioNivel');
        console.log(`Nivel do usuário é ${Nivel_user}`);

    localStorage.setItem('usuarioPontos', JSON.stringify(results.data.pontos))
        Pontos_user = localStorage.getItem('usuarioPontos');
        console.log(`Ponto do usuário são ${Nivel_user}`);

    if (Nivel_user == 1) {
        window.location.href = "../home.html"
    } else if (Nivel_user == 2 ) {
        window.location.href = "../home2.html"
    } else {
        window.location.href = "../home3.html"
    }
}
    