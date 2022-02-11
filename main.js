async function fetchPartida(url) {
    const partidasResponse = await fetch(url);
    const partidasJSON = await partidasResponse.json();
    const numerosGrid = document.querySelector('.numeros-grid');

    partidasJSON.forEach(parida => {
       const divPartida = criarPartida(parida);
       numerosGrid.appendChild(divPartida);
    });
}

function criarPartida(parida){
    console.log(parida);
    
    const div = document.createElement('div');
    div.classList.add('numero-partida');

    div.innerHTML = 
    `
    <table class="table table-striped table-hover">
    <thead>
        <tr>
            <th scope="col">Id partida</th>
            <th scope="col">K</th>
            <th scope="col">D</th>
            <th scope="col">A</th>
            <th scope="col">XP por Minuto</th>
            <th scope="col">Ouro por Minuto</th>
            <th scope="col">Dano em Heroi</th>
            <th scope="col">Dano em torre</th> 
        </tr>
    <thead>

    <tbody>
        <tr>
            <td>${parida.match_id}</td>
            <td colspan="1">${parida.kills}</td>
            <td colspan="1">${parida.deaths}</td>
            <td colspan="1">${parida.assists}</td>
            <td>${parida.xp_per_min}</td>
            <td>${parida.gold_per_min}</td>
            <td>${parida.hero_damage}</td>
            <td>${parida.tower_damage}</td>
        </tr>
    </tbody>
    </table>
    `;

    return div;
}
fetchPartida('https://api.opendota.com/api/players/159992731/recentMatches');

async function fetchPerfil(url){
    const perfilResponse = await fetch(url);
    const perfilJSON = perfilResponse.json();
    const perfilGrid = document.querySelector('.meu-perfil');

    perfilJSON.forEach(perfil => {
        const divPerfil = criarPerfil(perfil);
        perfilGrid = appendChild(divPerfil);
    });

}

function criarPerfil(perfil){
    const div = document.createElement('div');
    div.classList.add('meu-perfil');

    console.log(perfil);
}

fetchPerfil('https://api.opendota.com/api/players/159992731');