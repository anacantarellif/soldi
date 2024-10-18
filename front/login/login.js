async function login(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const data = { email, senha };
    console.log(data);

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=UTF-8" }, 
            body: JSON.stringify(data)
        });

        const results = await response.json();

        if (results.success) {
            alert(results.message);

            // Armazenar dados no localStorage
            localStorage.setItem('usuarioId', results.data.id);
            localStorage.setItem('usuarioNivel', results.data.nivel);
            localStorage.setItem('usuarioPontos', results.data.pontos);

            // Recuperar dados do localStorage
            const Id_user = localStorage.getItem('usuarioId');
            const Nivel_user = parseInt(localStorage.getItem('usuarioNivel'));
            const Pontos_user = parseInt(localStorage.getItem('usuarioPontos'));

            console.log(`Id do usuário: ${Id_user}`);
            console.log(`Nível do usuário: ${Nivel_user}`);
            console.log(`Pontos do usuário: ${Pontos_user}`);

            // Redirecionar para a página correta com base no nível do usuário
            if (Nivel_user === 1) {
                window.location.href = "../home.html";
            } else if (Nivel_user === 2) {
                window.location.href = "../home2.html";
            } else {
                window.location.href = "../home3.html";
            }

        } else {
            alert(results.message);
        }
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        alert('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    }
}


