async function login(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const data = { email, senha };
    console.log(data);

    const response = await fetch('http://localhost:3000/api/login',{
        method: "POST",
        headers: { "Content-Type": "application/json;charset=UTF-8" }, 
        body: JSON.stringify(data)
    });

    const results = await response.json();

    if(results.success) {
        alert(results.message);
        //setando e pegando id do usuario
        localStorage.setItem('usuarioId', JSON.stringify(results.data.id))
            Id_user = localStorage.getItem('usuarioId');
            console.log(`Ìd do usuário é ${Id_user}`);

        //setando e pegando nivel do usuario
        localStorage.setItem('usuarioNivel', JSON.stringify(results.data.nivel))
            Nivel_user = localStorage.getItem('usuarioNivel');
            console.log(`Nivel do usuário é ${Nivel_user}`);

    
        //window.location.href = "/front/home.html"
    } else {
        alert(results.message);
    }
}

