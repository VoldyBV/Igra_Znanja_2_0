var GAME;
var CIGLA;

function Start() {
    var game_index = Get_Random_Number(1);
    document.querySelector(".zid").classList.toggle("zid-slika-" + game_index);
    GAME = Get_A_Game(game_index);
    console.log(GAME);

    var btns = document.querySelectorAll(".zid button");
    btns = Mix_Up_Array(Array.from(btns));
    btns.forEach((item, index) => {
        item.setAttribute("game-index", index);
    })
}
function Otvori_Ciglu(elem){
    CIGLA = elem;
    var settings = {};
    var opts = Mix_Up_Array(GAME.answers[+CIGLA.getAttribute("game-index")]);

    settings.title = GAME.questions[+CIGLA.getAttribute("game-index")];
    settings.options = [{}, {}, {}, {}]

    for(var i = 0;i < 4;i++){
        settings.options[i].displayValue = settings.options[i].realValue = opts[i];
    }

    settings.on_OK = (odgovor) => {
        Provjeri_Odgovor(odgovor.realValue);
    }
    BV_dialog.singleOption(settings);
}
function Provjeri_Odgovor(odgovor) {
    CIGLA.disabled = true;
    CIGLA.setAttribute("clicked", "yes");

    if(GAME.correct_answers[+CIGLA.getAttribute("game-index")] == odgovor){
        Play_Sound("#tacno");
        CIGLA.classList.toggle("zid-tacno");
    }
    else{
        Play_Sound("#netacno");
        CIGLA.classList.toggle("zid-netacno");
        var settings = {};
        var info = JSON.parse(sessionStorage.getItem("info"));
        if(info[12] == "srpski"){
            console.log(info);
            settings.title = "Pogršan odgovor";
            settings.message = `Tačan odgovor je: ${GAME.correct_answers[+CIGLA.getAttribute("game-index")]}`;
        }
        else if(info[12] == "english"){
            settings.title = "Wrong answer";
            settings.message = `Correct answer is: ${GAME.correct_answers[+CIGLA.getAttribute("game-index")]}`
        }
        BV_dialog.alert(settings);
    }
}
function Konacan_Odgovor(){
    var settings = {};
    var info = JSON.parse(sessionStorage.getItem("info"));

    if(info[12] == "srpski"){
        settings.title = "Unesite konačan odgovor";
    }
    else if(info[12] == "english") {
        settings.title = "Enter your final answer";
    }

    settings.type = "text";
    settings.on_OK = (odgovor) => {
        Provjeri_Konacan_Odgovor(odgovor);
    }

    BV_dialog.prompt(settings);
}
function Provjeri_Konacan_Odgovor(odgovor){
    if(GAME.final_answer == odgovor){
        Play_Sound("#tacno");
        Game_Won();
    }
    else {
        Play_Sound("#netacno");
    }
}
function Game_Won(){
    document.querySelector("#timer").pause();
    Play_Sound("#tacno");
    var btns = document.querySelectorAll(".zid button");
    var points = 15;
    var positive_points = document.querySelectorAll(".zid .zid-tacno").length * 2;
    var negative_points = document.querySelectorAll(".zid .zid-netacno").length * -1;
    var bonus = document.querySelectorAll(".zid [clicked=no]").length * 3;
    var settings = {};
    var info = JSON.parse(sessionStorage.getItem("info"));

    btns.forEach((item) => {
        item.style.display = "none";
    });

    if(info[12] == "srpski"){
        settings.title = "Pobijedili ste";
        settings.message = `
            Osvojeni poeni: ${points}<br>
            Bonus na srušene cigle: ${positive_points}<br>
            Antibonus na blokirane cigle: ${negative_points}<br>
            Bonus na netaknute cigle: ${bonus}<br>
            <hr><br>
            UKUPNO: ${points + positive_points + negative_points + bonus}
        `;
    }
    else if(info[12] == "english"){
        settings.title = "You won";
        settings.message = `
            Earned points: ${points}<br>
            Bonus for broken bricks: ${positive_points}<br>
            Antibonus for blocked briks: ${negative_points}<br>
            Bonus for untouched bricks: ${bonus}<br>
            <hr><br>
            TOTAL: ${points + positive_points + negative_points + bonus}
        `;
    }
    settings.on_OK = () => {history.go(-1)}
    info[3] = points + positive_points + negative_points + bonus;
    sessionStorage.setItem("info", JSON.stringify(info));

    setTimeout(() => {
        Play_Sound("#game-won");
        BV_dialog.alert(settings);
    }, 4000);
}
function Game_Lost() {
    document.querySelector("#timer").pause();
    Play_Sound("#netacno");
    var btns = document.querySelectorAll(".zid button");
    var positive_points = document.querySelectorAll(".zid .zid-tacno").length * 2;
    var negative_points = document.querySelectorAll(".zid .zid-netacno").length * -1;
    var settings = {};
    var info = JSON.parse(sessionStorage.getItem("info"));

    btns.forEach((item) => {
        item.style.display = "none";
    });

    if(info[12] == "srpski"){
        settings.title = "Izgubili ste ste";
        settings.message = `
            Konacno rjesenje je: ${GAME.final_answer}<br>
            Bonus na srušene cigle: ${positive_points}<br>
            Antibonus na blokirane cigle: ${negative_points}<br>
            <hr><br>
            UKUPNO: ${positive_points + negative_points}
        `;
    }
    else if(info[12] == "english"){
        settings.title = "You lost";
        settings.message = `
            Filan answer is: ${GAME.final_answer}<br>
            Bonus for broken bricks: ${positive_points}<br>
            Antibonus for blocked briks: ${negative_points}<br>
            <hr><br>
            TOTAL: ${positive_points + negative_points}
        `;
    }
    settings.on_OK = () => {history.go(-1)}
    info[3] = positive_points + negative_points;
    sessionStorage.setItem("info", JSON.stringify(info));

    setTimeout(() => {
        Play_Sound("#game-lost");
        BV_dialog.alert(settings);
    }, 3000);
}
