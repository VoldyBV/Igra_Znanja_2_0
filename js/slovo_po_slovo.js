var FRAZA;
function Start() {
    FRAZA = Get_Phrase(Get_Random_Number(10));
    var hidden = "";
    FRAZA.split('').forEach((item) => {
        if(item == ' ') hidden += " ";
        else hidden += "_";
    })
    document.querySelector("#fraza").innerHTML = hidden;
    console.log(FRAZA)
}
function Search_For_Letter(elem){
    //disabling a button so that it can be only clicked once
    elem.disabled = true;
    elem.classList.toggle("disabled");
    elem.setAttribute("clicked", "true");
    
    //checking if selected letter is in FRAZA
    if(FRAZA.search(elem.innerHTML) > -1){
        Play_Sound("#tacno");
        var hidden = document.querySelector("#fraza").innerHTML;
        var s = "";
        FRAZA.split('').forEach((item, index) => {
            if(item == elem.innerHTML){
                s += item;
            }
            else{
                s += hidden[index];
            }
        });
        document.querySelector("#fraza").innerHTML = s;
    }
    else {
        Play_Sound("#netacno");
    }
}
function Check_Answer() {
    var answer = document.querySelector("#odgovor").value;
    if(answer == FRAZA){
        Play_Sound("#game-won");
        Game_Won();
    }
    else {
        Play_Sound("#netacno");
    }
}
function Game_Won(){
    document.querySelector("#timer").pause();
    var info = JSON.parse(sessionStorage.getItem("info"));
    var settings = new DialogSettings("alert");

    var pts = 10;
    var covered_l = document.querySelector("#fraza").innerHTML.toString().split('').filter(
        (l) => { 
            return l == '_'
        }).length;

    var bonus = document.querySelectorAll(".buttons button[clicked=false]").length;

    if(info[12] == "srpski"){
        settings.title = "Pobijedili ste";
        settings.btn_OK_Text = "OK";
        settings.message = `
            Osvojeni poeni: ${pts}<br>
            Bonus na skrivena slova: ${covered_l}<br>
            Bonus na neiskorištena slova: ${bonus}<br>
            <hr style="height: 2px" />
            UKUPNO: ${pts + bonus + covered_l}
        `;
    }
    else if(info[12] == "english"){
        settings.title = "You won";
        settings.btn_OK_Text = "OK";
        settings.message = `
            Earned points: ${pts}<br>
            Bonus points for covered letters: ${covered_l}<br>
            Bonus points for unused letters: ${bonus}<br>
            <hr style="height: 2px">
            TOTAL: ${pts + bonus + covered_l}
        `;
    }
    settings.on_OK = () => {
        history.go(-1)
    }
    info[0] = pts + bonus + covered_l;
    sessionStorage.setItem("info", JSON.stringify(info));
    BV_dialog.alert(settings);
}
function Game_Lost() {
    Play_Sound("#game-lost");
    var info = JSON.parse(sessionStorage.getItem("info"));
    var settings = {};

    if(info[12] == "srpski"){
        settings.title = "Nažalost izgubili ste.";
        settings.btn_OK_Text = "OK";
        settings.message = `
            Rješenje je: ${FRAZA}
        `;
    }
    else if(info[12] == "english"){
        settings.title = "You lost";
        settings.btn_OK_Text = "OK";
        settings.message = `
            The phrase is: ${FRAZA}
        `;
    }
    settings.on_OK = () => {
        history.go(-1)
    }
    info[0] = 0;
    sessionStorage.setItem("info", JSON.stringify(info));
    BV_dialog.alert(settings);
}