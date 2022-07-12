function Get_Phrase(id){
    var phrase;

    switch(id) {
        case 1: phrase = "HARI POTER I ODAJA TAJNI";break;
        case 2: phrase = "IPAK SE OKREĆE";break;
        case 3: phrase = "SVUDA NA SVIJETU IMA BUDALA ALI IZGLEDA DA JE KOD NAS CENTRALA";break;
        case 4: phrase = "KO DRUGOME JAMU KOPA SAM U NJU UPADA";break;
        case 5: phrase = "ROMBIZON KRUSO";break;
        case 6: phrase = "PUT DO SREDIŠTA ZEMLJE";break;
        case 7: phrase = "ALIBABA I ČETRDESET RAZBOJNIKA";break;
        case 8: phrase = "SNEŽANA I SEDAM PATULJAKA";break;
        case 9: phrase = "KO RANO RANI DVIJE SREĆE GRABI";break;
        case 10: phrase = "HARI POTER I KAMEN MUDRACA";break;
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
        "ABVGDĐEŽZIJKLMNOPRSTĆUFHCČŠ".split('').forEach((item, index) => {
            btns[index].innerHTML = item;
            btns[index].classList.toggle("disabled");
            btns[index].disabled = false;
            btns[index].setAttribute("clicked", "false");
        })
        Start();
    }
)()