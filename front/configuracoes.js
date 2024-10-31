document.addEventListener("DOMContentLoaded", async () => {
    const Id_User = localStorage.getItem('usuarioId');

    async function getDadosUser() {
        try {
            const response = await fetch("http://localhost:3000/api/user/dadosUser/" + Id_User, {
                method: "GET",
                headers: { "Content-Type": "application/json;charset=UTF-8" }
            });

            const results = await response.json();

            let data = new Date(results.data.nascimento).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });

            if (results.success) {
                // Preenche os campos com os dados do banco de dados
                document.getElementById('nome').value = results.data.nome;
                document.getElementById('sobrenome').value = results.data.sobrenome;
                document.getElementById('nascimento').value = data;
                document.getElementById('celular').value = results.data.celular;
                document.getElementById('email').value = results.data.email;
                document.getElementById('senha').value = results.data.senha;
            } else {
                console.error("Erro ao carregar os dados");
            }
        } catch (error) {
            console.error("Erro na requisição", error);
        }
    }

    // Chama a função para carregar os dados
    getDadosUser();

    // Atualiza os dados ao clicar em "Salvar"
    document.getElementById('salvar').addEventListener('click', async () => {
        const updatedData = {
            nome: document.getElementById('nome').value,
            sobrenome: document.getElementById('sobrenome').value,
            nascimento: document.getElementById('nascimento').value,
            celular: document.getElementById('celular').value,
            email: document.getElementById('email').value,
            senha: document.getElementById('senha').value
        };

        try {
            const response = await fetch("http://localhost:3000/api/user/updateUser/" + Id_User, {
                method: "PUT",
                headers: { "Content-Type": "application/json;charset=UTF-8" },
                body: JSON.stringify(updatedData)
            });

            const results = await response.json();

            if (results.success) {
                alert("Dados atualizados com sucesso!");
            } else {
                console.error("Erro ao atualizar os dados");
            }
        } catch (error) {
            console.error("Erro na requisição", error);
        }
    });
});
