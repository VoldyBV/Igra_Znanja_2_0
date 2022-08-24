var NOPG = 10;//NUMBER OF POSSIBLE GAMES
var GAME;

function Start(){
    GAME = Get_A_Game(Get_Random_Number(NOPG));

    var left = Mix_Up_Array(GAME.pairs.map((item) => {return item.split('-')[0]}));
    var right = Mix_Up_Array(GAME.pairs.map((item) => {return item.split('-')[1]}));
    var btns_left = document.querySelectorAll("button[pair=left]");
    var btns_right = document.querySelectorAll("button[pair=right]");
    var description = document.querySelector("#naslov");

    description.innerHTML = GAME.description;
    
    btns_left.forEach((item, index) => {
        item.innerHTML = left[index];
    });

    btns_right.forEach((item, index) => {
        item.innerHTML = right[index];
    })
};
function Select(elem) {
    var btns = document.querySelectorAll("button[pair=left]");

    btns.forEach((item) => {
        if(item.classList.contains("selected")){
            item.classList.remove("selected");
        }
    })

    elem.classList.add("selected");
}
function Check(right) {
    var left = document.querySelector("button.selected");
    var pair = left.innerHTML + "-" + right.innerHTML;
    var unanswered = 8;
    if(GAME.pairs.includes(pair)){
        left.disabled = true;
        right.disabled = true;
        left.classList.add("spajalica-tacno");
        right.classList.add("spajalica-tacno");
        Play_Sound("#tacno");

        GAME.pairs = GAME.pairs.filter((item) => {
            return item != pair;
        })
    }
    else {
        left.disabled = true;
        left.classList.add("spajalica-netacno");
        Play_Sound("#netacno");
    }
    
    var btns = document.querySelectorAll("button[pair=left]");

    btns.forEach((item) => {
        if(item.classList.contains("spajalica-tacno") || item.classList.contains("spajalica-netacno")){
            unanswered--;
        }
    })

    console.log(unanswered)
    if(unanswered == 0) {
        End();
    }
}
function End(){
    var points = document.querySelectorAll("button[pair=left].spajalica-tacno").length * 4;
    var settings = new DialogSettings("alert");
    var info = JSON.parse(sessionStorage.getItem("info"));
    
    if(info[12] == "srpski"){
        settings.title = "Kraj igre";
        settings.message = `Osvojeni bodovi: ${points}<br><br>Tačni odgovori:<br>`;
    }
    else if(info[12] == "english"){
        settings.title = "Game over";
        settings.message = `Earned points: ${points}<br><br>Correct answers:<br>`;
    }

    if(GAME.pairs.length > 0) {
        GAME.pairs.forEach((item) => {
            settings.message += item + "<br>";
        })
    }

    info[5] = points;
    sessionStorage.setItem("info", JSON.stringify(info));
    settings.on_OK = () => { history.go(-1) };

    BV_dialog.alert(settings);
}