var GAME;
var btns = new Array(7);
var KORAK = 0;
function Start() {
    GAME = Get_a_Game();
    document.querySelector("#naslov").innerHTML = GAME.naslov;

    var correct = Mix_Up_Array(GAME.correct);
    var wrong = Mix_Up_Array(GAME.wrong);
    var btns_containers = document.querySelectorAll(".pair-container");
    var pairs = new Array(7);

    for(var i = 0;i < 7;i++){
        btns[i] = btns_containers[i].querySelectorAll("button");
    }
    for(var i = 0;i < 7;i++){
        pairs[i] = Mix_Up_Array([correct[i], wrong[i]]);
    }
    pairs = Mix_Up_Array(pairs);

    for(var i = 0;i < 7;i++){
        btns[i][0].innerHTML = pairs[i][0];
        btns[i][1].innerHTML = pairs[i][1];
    }
}
function Choose(elem){
    if(GAME.correct.includes(elem.innerHTML)){
        elem.classList.toggle("accept-btn");
        Play_Sound("#tacno")
        elem.classList.toggle("tacno");
    }
    else{
        elem.classList.toggle("decline-btn");
        elem.classList.toggle("netacno");
        Play_Sound("#netacno");
    }
    NextStep();
}
function NextStep(){
    btns[KORAK][0].disabled = true;
    btns[KORAK][1].disabled = true;
    btns[KORAK][0].classList.toggle("disabled");
    btns[KORAK][1].classList.toggle("disabled");
    KORAK++;
    if(KORAK < 7) {
        btns[KORAK][0].disabled = false;
        btns[KORAK][1].disabled = false;
        btns[KORAK][0].classList.toggle("disabled");
        btns[KORAK][1].classList.toggle("disabled");
        document.querySelector("#timer").value = "15";
        document.querySelector("#timer").play();
    }
    else{
        document.querySelector("#timer").pause();
        End();
    }
}
function Time_Out(){
    if(GAME.correct.includes(btns[KORAK][0].innerHTML)){
        btns[KORAK][0].classList.toggle("accept-btn")
        btns[KORAK][1].classList.toggle("decline-btn")
    }
    else{
        btns[KORAK][1].classList.toggle("accept-btn")
        btns[KORAK][0].classList.toggle("decline-btn")
    }
    Play_Sound("#netacno");
    NextStep();
}
function End() {
    document.querySelector("#timer").pause();
    
    var positive_points = document.querySelectorAll(".tacno").length * 4;
    var negative_points = document.querySelectorAll(".netacno").length * -2;
    var info = JSON.parse(sessionStorage.getItem("info"));
    var settings = new DialogSettings("alert");

    if(info[12] == "srpski"){
        settings.message = `
            Osvojeni pozitivni poeni: ${positive_points}<br>
            Osvojeni negativni poeni: ${negative_points}<br>
            <hr style="height: 2px">
            UKUPNO: ${positive_points+negative_points}
        `;
    }
    else if(info[12] == "english"){
        settings.message = `
            Earned positive points: ${positive_points}<br>
            Earned negative points: ${negative_points}<br>
            <hr style="height: 2px">
            TOTAL: ${positive_points+negative_points}
        `;
    }
    info[2] = positive_points + negative_points;
    settings.on_OK = () => {history.go(-1)}
    sessionStorage.setItem("info", JSON.stringify(info));
    BV_dialog.alert(settings)
}