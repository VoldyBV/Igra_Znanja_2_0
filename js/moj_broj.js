var NUMBER_OR_OPERATOR = true;//boolean, true = number, false = operator
var IZRAZ = [];
function Start() {
    document.querySelector("#dati_broj").innerHTML = Get_Random_Number(1000);
    var nums = document.querySelectorAll(".number");
    nums.forEach((item) => {
        item.innerHTML = Get_Random_Number(10);
    });
    nums[4].innerHTML *= 5;
    nums[5].innerHTML *= 10;
}
function Stvori_Izraz(){
    var exp = IZRAZ.join('');
    document.querySelector("#izraz").innerHTML = exp;
    try{
        var result = eval(exp);
        if(result == undefined) throw "";
        document.querySelector("#rjesenje").value = result;
    }
    catch(err) {
        document.querySelector("#rjesenje").value = "?";
    }
}
function Broj(elem){
    if(NUMBER_OR_OPERATOR){
        elem.disabled = true;
        elem.classList.toggle("disabled");
        NUMBER_OR_OPERATOR = !NUMBER_OR_OPERATOR;
        IZRAZ.push(elem.innerHTML);
        Stvori_Izraz();
    }
}
function Operator(elem){
    if(!NUMBER_OR_OPERATOR){
        NUMBER_OR_OPERATOR = !NUMBER_OR_OPERATOR;
        IZRAZ.push(elem.innerHTML);
        Stvori_Izraz();
    }
}
function Zagrada(elem){
    IZRAZ.push(elem.innerHTML);
    Stvori_Izraz();
}
function Remove(){
    var removed = IZRAZ.pop();
    var nums = document.querySelectorAll(".number");
    Stvori_Izraz();
    nums.forEach((item) => {
        if(item.disabled && item.innerHTML == removed){
            item.disabled = false;
            item.classList.toggle("disabled");
        }
    });
    if(removed != "(" && removed != ")"){
        NUMBER_OR_OPERATOR = !NUMBER_OR_OPERATOR;
    }
}
function Submit_Answer(){
    var result = +document.querySelector("#rjesenje").value;
    var given_number = +document.querySelector("#dati_broj").innerHTML;
    var info = JSON.parse(sessionStorage.getItem("info"));
    var razlika;
    var pts;
    var settings = {};

    if(result == "?") pts = 0;
    else {
        razlika = Math.abs(given_number - result);
        pts = Math.round(40 - 40 * (razlika / 10));
    }

    if(pts < 0) pts = 0;
    
    if(info[12] == "srpski"){
        if(pts > 0){
            Play_Sound("#game-won");
            settings.title = "Pobjedili ste";
            settings.message = `Osvojeni poeni: ${pts}.`;

        }
        else {
            Play_Sound("#game-lost");
            settings.title = "Izgubili ste";
            settings.message = `Niste ništa osvojili.`;
        }
    }
    else if(info[12] == "english"){
        if(pts > 0){
            Play_Sound("#game-won");
            settings.title = "You won";
            settings.message = `Earned points: ${pts}.`;

        }
        else {
            Play_Sound("#game-lost");
            settings.title = "You lost";
            settings.message = `You didn't earn any points.`;
        } 
    }

    info[1] = pts;
    sessionStorage.setItem("info", JSON.stringify(info));
    settings.on_OK = () => {
        history.go(-1)
    }
    BV_dialog.alert(settings);
}