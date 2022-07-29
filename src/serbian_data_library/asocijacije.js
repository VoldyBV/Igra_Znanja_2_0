function Get_A_Game(game_index){
    switch(game_index){
        case 1: return {
            "A": ["BOJA", "VINO", "NADA", "SVJETLOST", "BIJELA"],
            "B": ["BOJA", "VINO", "TUGA", "TAMA", "CRNA"],
            "C": ["ZID", "KOMUNIZAM", "RIŽA", "ŠTAPIĆI ZA JELO", "KINA"],
            "D": ["DRVO", "ŠUMA", "FLAUTA", "AZIJA", "BAMBUS"],
            "final_answer": "PANDA"
        };
        case 2: return {
            "A": ["CRNA", "BIJELA", "VUDU", "ČAROLIJE", "MAGIJA"],
            "B": ["LJUBAV", "OTROV", "BOČICA", "ELIKSIR", "NAPITAK"],
            "C": ["ŠTAP", "ČISTITI", "LOPATICA", "LETEĆA", "METLA"],
            "D": ["ŽRTVA", "PROCES", "PRIZIVANJE", "SVIJEĆA", "RITUAL"],
            "final_answer": "VJEŠTICA"
        };
        default: break;
    }
}

(
    () => {
        var info = JSON.parse(sessionStorage.getItem("info"));
        document.querySelector("#final_answer_container button").innerHTML = "KONAČAN ODGOVOR";
        Start();
    }
)()