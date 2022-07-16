function Start() {
    var info = JSON.parse(sessionStorage.getItem("info"));
    var btns = document.querySelectorAll(".row button");
    var pairs = [
        "blob", "blob",
        "bulb", "bulb",
        "checkmark", "checkmark",
        "clover", "clover",
        "exlamation_mark", "exlamation_mark",
        "heart", "heart",
        "leaf", "leaf",
        "lightning", "lightning",
        "question_mark", "question_mark",
        "romb", "romb",
        "royal", "royal",
        "star", "star",
    ];

    pairs = Mix_Up_Array(pairs);

    btns.forEach((item, index) => {
        if(info[12] == "srpski") item.classList.add("background_srpski");
        else if(info[12] == "english") item.classList.add("background_english");
        item.setAttribute("toggle-class", pairs[index]);
        item.setAttribute("reveal", "no")
    })
}
function Open(elem){
    elem.classList.toggle(elem.getAttribute("toggle-class"));
    elem.disabled = true;
    elem.setAttribute("reveal", "pending");
    Check_Pair();
}
function Check_Pair(){
    var pair = document.querySelectorAll("button[reveal=pending]");
    //exit function if there is only one picture revealed
    if(pair.length < 2) return; 
    //if there is two pictures revealed, then do this
    var btns = document.querySelectorAll(".row button");

    btns.forEach((item) => { item.disabled = true; })

    if(pair[0].getAttribute("toggle-class") == pair[1].getAttribute("toggle-class")){
        Play_Sound("#tacno");
        pair[0].setAttribute("reveal", "yes");
        pair[1].setAttribute("reveal", "yes");
        btns = document.querySelectorAll("button[reveal=no]");
        btns.forEach((item) => {
            item.disabled = false;
        });
    }
    else{
        Play_Sound("#netacno");
        pair[0].setAttribute("reveal", "no");
        pair[1].setAttribute("reveal", "no");
        setTimeout(() => {
            pair[0].classList.toggle(pair[0].getAttribute("toggle-class"));
            pair[1].classList.toggle(pair[1].getAttribute("toggle-class"));
            btns = document.querySelectorAll("button[reveal=no]");
            btns.forEach((item) => {
                item.disabled = false;
            });
        }, 2000)
    }
    var moves = document.querySelector("#timer");
    moves.value = moves.value - 1;
    btns = document.querySelectorAll("button[reveal=no]");

    if(moves.value == 0 || btns.length == 0){
        var sound;

        if(moves.value == 0 && btns.length == 0) sound = "#game-won";
        else if(btns.length == 0) sound = "#game-won";
        else sound = "#game-lost";

        End(sound);
    }
}
function End(sound){
    Play_Sound(sound);

    var btns = document.querySelectorAll("button[reveal=no]");

    btns.forEach((item) => {
        item.classList.toggle(item.getAttribute("toggle-class"));
    })

    Activate_End_Dialog();
}
function Activate_End_Dialog(){

    var info = JSON.parse(sessionStorage.getItem("info"));
    var settings = {};
    var points = document.querySelectorAll("button[reveal=yes]").length;
    var bonus = +document.querySelector("#timer").value;

    if(info[12] == "srpski"){
        settings.message = `
            Osvojeni poeni: ${points}<br>
            Bonus: ${bonus}<br>
            <hr><br>
            Ukupno: ${+bonus + +points}
        `;
        settings.btn_Cancel_Text = "Pogledaj igru";
    }
    else if(info[12] == "english"){
        settings.message = `
            Earned points: ${points}<br>
            Bonus: ${bonus}<br>
            <hr><br>
            Total: ${+bonus + +points}
        `;
        settings.btn_Cancel_Text = "Spectate the game";
    }
    info[6] = points + bonus;
    sessionStorage.setItem("info", JSON.stringify(info));
    settings.on_OK = () => {history.go(-1)};
    settings.on_Cancel = () => {
        var div = document.createElement("div");
        div.classList.toggle("parovi-overlay");
        div.addEventListener("click", Overlay);
        document.body.insertAdjacentElement("beforeend", div);
    }
    BV_dialog.confirm(settings)
}
function Overlay(){
    document.body.removeChild(document.querySelector("div.parovi-overlay"));
    Activate_End_Dialog()
}