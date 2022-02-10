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

    div.innerHTML = `<h3>ID da partida <br>${parida.match_id}</h3>
    <h3>Kill's <br>${parida.kills}</h3> 
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