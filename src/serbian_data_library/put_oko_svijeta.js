function Get_A_Game() {
    var indexes = new Array(50);

    for(var i = 0;i < indexes.length;i++){
        indexes[i] = i+1;
    }

    var game = {};
    game.flag_index = Mix_Up_Array(indexes).slice(0, 5);
    game.flag_names = new Array(5);

    for(var i = 0;i < game.flag_names.length;i++){
        game.flag_names[i] = Get_A_Flag(game.flag_index[i]);
    }

    return game;
}
function Get_A_Flag(flad_id){
    switch(flad_id){
        case 1: return "ALGERIJA";
        case 2: return "ARGENTINA";
        case 3: return "AVGANISTAN";
        case 4: return "BANGLADEŠ";
        case 5: return "BJELORUSIJA";
        case 6: return "EKVADOR";
        case 7: return "KOLUMBIJA";
        case 8: return "AZERBEJDŽAN";
        case 9: return "BOLIVIJA";
        case 10: return "BRAZIL";
        case 11: return "BRUNEJ";
        case 12: return "BUTAN";
        case 13: return "ČILE";
        case 14: return "MOLDAVIJA";
        case 15: return "RUMUNIJA";
        case 16: return "EGIPT";
        case 17: return "GRUZIJA";
        case 18: return "GVANAJA";
        case 19: return "INDONEZIJA";
        case 20: return "MONAKO";
        case 21: return "INDIJA";
        case 22: return "ISTOČNI TIMOR";
        case 23: return "JAPAN";
        case 24: return "ARMENIJA";
        case 25: return "JUŽNA KOREJA";
        case 26: return "KAMBODŽA";
        case 27: return "KANADA";
        case 28: return "LAOS";
        case 29: return "MALEZIJA";
        case 30: return "MJANMAR";
        case 31: return "KINA";
        case 32: return "KIRGISTAN";
        case 33: return "NEPAL";
        case 34: return "PAKISTAN";
        case 35: return "PARAGVAJ";
        case 36: return "PERU";
        case 37: return "SINGAPUR";
        case 38: return "UJEDINJENA ARAPSKA REPUBLIKA";
        case 39: return "SJEVERNA KOREJA";
        case 40: return "ŠRI LANKA";
        case 41: return "TAJLAND";
        case 42: return "TUNIS";
        case 43: return "TURKMENISTAN";
        case 44: return "TURSKA";
        case 45: return "UKRAJINA";
        case 46: return "URUGVAJ";
        case 47: return "UZBEKISTAN";
        case 48: return "VENECUELA";
        case 49: return "VIJETNAM";
        case 50: return "ZAPADNA SAHARA";
        default: return "";
    }
}
(
    () => {
        document.querySelector("#odgovor").placeholder = "Vaš odgovor...";
        document.querySelector("button.next-flag-btn").innerHTML = "Sledeća zastava";
        Start();
    }
)();