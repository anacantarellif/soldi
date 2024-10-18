async function exibirRanking() {
    const response = await fetch('http://localhost:3000/api/user/ranking');
    const rankingData = await response.json();

    if (rankingData.success) {

        const idUsuarioLogado = localStorage.getItem('usuarioId');

        const rankingContainer = document.getElementById('ranking-container');
        rankingContainer.innerHTML = rankingData.data.map((user, index) => `
            <div class="ranking-item ${user.id == idUsuarioLogado ? 'destaque' : ''}">
                <span>#${index + 1}</span>
                <span>${user.nome}</span>
                <span>${user.pontos} pontos</span>
            </div>
        `).join('');
    } else {
        console.error('Erro ao carregar o ranking:', rankingData.message);
    }
}



document.addEventListener('DOMContentLoaded', exibirRanking);