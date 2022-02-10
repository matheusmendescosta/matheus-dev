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



function myGet (url){
    let resquest = new XMLHttpRequest();
    resquest.open("GET", url, false);
    resquest.send();
    return resquest.responseText;
}

function main(){
    let dadosPerfil = (myGet("https://api.opendota.com/api/players/159992731"));

    let perfil = JSON.parse(dadosPerfil);

    document.getElementById("demo").innerHTML = "Nick na steam: " + perfil.profile.personaname + "<br> ultima partida: " + perfil.profile.last_login + "<br> Id Dota2: " + 
    perfil.profile.account_id + "<br>partidas ganhas: "+ perfil.profile.win;

}



main()