var GAME;
var COL_RES;
var LAST_ENTERED_VALUE_COL_A = "";
var LAST_ENTERED_VALUE_COL_B = "";
var LAST_ENTERED_VALUE_COL_C = "";
var LAST_ENTERED_VALUE_COL_D = "";
var LAST_ENTERED_VALUE_COL_Final = "";
var bonus = 40;
var pts = 0;
var final_pts = 0;
var END_DIALOG_PARAM = "";

function Start() {
    GAME = Get_A_Game(Get_Random_Number(2));
}
function Open_Field(elem){
    var col = elem.getAttribute("tbl-index").split('-')[0];
    var cell = elem.getAttribute("tbl-index").split("-")[1];

    elem.disabled = true;
    elem.classList.toggle("opened-field");
    elem.innerHTML = GAME[col][cell];
    bonus--;
}
function Daj_Rjesenje_Kolone(elem){
    COL_RES = elem.getAttribute("tbl-index").split('-')[0];
    var info = JSON.parse(sessionStorage.getItem("info"));
    var settings = new DialogSettings("prompt");

    if(info[12] == "srpski"){
        settings.title = "Rješenje kolone"
        settings.message = `Unesite rješenje kolone ${COL_RES}:`;
    }
    else if(info[12] == "english"){
        settings.title = "Answer of column"
        settings.message = `Enter the answer of column ${COL_RES}:`;
    }

    switch(COL_RES){
        case 'A': settings.value = LAST_ENTERED_VALUE_COL_A; break;
        case 'B': settings.value = LAST_ENTERED_VALUE_COL_B; break;
        case 'C': settings.value = LAST_ENTERED_VALUE_COL_C; break;
        case 'D': settings.value = LAST_ENTERED_VALUE_COL_D; break;
        default: break;
    }

    settings.type = "text";
    settings.upper_lower = "upper";
    settings.on_OK = (info) => {
        switch(COL_RES){
            case 'A': LAST_ENTERED_VALUE_COL_A = info; break;
            case 'B': LAST_ENTERED_VALUE_COL_B = info; break;
            case 'C': LAST_ENTERED_VALUE_COL_C = info; break;
            case 'D': LAST_ENTERED_VALUE_COL_D = info; break;
            default: break;
        }
        Provjeri_Rjesenje_Kolone(info.toUpperCase());
    }

    BV_dialog.prompt(settings);
}
function Provjeri_Rjesenje_Kolone(rjesenje){
    if(rjesenje == GAME[COL_RES][4]){
        Play_Sound("#tacno");

        bonus -= 6;
        pts += 5;
        var selector = `button[col=${COL_RES}]`;
        var fields = document.querySelectorAll(selector);

        fields.forEach((item, index) => {
            item.innerHTML = GAME[COL_RES][index];
            item.disabled = true;
            item.classList.toggle("asocijacije-tacno");
        });
    }
    else{
        Play_Sound("#netacno")
    }
}
function Daj_Rjesenje_Asocijacije(){
    var info = JSON.parse(sessionStorage.getItem("info"));
    var settings = new DialogSettings("prompt");

    if(info[12] == "srpski"){
        settings.title = "Konačno rješenje"
        settings.message = `Unesite konačno rješenje:`;
    }
    else if(info[12] == "english"){
        settings.title = "Final answer"
        settings.message = `Enter the final answer:`;
    }

    settings.type = "text";
    settings.upper_lower = "upper";
    settings.value = LAST_ENTERED_VALUE_COL_Final;
    settings.on_OK = (info) => {
        LAST_ENTERED_VALUE_COL_Final = info;
        Provjeri_Konacno_Rjesenje(info.toUpperCase());
    }
    BV_dialog.prompt(settings)
}
function Provjeri_Konacno_Rjesenje(rjesenje){
    if(GAME.final_answer == rjesenje){
        var final_answer_container = document.querySelector("#final_answer_container button");
        var btns = document.querySelectorAll("button[tbl-index]");

        final_answer_container.disabled = true;
        final_answer_container.innerHTML = GAME.final_answer;
        final_answer_container.classList.toggle("asocijacije-tacno");

        btns.forEach((item) => {
            var col = item.getAttribute("tbl-index").split('-')[0];
            var cell = +item.getAttribute("tbl-index").split('-')[1];
            if(!item.classList.contains("asocijacije-tacno")){
                item.classList.toggle("asocijacije-tacno");
                item.disabled = true;
                item.innerHTML = GAME[col][cell];
            }
        });
        final_pts = 15;
        Game_Won();
    }
    else {
        Play_Sound("#netacno");
    }
};
function Game_Won(){
    document.querySelector("#timer").pause();
    Play_Sound("#game-won");
    Activate_End_Dialog("game-won");
}
function Game_Lost(){
    document.querySelector("#timer").pause();
    bonus -= (4 - pts/5) * 10;
    if(bonus < 0){
        bonus = 0;
    }
    var btns = document.querySelectorAll("button[tbl-index]");
    var fa = document.querySelector("button[final-answer-btn]");

    fa.innerHTML = GAME.final_answer;
    fa.disabled = true;
    fa.classList.toggle("asocijacije-netacno");

    btns.forEach((item) => {
        var col = item.getAttribute("tbl-index").split('-')[0];
        var cell = +item.getAttribute("tbl-index").split('-')[1];

        item.classList.toggle("asocijacije-netacno");
        item.disabled = true;
        item.innerHTML = GAME[col][cell];
    });
    //removing before opened dialogs
    try{
        document.body.removeChild(document.querySelector("div.prompt-dialog"));
    }
    catch(err){

    }
    
    Play_Sound("#game-lost");
    Activate_End_Dialog("game-lost");
}
function Activate_End_Dialog(won_or_lost){
    var info = JSON.parse(sessionStorage.getItem("info"));
    var settings = new DialogSettings("confirm");
    END_DIALOG_PARAM = won_or_lost;

    if(won_or_lost == "game-won"){
        if(info[12] == "srpski") settings.title = "Pobijedili ste";
        else if(info[12] == "english") settings.title = "You won";
    }
    else{
        if(info[12] == "srpski") settings.title = "Izgubili ste";
        else if(info[12] == "english") settings.title = "You lost";
    }

    if(info[12] == "srpski"){
        settings.message = `
            Poeni na konačno rješenje: ${final_pts}<br>
            Poeni na rješene kolone: ${pts}<br>
            Bonus: ${bonus}<br>
            <hr>
            UKUPNO:${final_pts+pts+bonus}
        `;
        settings.btn_Cancel_Text = "Pogledaj igru";
    }
    else if(info[12] == "english"){
        settings.message = `
            Points for given final answer: ${final_pts}<br>
            Points for given column answers: ${pts}<br>
            Bonus: ${bonus}<br>
            <hr>
            TOTAL:${final_pts+pts+bonus}
        `;
        settings.btn_Cancel_Text = "Look at the game";
    }
    info[4] = final_pts + bonus + pts;
    sessionStorage.setItem("info", JSON.stringify(info));
    settings.on_OK = () => {history.go(-1)};
    settings.on_Cancel = () => {
        var div = document.createElement("div");
        div.classList.toggle("asocijacije-overlay");
        div.addEventListener("click", Overlay);
        document.body.insertAdjacentElement("beforeend", div);
    }
    BV_dialog.confirm(settings)
}
function Overlay(){
    document.body.removeChild(document.querySelector("div.asocijacije-overlay"));
    Activate_End_Dialog(END_DIALOG_PARAM)
}