function Get_Phrase(id){
    var phrase;

    switch(id) {
        case 1: phrase = "HARRY POTTER AND THE CHAMBER OF SECRETS";break;
        case 2: phrase = "CALL IT A DAY";break;
        case 3: phrase = "TO FALL IN LOVE WITH SOMEBODY";break;
        case 4: phrase = "TO LET SOMEONE OF THE HOOK";break;
        case 5: phrase = "TO GIVESOMEONE THE COLD SHOULDER";break;
        case 6: phrase = "UNDER THE WEATHER";break;
        case 7: phrase = "TO WRAP YOUR HEAD AROUND SOMETHING";break;
        case 8: phrase = "CURIOSITY KILLED THE CAT";break;
        case 9: phrase = "TO DRIVE SOMEONE CRAZY";break;
        case 10: phrase = "HARRY POTTER AND THE HALF BLOOD PRINCE";break;
        default: break;
    }

    return phrase;
}
(
    () => {
        var info = JSON.parse(sessionStorage.getItem("info"));
        var btns = document.querySelectorAll(".buttons button");
        btns.forEach(item => {
            item.classList.toggle("disabled");
            item.disabled = true;
        });
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').forEach((item, index) => {
            btns[index].innerHTML = item;
            btns[index].classList.toggle("disabled");
            btns[index].disabled = false;
            btns[index].setAttribute("clicked", "false");
        })
        Start();
    }
)()