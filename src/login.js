// function validar() {
//     const email = document.getElementById("email").value;


// }

document.addEventListener('DOMContentLoaded', function() {
    const loginFormulario = document.getElementById('form-login');

    loginFormulario.addEventListener('submit', async function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('senha').value;

        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha })
        });

        const result = await response.text();

        if (response.ok) {
            // Exibir mensagem de sucesso ou redirecionar para outra página
            alert('Login bem-sucedido');
            window.location.href = '/home';  // Exemplo de redirecionamento
        } else {
            // Exibir mensagem de erro
            alert(result);
        }
    });
});