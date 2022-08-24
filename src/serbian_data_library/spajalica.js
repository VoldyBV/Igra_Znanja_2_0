function Get_A_Game(game_index){
    var game = {};
    game.description = Get_A_Description(game_index);
    game.pairs = Get_Pairs(game_index);
    console.log(game);
    return game;
}
function Get_A_Description(game_index){
    switch(game_index){
        case 1: return "Fudbalski klubovi i gradovi u kojima se nalaze";
        case 2: return "Režiseri i njihovi filmovi";
        case 3: return "Pisci i njihova djela";
        case 4: return "Režiseri i zemlje iz kojih potiču";
        case 5: return "Luke i države u kojima se nalaze";
        case 6: return "Kiseline i njihove hemijske formule";
        case 7: return "Sportski tereni i njihove dužine";
        case 8: return "Imena i prezimena italijanskih pisaca";
        case 9: return "Glumci i filmovi u kojima su glumili";
        case 10: return "Planine i države u kojima se nalaze";
        default: break;
    }
}
function Get_Pairs(game_index){
    switch(game_index){
        case 1: return [
            "PARTIZAN-BEOGRAD",
            "JUVENTUS-TORINO",
            "ARSENAL-LONDON",
            "BAJERN-MINHEN",
            "AJAX-AMSTERDAM",
            "HAJDUK-SPLIT",
            "ATLETIKO-MADRID",
            "BORUSIJA-DORTMUND"
        ];
        case 2: return [
            "DŽEJM KEMPION-KLAVIR",
            "KLINT ISTVUD-MOSTOVI OKRUGA MEDISON",
            "ROBERTO BENJINI-ŽIVOT JE LIJEP",
            "STIVEN DALDRI-ČITAČ",
            "AKI KAURISMAKI-ČOVJEK BEZ PROŠLOSTI",
            "MIHAIL HANKE-UČITELJICA KLAVIRA",
            "PEDRO ALMODOVAR-PRIČAJ SA NJOM",
            "MARTIN SAKROSEZE-DVOSTRUKA IGRA"
        ];
        case 3: return [
            "BERNHARD ŠARL-VIKEND",
            "ŠARL BOLDER-CVIJEĆE ZLA",
            "ALESANDRO MANCONI-VJERENICI",
            "DORIS LESING-PETO DIJETE",
            "JUSTEJIN GORDER-ZAMAK U PIRINEJIMA",
            "ŠARLOT BRONTE-DŽEJN EJR",
            "EMILI BRONTE-ORKANSKI VISOVI",
            "ERNEST HEMINGVEJ-ZBOGOM ORUŽJE"
        ];
        case 4: return [
            "ALFRED HIČKOK-VELIKA BRITANIJA",
            "MIHAIL HENKE-NJEMAČKA",
            "BAZ LAURMAN-AUSTRALIJA",
            "LIV ULMAN-NORVEŠKA",
            "ROBERT ALTMAN-SAD",
            "MARLIN GORIS-HOLANDIJA",
            "ISIAR BOLJAIN-ŠPANIJA",
            "KLOD LALUS-FRANCUSKA"
        ];
        case 5: return [
            "GETEBORG-ŠVEDSKA",
            "MONTEVIDEO-URUGVAJ",
            "MUMBAJ-INDIJA",
            "KINGSTON-JAMAJKA",
            "KARTAGENA-KOLUMBIJA",
            "NASAU-BAHAMI",
            "ROTERDAM-HOLANDIJA",
            "DURBAN-JUŽNA AFRIKA"
        ];
        case 6: return [
            "FOSFORASTA-H<sub>3</sub>PO<sub>3</sub>",
            "SIRĆETNA-C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>",
            "FOSFORNA-H<sub>3</sub>PO<sub>4</sub>",
            "HLOROVODONIČNA-HCL",
            "SUMPORNA-H<sub>2</sub>SO<sub>4</sub>",
            "MRAVLJA-CH<sub>2</sub>O<sub>2</sub>",
            "SUMPORASTA-H<sub>2</sub>SO<sub>3</sub>",
            "LIMUNSKA-C<sub>6</sub>H<sub>8</sub>O<sub>7</sub>"
        ];
        case 7: return [
            "KOŠARKA-61m",
            "RUKOMET-27.5m",
            "TENIS-40m",
            "BEJZBOL-28m",
            "HOKEJ NA LEDU-23.78m",
            "RAGBI-18m",
            "VATERPOLO-30m",
            "ODBOJKA-10m"
        ];
        case 8: return [
            "UMBERTO-EKO",
            "KARLO-KOLODI",
            "LUIĐI-PIRANDELO",
            "ĐOVANI-BOKAČO",
            "FRANČESKO-PETRARKA",
            "DANTE-ALIGIJERI",
            "ALBERTO-MORAVIJA",
            "SALVATORE-KVAZIMODO"
        ];
        case 9: return [
            "PENELOPE KRUZ-OTVORI OČI",
            "SALMA HAJEK-DESPERADO",
            "ŠERON STOUN-NISKE STRASTI",
            "KIRA NAJTLI-GORDOST I PREDRASUDE",
            "NIKOL KIDMAN-DUHOVI U NAMA",
            "DŽULIJA ROBERTS-OSMJEH MONA LIZE",
            "EMA VOTSON-HARI POTER",
            "KEJT VINSLET-DIM"
        ];
        case 10: return [
            "SLOVENIJA-JULIJSKI ALPI",
            "SRBIJA-GOLIJA",
            "CRNA GORA-ORJEN",
            "GRČKA-OLIMP",
            "BUGARSKA-RILA",
            "ŠPANIJA-PIRINEJI",
            "BOSNA I HERCEGOVINA-ROMANIJA",
            "RUSIJA-URAL"
        ];
        default: break;
    }
}

Start();