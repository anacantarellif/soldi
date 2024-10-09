// Função para buscar dados da API para a pontuação e informações do usuário
async function fetchUserData() {
    try {
        const response = await fetch('http://localhost:3000/user/ranking/'); // URL do endpoint que retorna a lista de usuários
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar os dados do usuário:', error);
    }
}

// Função para construir e exibir o ranking dos usuários
async function createRanking() {
    const users = await fetchUserData();
    if (!users) {
        console.error('Erro ao carregar dados do ranking');
        return;
    }

    const sortedUsers = users.sort((a, b) => b.points - a.points);
    let rankingHTML = '<h2>Ranking</h2><ol>';
    sortedUsers.forEach((user, index) => {
        rankingHTML += `<li>${index + 1}. ${user.name} - ${user.points} pontos</li>`;
    });
    rankingHTML += '</ol>';

    document.getElementById('ranking').innerHTML = rankingHTML;
}

// Função principal para carregar e exibir o ranking ao carregar a página
async function loadRanking() {
    await createRanking();
}

// Chama a função quando a página é carregada
window.onload = loadRanking;

