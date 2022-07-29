var GAME;
var POSITIVE_POINTS = 0;
var NEGATIVE_POINTS = 0;
//next_flag is index for flag index
//flag index is number that represents flag name in files
var NEXT_FLAG = 0;
function Start(){
    GAME = Get_A_Game();
    Zadaj_Zastavu();
}
function Zadaj_Zastavu(){
    var img = document.querySelector("#zastava img");
    img.src = `../src/imgs/put_oko_svijeta/${GAME.flag_index[NEXT_FLAG]}.png`;
}
function Sledeća_Zastava(){
    NEXT_FLAG++;
    if(NEXT_FLAG > 4) {
        document.querySelector("#timer").pause();
        End();
    }
    else {
        Zadaj_Zastavu();
    }
}
function Check_Flag(){
    var flag_name = document.querySelector("#odgovor").value;
    var settings = new DialogSettings("alert");
    var info = JSON.parse(sessionStorage.getItem("info"));

    if(GAME.flag_names.includes(flag_name)) {
        Play_Sound("#tacno");
        POSITIVE_POINTS += 10;
        
        if(info[12] == "srpski"){
            settings.title = "Tačan odgovor";
            settings.message = "Dobili ste 10 poena.";
        }
        else if(info[12] == "english") {
            settings.title = "Correct answer";
            settings.message = "You earned 10 points.";
        }
    }
    else {
        Play_Sound("#netacno");
        NEGATIVE_POINTS += 5;
        
        if(info[12] == "srpski"){
            settings.title = "Netačan odgovor";
            settings.message = `
                Izgubili ste 5 poena.<br>
                Tačan odgovor je: ${GAME.flag_names[NEXT_FLAG]}
            `
        }
        else if(info[12] == "english") {
            settings.title = "Wrong answer";
            settings.message = `
                You lost 5 points.<br>
                Correct answer is: ${GAME.flag_names[NEXT_FLAG]}
            `
        }
    }

    document.querySelector("#odgovor").value = "";
    settings.on_OK = Sledeća_Zastava;

    BV_dialog.alert(settings);
}
function Next() {
    var settings = new DialogSettings("alert");
    var info = JSON.parse(sessionStorage.getItem("info"));
        
    if(info[12] == "srpski"){
        settings.title = "";
        settings.message = `Tačan odgovor je: ${GAME.flag_names[NEXT_FLAG]}`
    }
    else if(info[12] == "english") {
        settings.title = "";
        settings.message = `Correct answer is: ${GAME.flag_names[NEXT_FLAG]}`
    }

    document.querySelector("#odgovor").value = "";
    settings.on_OK = Sledeća_Zastava;

    BV_dialog.alert(settings);
}
function End(){
    var settings = new DialogSettings("alert");
    var info = JSON.parse(sessionStorage.getItem("info"));

    if(POSITIVE_POINTS - NEGATIVE_POINTS > 0){
        Play_Sound("#game-won");
        if(info[12] == "srpski"){
            settings.title = "Pobjedili ste";
            settings.message = `
                Osvojeni pozitivni poeni: ${POSITIVE_POINTS}<br>
                Osvojeni negativni poeni: ${NEGATIVE_POINTS}<br>
                <hr>
                UKUPNO: ${POSITIVE_POINTS-NEGATIVE_POINTS}
            `;
        }
        else if(info[12] == "english"){
            settings.title = "You won";
            settings.message = `
                Earned positive points: ${POSITIVE_POINTS}<br>
                Earned negative points: ${NEGATIVE_POINTS}<br>
                <hr>
                TOTAL: ${POSITIVE_POINTS-NEGATIVE_POINTS}
            `;
        }
    }
    else {
        Play_Sound("#game-lost");
        if(info[12] == "srpski"){
            settings.title = "Izgubili ste";
            settings.message = `
                Osvojeni pozitivni poeni: ${POSITIVE_POINTS}<br>
                Osvojeni negativni poeni: ${NEGATIVE_POINTS}<br>
                <hr>
                UKUPNO: ${POSITIVE_POINTS-NEGATIVE_POINTS}
            `;
        }
        else if(info[12] == "english"){
            settings.title = "You lost";
            settings.message = `
                Earned positive points: ${POSITIVE_POINTS}<br>
                Earned negative points: ${NEGATIVE_POINTS}<br>
                <hr>
                TOTAL: ${POSITIVE_POINTS-NEGATIVE_POINTS}
            `;
        }
    }

    info[7] = POSITIVE_POINTS - NEGATIVE_POINTS;
    sessionStorage.setItem("info", JSON.stringify(info)); 

    settings.on_OK = () => { history.go(-1); }

    BV_dialog.alert(settings);
}
