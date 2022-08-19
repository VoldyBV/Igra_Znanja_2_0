var CODE = [undefined, undefined, undefined, undefined];
var PILE = [0, 0, 0, 0, 0, 0];
var KORAK = 0;
var sef_container;
window.addEventListener("load", Start);

function Start(){
    for(var i = 0;i < CODE.length;i++) {
        CODE[i] = Math.floor(Math.random() * 6);
        PILE[CODE[i]]++;
    }
    console.log(CODE);
    console.log(PILE);
    sef_container = document.querySelectorAll(".sef-container");
}
function Remove_Number(elem) {
    elem.innerHTML = "";
}
function Choose_Number(elem) {
    var btns = sef_container[KORAK].querySelectorAll(".part1 button");

    for(var i = 0;i < btns.length;i++) {
        if(btns[i].innerHTML == "") {
            btns[i].innerHTML = elem.innerHTML;
            break;
        }
    }
}
function Submit_Code() {
    var btns = sef_container[KORAK].querySelectorAll(".part1 button");
    var user_code = new Array(4);
    var indicators = [];
    var crveno = 0;
    var zuto = 0;
    var pile = Array.from(PILE);

    btns.forEach((item, index) => {
        item.classList.toggle("disabled");
        item.disabled = true;
        user_code[index] = item.innerHTML;
    });

    if(user_code.join('') == CODE.join('')) {
        Game_Won()
        return; // exit the function;
    }
    //else continue execution
	for(var i = 0;i < 4;i++){
		if(user_code[i] == CODE[i] && pile[user_code[i]*1] > 0){
            crveno++;
			pile[user_code[i]*1]--;
		}
	}
	for(var i = 0;i < 4;i++){
		if(user_code[i] != CODE[i] && pile[user_code[i]*1] > 0){
			zuto++;
			pile[user_code[i]*1]--;
		}
	}

    for(var i = 0;i < crveno;i++){
        var indi = document.createElement("button"); //indicator
        indi.classList.toggle("sef-button");
        indi.classList.toggle("right_number_right_place");
        indi.disabled = true;
        indicators.push(indi);
    }

    for(var i = 0;i < zuto;i++){
        var indi = document.createElement("button"); //indicator
        indi.classList.toggle("sef-button");
        indi.classList.toggle("right_number_wrong_place");
        indi.disabled = true;
        indicators.push(indi);
    }

    while(indicators.length < 4) {
        var indi = document.createElement("button"); //indicator
        indi.classList.toggle("sef-button");
        indi.classList.toggle("wrong_number");
        indi.disabled = true;
        indicators.push(indi);
    }

    sef_container[KORAK].querySelector(".part2").innerHTML = "";

    indicators.forEach((item) => {
        sef_container[KORAK].querySelector(".part2").append(item);
    });

    KORAK++;
    Next();
}
function Next() {
    if(KORAK > 5){
        Game_Lost();
        return;
    }

    var btns = sef_container[KORAK].querySelectorAll("button");

    btns.forEach((item) => {
        item.classList.toggle("disabled");
        item.disabled = false;
    })
}
function Game_Won() {
    var settings = new DialogSettings("alert")
    var info = JSON.parse(sessionStorage.getItem("info"));
    var points = 15, bonus = 5 * (5 - KORAK);

    Play_Sound("#game-won");

    if(info[12] == "srpski") {
        settings.title = "Pobjedili ste";
        settings.message = `
            Osvojeni poeni: ${points} <br>
            Bonus poeni: ${bonus} 
            <hr>
            UKUPNO: ${bonus+points}
        `;
    }
    else if(info[12] == "english") {
        settings.title = "Pobjedili ste";
        settings.message = `
            Earned points: ${points} <br>
            Bonus points: ${bonus} 
            <hr>
            TOTAL: ${bonus+points}
        `;
    }

    settings.on_OK = () => { history.go(-1) }
    info[10] = points + bonus;
    sessionStorage.setItem("info", JSON.stringify(info));

    BV_dialog.alert(settings);
}
function Game_Lost(){
    var settings = new DialogSettings("alert")
    var info = JSON.parse(sessionStorage.getItem("info"));

    Play_Sound("#game-lost");

    if(info[12] == "srpski") {
        settings.title = "Izgubili ste";
        settings.message = `
            RJEŠENJE:<br>
            ${CODE.join('-')}
        `;
    }
    else if(info[12] == "english") {
        settings.title = "You lost";
        settings.message = `
            ANSWER:<br>
            ${CODE.join('-')}
        `;
    }

    settings.on_OK = () => { history.go(-1) }
    info[10] = 0;
    sessionStorage.setItem("info", JSON.stringify(info));

    BV_dialog.alert(settings);
}