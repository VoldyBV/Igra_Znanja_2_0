//buttons with blue border
var MAJOR_BUTTONS
//buttons with red border
var CONTROL_BUTTONS
//sequences
var SEQUENCES = new Array(5);
//sequence number 
var SN = 0;
//points
var POINTS = 0;
//timer
var TIMER;

window.addEventListener("DOMContentLoaded", () => {
    MAJOR_BUTTONS = Array.from(document.querySelector(".btn-container").querySelectorAll("button"));
    CONTROL_BUTTONS = Array.from(document.querySelectorAll(".btn-container .control-btn"));
    TIMER = document.querySelector("#timer");

    //creating sequences
    for (var i = 0; i < SEQUENCES.length;i++) {
        SEQUENCES[i] = new Array(6);
        for(var j = 0;j < SEQUENCES[i].length;j++){
            SEQUENCES[i][j] = Math.floor(Math.random() * 12);
        }
    }

    Zadaj_Sekvencu();
});

function Remove_Picture(elem) {
    if(elem.getAttribute("picture") != ""){
        elem.classList.remove(elem.getAttribute("picture"));
        elem.setAttribute("picture", "");
        elem.setAttribute("picture-index", "");
    }
}
function Place_Picture(elem) {
    for(var i = 0;i < MAJOR_BUTTONS.length;i++){
        if(MAJOR_BUTTONS[i].getAttribute("picture") == ""){
            MAJOR_BUTTONS[i].setAttribute("picture", elem.getAttribute("picture"));
            MAJOR_BUTTONS[i].setAttribute("picture-index", elem.getAttribute("picture-index"));
            MAJOR_BUTTONS[i].classList.add(elem.getAttribute("picture"));
            break;
        }
    }
}
function Zadaj_Sekvencu() {
    if(SN <= 4) {
        Prikazi_Sekvencu();
        TIMER.value = 20;
        TIMER.play();
    }
    else {
        End();
    }
}
function Prikazi_Sekvencu() {
    SEQUENCES[SN].forEach((item) => {
        CONTROL_BUTTONS[item].click();
    });
    document.querySelector("#submit").disabled = true;
    document.querySelector("#submit").classList.add("disabled");
}
function Sakrij_Sekvencu(){
    MAJOR_BUTTONS.forEach((item) => {
        item.click();
    });
    document.querySelector("#submit").disabled = false;
    document.querySelector("#submit").classList.remove("disabled");
}
function Provjeri_Sekvencu() {
    TIMER.pause();
    var user_sequence = "";
    var real_sequence = SEQUENCES[SN].join('');
    //dialog box
    var settings = new DialogSettings("alert");
    var lang  = JSON.parse(sessionStorage.getItem("info"))[12];

    MAJOR_BUTTONS.forEach((item) => {
        user_sequence += item.getAttribute("picture-index");
    });

    if(real_sequence == user_sequence) {
        POINTS += 5;
        Play_Sound("#tacno");

        if(lang == "srpski") {
            settings.title = "Tačno";
            settings.message = "Vaš niz je tačan.";
        }
        else if(lang == "english") {
            settings.title = "Correct";
            settings.message = "Your sequence is correct.";
        }
    }
    else {
        Play_Sound("#netacno");

        if(lang == "srpski") {
            settings.title = "Netačno";
            settings.message = "Tačan niz:<br>";
        }
        else if(lang == "english") {
            settings.title = "Wrong";
            settings.message = "Correct sequence:<br>";
        }
        //creating sequence container
        var div_sequence_container = document.createElement("div");
        SEQUENCES[SN].forEach((item) => {
            var box = document.createElement("div");
            box.classList.add("result-box");
            box.classList.add(CONTROL_BUTTONS[item].getAttribute("picture"));
            div_sequence_container.append(box);
        })

        settings.message += div_sequence_container.innerHTML;
    }
    Sakrij_Sekvencu();
    SN++;

    settings.on_OK = Zadaj_Sekvencu;
    BV_dialog.alert(settings);
}
function Timer_On_Interval() {
    if(TIMER.value == 10) {
        Sakrij_Sekvencu();
    }
}
function Timer_On_Time_Out() {
    Provjeri_Sekvencu();
}
function End() {
    var settings = new DialogSettings("alert");
    var info = JSON.parse(sessionStorage.getItem("info"));

    if(info[12] == "srpski"){
        settings.message = `Osvojeni poeni: ${POINTS}`;
    }
    else if(info[12] == "english"){
        settings.message = `Earned points: ${POINTS}`;
    }

    info[11] = POINTS;
    sessionStorage.setItem("info", JSON.stringify(info))
    settings.on_OK = () => { history.go(-1) };
    BV_dialog.alert(settings);
}
