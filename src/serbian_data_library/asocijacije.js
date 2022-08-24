function Get_A_Game(game_index){
    switch(game_index){
        case 1: return {
            A: ["BOJA", "VINO", "NADA", "SVJETLOST", "BIJELA"],
            B: ["BOJA", "VINO", "TUGA", "TAMA", "CRNA"],
            C: ["ZID", "KOMUNIZAM", "RIŽA", "ŠTAPIĆI ZA JELO", "KINA"],
            D: ["DRVO", "ŠUMA", "FLAUTA", "AZIJA", "BAMBUS"],
            final_answer: "PANDA"
        };
        case 2: return {
            A: ["CRNA", "BIJELA", "VUDU", "ČAROLIJE", "MAGIJA"],
            B: ["LJUBAV", "OTROV", "BOČICA", "ELIKSIR", "NAPITAK"],
            C: ["ŠTAP", "ČISTITI", "LOPATICA", "LETEĆA", "METLA"],
            D: ["ŽRTVA", "PROCES", "PRIZIVANJE", "SVIJEĆA", "RITUAL"],
            final_answer: "VJEŠTICA"
        };
        case 3: return {
            A: ["PROZOR", "GREDA", "DIMNJAK", "CRIJEP", "KROV"],
            B: ["PRUGA", "ČEŠKA", "SPARTA", "KARLOV MOST", "PRAG"],
            C: ["VISOKA", "KOLEKCIJA", "MANEKENI", "TREND", "MODA"],
            D: ["KVAKA", "ULAZ", "BRAVA", "DRVO", "VRATA"],
            final_answer: "KUĆA"
        };
        case 4: return {
            A: ["NIKOTIN", "KATRAN", "UNLJEN MONOKSID", "DIM", "CIGARETA"],
            B: ["VATRA", "KRESNUTI", "DRVCE", "FOSFOR", "ŠIBICA"],
            C: ["CRVENI", "ŽUTI", "ZELENI", "MEDICINSKI", "KARTON"],
            D: ["MUHAMED ALI", "MAJK TAJSON", "RUKAVICE", "RING", "BOKS"],
            final_answer: "KUTIJA"
        };
        case 5: return {
            A: ["FUDBAL", "ODBOJKA", "TENIS", "KOŠARKA", "SPORT"],
            B: ["ČAJ", "SANTA", "VODA", "KOCKA", "LED"],
            C: ["LIVADA", "ZELENA", "ENGLESKA", "VIMBLDON", "TRAVA"],
            D: ["OŠTRICA", "OBUĆA", "BAURER", "ROLER", "KLIZANJE"],
            final_answer: "HOKEJ"
        };
        case 6: return {
            A: ["RAMPA", "RAKETA", "PROIZVOD", "KAMPANJA", "LANSIRANJE"],
            B: ["PETAR VELIKI", "MAJKA", "PUTIN", "SIBIR", "RUSIJA"],
            C: ["LANAC", "KOST", "OGRLICA", "MAČKA", "PAS"],
            D: ["ZVIJEZDE", "BESKRAJAN", "STANICA", "BROD", "SVEMIR"],
            final_answer: "LAJKA"
        };
        case 7: return {
            A: ["TUČAK", "MED", "LATICE", "LIVADA", "CVIJET"],
            B: ["PRAH", "ČOKOLADA", "JAGODA", "TIJELO", "MLIJEKO"],
            C: ["TORTILJA", "SOMBRERO", "ČILI", "SITI", "MEKSIKO"],
            D: ["PRASE", "RUŽA", "JEŽ", "PČELA", "BODLJA"],
            final_answer: "KAKTUS"
        };
        case 8: return {
            A: ["DRVO", "DRUŠTVO", "PRAVILO", "... ZA NOVO", "STARO"],
            B: ["KADA", "DIM", "POZORIŠTE", "PROZOR", "ZAVJESA"],
            C: ["ZLATO", "GLAS", "BODLJIKAVA", "OGRADA", "ŽICA"],
            D: ["HEMIJA", "PERIODNI SISTEM", "KUHINJSKI", "PETI", "ELEMENT"],
            final_answer: "ŽELJEZO"
        };
        case 9: return {
            A: ["INTENZITET", "GEOMETRIJA", "SMIJER", "PRAVAC", "VEKTOR"],
            B: ["MATEMATIKA", "ŠKOLA", "STRUČNA SPREMA", "INSTANCA", "VIŠA"],
            C: ["LOTO", "NEDJELJA", "BROJ", "JUL", "SEDAM"],
            D: ["KOMPAS", "POL", "INDUKCIJA", "POLJE", "MAGNET"],
            final_answer: "SILA"
        };
        case 10: return {
            A: ["HLJEB", "PETAK", "LUK", "BIJELI", "CRNI"],
            B: ["LIST", "GUŠTER", "POJAS", "KARTON", "ZELENI"],
            C: ["TANJIRIĆ", "PORCELAN", "WC", "KAFA", "ŠOLJA"],
            D: ["ELEMENT", "PLUS", "PRSTI", "OCJENA", "PET"],
            final_answer: "ČAJ"
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