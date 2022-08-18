var GAME;
var BR_PITANJA = 0;
var BTNS; //buttons for answers
var QUESTION; //question container
var POSITIVE_POINTS = 0;
var NEGATIVE_POINTS = 0;
function Start() {
    GAME = Get_A_Game();
    BTNS = Array.from(document.querySelectorAll(".button-container button")).slice(0, 4);
    QUESTION = document.querySelector("#pitanje");
    Next();
}
function Next(){
    QUESTION.innerHTML = GAME.questions[BR_PITANJA];
    var answers = Mix_Up_Array(GAME.answers[BR_PITANJA]);

    BTNS.forEach((item, index) => {
        item.innerHTML = answers[index];
    })
}
function Check_Answer(elem) {
    var odgovor = elem.innerHTML;
    var lang = JSON.parse(sessionStorage.getItem("info"))[12];
    var settings = new DialogSettings("alert");
    if(odgovor == "Ne znam" || odgovor == "I don't know") {
        if(lang == "srpski"){
            settings.title = "";
            settings.message = `
                Tačan odgovor je: ${GAME.correct_answers[BR_PITANJA]}
            `
        }
        else if(lang == "english") {
            settings.title = "";
            settings.message = `
                The correct answer is: ${GAME.correct_answers[BR_PITANJA]}
            `
        }
    }
    else if(odgovor == GAME.correct_answers[BR_PITANJA]){
        Play_Sound("#tacno");
        POSITIVE_POINTS += 5;

        if(lang == "srpski"){
            settings.title = "Tačan odgovor";
            settings.message = "Osvojili ste 5 poena.";
        }
        else if(lang == "english") {
            settings.title = "Correct!";
            settings.message = "You've earned 5 points.";
        }
    }
    else {
        Play_Sound("#netacno");
        NEGATIVE_POINTS += 2;

        if(lang == "srpski"){
            settings.title = "Netačan odgovor";
            settings.message = `
                Tačan odgovor je: ${GAME.correct_answers[BR_PITANJA]} <br>
                Izgubili ste 2 poena.
            `;
        }
        else if(lang == "english") {
            settings.title = "Wrong!";
            settings.message = `
                The correct answer is: ${GAME.correct_answers[BR_PITANJA]} <br>
                You've lost 2 points.
            `;
        }
    }

    settings.on_OK = () => {
        BR_PITANJA++;
        if(BR_PITANJA == 10) {
            End();
        }
        else {
            Next();
        }
    }

    BV_dialog.alert(settings);
}
function End() {
    var info = JSON.parse(sessionStorage.getItem("info"));
    var settings = new DialogSettings("alert");

    if(info[12] == "srpski"){
        settings.message = `
            Osvojeni poeni: ${POSITIVE_POINTS} <br>
            Izgubljeni poeni: ${NEGATIVE_POINTS} <br>
            <hr>
            UKUPNO: ${POSITIVE_POINTS - NEGATIVE_POINTS}
        `
    }
    else if(info[12] == "english"){
        settings.message = `
            Earned points: ${POSITIVE_POINTS} <br>
            Lost points: ${NEGATIVE_POINTS} <br>
            <hr>
            TOTAL: ${POSITIVE_POINTS - NEGATIVE_POINTS}
        `
    }

    settings.on_OK = () => {
        history.go(-1);
    }

    info[9] = POSITIVE_POINTS - NEGATIVE_POINTS;
    sessionStorage.setItem("info", JSON.stringify(info));
    BV_dialog.alert(settings);
}
