function Go_FullScreen(lang) {
    var settings = {};
    if(lang == "srpski"){
        settings.title = "Cijeli ekran";
        settings.message = "Kliknite OK kako biste prešli u režim cijelog ekrana.";
    }
    else if(lang == "english"){
        settings.title = "FullScreen";
        settings.message = "Click OK to open game in fullscreen mode.";
    }

    settings.on_OK = () => { window.top.document.body.requestFullscreen(); };
    BV_dialog.alert(settings);
}
function Open_Menu(){
    document.getElementById("menu").style.display = "flex";
    document.getElementById("timer").pause();
}
function Get_Random_Number(limit){
    return Math.floor(Math.random() * limit) + 1;
}
function Mix_Up_Array(array) {
    var new_array = [];

    for(var i = 0, l = array.length; i < l; i++){
        var index = Get_Random_Number(array.length) - 1;
        new_array.push(array[index]);
        array = array.slice(0, index).concat(array.slice(index+1, array.length));
    }

    return new_array;
}
function Close_Menu(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("timer").play();
}
function Open_Help(){
    document.getElementById("help").open();
}
function Open_Info(){
    document.getElementById("info").open();
}
function Lang_Settings(href){
    var dugmici = ["Help", "Info", "Turn sounds on/off", "Quit"];
    var info = JSON.parse(sessionStorage.getItem("info"))
    if(info[12] == "english"){
        var btns = document.querySelectorAll(".menu .menu-content button");
        var help = document.querySelector("#help");
        var informacije = document.querySelector("#info");

        btns.forEach((item, index) => { item.innerHTML = dugmici[index] });
        document.querySelector(".txt").innerHTML = "PAUSED";
        help.title = "Help";
        help.querySelector("#help-srpski").style.display = "none";
        help.querySelector("#help-english").style.display = "block";
        informacije.title = "Informations";
        informacije.querySelector("#info-srpski").style.display = "none";
        informacije.querySelector("#info-english").style.display = "block";
    }
    if(href != ""){
        var game = document.createElement("script");
        game.src = href;
        game.addEventListener("load", () => {console.log("success");});
        document.querySelector("#skripte").appendChild(game);
    }
}
function Play_Sound (soundID) {
    if(JSON.parse(sessionStorage.getItem("sounds_allowed"))){
        document.querySelector(soundID).play();
    }
}
function Quit_The_Game(ev, index){
    ev.stopPropagation();
    var settings = {};
    var info = JSON.parse(sessionStorage.getItem("info"));

    if(info[12] == "srpski"){
        settings.title = "Da li želite odustati od ige?";
        settings.btn_OK_Text = "Da";
        settings.btn_Cancel_Text = "Ne";
        settings.message = "Ukoliko odustanete od igre nećete dobiti poene.";
    }
    else if(info[12] == "english"){
        settings.title = "Do you want to quit the game?";
        settings.btn_OK_Text = "Yes";
        settings.btn_Cancel_Text = "No";
        settings.message = "If you quit the game you wont get any points.";
    }
    settings.on_OK = (params) => {
        var info = JSON.parse(sessionStorage.getItem("info"));
        info[params] = 0;
        sessionStorage.setItem("info", JSON.stringify(info));
        history.go(-1)
    }
    settings.on_Cancel = () => {
        document.querySelector("#timer").play();
    }
    settings.on_OK_params = index;
    Close_Menu();
    document.querySelector("#timer").pause();
    BV_dialog.confirm(settings);
}
function Turn_Sounds_On_Of(){
    var bool = JSON.parse(sessionStorage.getItem("sounds_allowed"));
    sessionStorage.setItem("sounds_allowed", !bool);
}