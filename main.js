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