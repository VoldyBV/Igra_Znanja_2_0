var WORD_1, WORD_2, WORD_3;
var GAME;
function Start() {
    GAME = Get_Words();
    var words = GAME.words;
    var row_1 = document.querySelector("[row='1']");
    var row_2 = document.querySelector("[row='2']");
    var row_3 = document.querySelector("[row='3']");

    WORD_1 = words[0];
    WORD_2 = words[1];
    WORD_3 = words[2];

    //mixing up letters
    var letters = WORD_1 + WORD_2 + WORD_3;
    letters = Mix_Up_Array(letters.split(''));

    //appending buttons
    var index_of_letters = 0;
    //row1
    for(var i = 0; i < WORD_1.length; i++, index_of_letters++){
        var btn = document.createElement("button");
        btn.setAttribute("onclick", "Switch_Letters(this)");
        btn.innerHTML = letters[index_of_letters];
        row_1.append(btn);
    }
    //row2
    for(var i = 0; i < WORD_2.length; i++, index_of_letters++){
        var btn = document.createElement("button");
        btn.setAttribute("onclick", "Switch_Letters(this)");
        btn.innerHTML = letters[index_of_letters];
        row_2.append(btn);
    }
    //row3
    for(var i = 0; i < WORD_3.length; i++, index_of_letters++){
        var btn = document.createElement("button");
        btn.setAttribute("onclick", "Switch_Letters(this)");
        btn.innerHTML = letters[index_of_letters];
        row_3.append(btn);
    }
}
function Show_Clues() {
    var clues = GAME.clues;
    var lang = JSON.parse(sessionStorage.getItem("info"))[12];
    var settings = new DialogSettings("alert");

    if(lang == "srpski") settings.title = "Opis riječi";
    else if(lang == "english") settings.title = "Hints";

    settings.message = "<ol>";

    clues.forEach((item) => {
        settings.message += `<li> ${item} </li>`;
    })

    settings.message += "</ol>";
    BV_dialog.alert(settings);    
}
function Switch_Letters(elem){
    elem.classList.toggle("selected");
    var selected_letters = document.querySelectorAll("button.selected");

    if(selected_letters.length == 2) {
        var btn1 = selected_letters[0]
        var btn2 = selected_letters[1];
        var btn1_text = btn1.innerHTML;
        var btn2_text = btn2.innerHTML;

        btn1.innerHTML = btn2_text;
        btn2.innerHTML = btn1_text;

        btn1.classList.toggle("selected");
        btn2.classList.toggle("selected");
        Check_Words();
    }
}
function Check_Words() {
    var word_1 = "", word_2 = "", word_3 = "";
    var row1_btns = document.querySelectorAll("[row='1'] button");
    var row2_btns = document.querySelectorAll("[row='2'] button");
    var row3_btns = document.querySelectorAll("[row='3'] button");

    //mark all words as correct
    row1_btns.forEach((item) => {
        if(!item.classList.contains("sklopljena-rijec")){
            item.classList.add("sklopljena-rijec");
            item.classList.add("disabled");
            item.disabled = true;
            word_1 += item.innerHTML;
        }
    });
    row2_btns.forEach((item) => {
        if(!item.classList.contains("sklopljena-rijec")){
            item.classList.add("sklopljena-rijec");
            item.classList.add("disabled");
            item.disabled = true;
            word_2 += item.innerHTML;
        }
    });
    row3_btns.forEach((item) => {
        if(!item.classList.contains("sklopljena-rijec")){
            item.classList.add("sklopljena-rijec");
            item.classList.add("disabled");
            item.disabled = true;
            word_3 += item.innerHTML;
        }
    });
    //exclude incorrect words
    if(word_1 != WORD_1 && word_1 != "") {
        row1_btns.forEach((item) => {
            item.classList.remove("sklopljena-rijec");
            item.classList.remove("disabled");
            item.disabled = false;
        });
    }
    if(word_2 != WORD_2 && word_2 != "") {
        row2_btns.forEach((item) => {
            item.classList.remove("sklopljena-rijec");
            item.classList.remove("disabled");
            item.disabled = false;
        });
    }
    if(word_3 != WORD_3 && word_3 != "") {
        row3_btns.forEach((item) => {
            item.classList.remove("sklopljena-rijec");
            item.classList.remove("disabled");
            item.disabled = false;
        });
    }
}
function Submit() {
    var word_1 = "", word_2 = "", word_3 = "";
    var row1_btns = document.querySelectorAll("[row='1'] button");
    var row2_btns = document.querySelectorAll("[row='2'] button");
    var row3_btns = document.querySelectorAll("[row='3'] button");
    var info = JSON.parse(sessionStorage.getItem("info"));
    var pts = 0, bonus = 0;
    
    row1_btns.forEach((item) => {
        word_1 += item.innerHTML;
    });
    row2_btns.forEach((item) => {
        word_2 += item.innerHTML;
    });
    row3_btns.forEach((item) => {
        word_3 += item.innerHTML;
    });

    if(word_1 == WORD_1) {
        pts += 5;
        bonus += word_1.length;
        WORD_1 = "";
    }
    if(word_2 == WORD_2) {
        pts += 5;
        bonus += word_2.length;
        WORD_2 = "";
    }
    if(word_3 == WORD_3) {
        pts += 5;
        bonus += word_3.length;
        WORD_3 = "";
    }

    var settings = new DialogSettings("alert");

    if(info[12] == "srpski") {
        if(pts > 0) {
            settings.title = "Pobijedili ste";
            Play_Sound("#game-won");
        }
        else {
            settings.title = "Izgubili ste";
            Play_Sound("#game-lost")
        }
        settings.message = `
            Osvojeni poeni: ${pts} <br>
            Bonus poeni: ${bonus} <br>
            <hr>
            UKUPNO: ${pts + bonus}
            <br>
            <hr>
            Rješenja: <br>
            ${WORD_1} <br>
            ${WORD_2} <br>
            ${WORD_3} <br>
        `
    }
    else if(info[12] == "english") {
        if(pts > 0){ 
            settings.title = "You won";
            Play_Sound("#game-won");
        }
        else {
            settings.title = "You lost";
            Play_Sound("#game-lost");
        }
        settings.message = `
            Earned points: ${pts} <br>
            Bonus points: ${bonus} <br>
            <hr>
            TOTAL: ${pts + bonus}
            <br>
            <br>
            Answers: <br>
            ${WORD_1} <br>
            ${WORD_2} <br>
            ${WORD_3} <br>
        `
    }
    info[8] = pts + bonus;
    sessionStorage.setItem("info", JSON.stringify(info));

    settings.on_OK = () => {
        history.go(-1);
    }

    BV_dialog.alert(settings);
}