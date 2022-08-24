function Get_Words() {
    var game = {
        words: new Array(3),
        clues: new Array(3)
    };
    var words = Words();
    var clues = Clues();
    var indexes = new Array(words.length);

    for(var i = 0;i < words.length;i++){
        indexes[i] = i;
    }

    //mixing up indexes;

    indexes = Mix_Up_Array(indexes).slice(0, 3);

    for(var i = 0;i < indexes.length;i++) {
        game.words[i] = words[indexes[i]];
        game.clues[i] = clues[indexes[i]];
    }

    return game;
}
function Words () {
    return [
        "PREPELICA",
        "ISPRŽITI",
        "ZAPLIJENITI",
        "TRIGONOMETRIJA",
        "TROUGAO",
        "ONOMATOPEJA",
        "ANTONIM",
        "AMERIKA",
        "KONVERZACIJA",
        "METAMORFOZA",
        //
        "GOVORNIK",
        "DUGME",
        "ZAPISNIK",
        "ZAPISNIČAR",
        "PACIFIK",
        "PODGORICA",
        "KOZARA",
        "JAHORINA",
        "KAKTUS",
        "VINARIJA",
        //
        "FILOZOFIJA",
        "BIOLOGIJA",
        "OTPORNIK",
        "PROVODNIK",
        "IZOLATOR",
        "FRULA",
        "VIOLINA",
        "BUBANJ",
        "KOMPAS",
        "NAPITAK",
        //
        "JAGUAR",
        "PANDA",
        "JASTREB",
        "BAMBUS",
        "BRŠLJEN",
        "KRASTAVAC",
        "DINAMIT",
        "PUŠKA",
        "PIŠTOLJ",
        "METAK",
        //
        "HOMOFOBIJA",
        "HIPOHONDRIJA",
        "KLAUSTROFOBIJA",
        "UTERUS",
        "ZLATO",
        "SREBRO",
        "ŽELJEZO",
        "HELIJUM",
        "KISELINA",
        "BAZA",
    ];
};
function Clues() {
    return [
        "Vrsta ptice",
        "Ispeći - sinonim",
        "Konfiskovati - sinonim",
        "Grana matematike",
        "Figura sa tri strane",
        "Stilska figura",
        "Suprotno od riječi sinonim",
        "Jedan kontinent",
        "Razgovor - sinonim",
        "Preobražaj - sinonim",
        //
        "Onaj koji govori",
        "Kum nije...",
        "Definicija: zabilježen sadržaj sastanka",
        "Onaj koji piše zapisnik",
        "Jedan okean",
        "Grad u Crnoj Gori",
        "Planina u BiH",
        "Planina u BiH",
        "Raste u pustinji",
        "Mjesto gdje se pravi vino",
        //
        "Prevod: ljubav prema mudrosti",
        "Definicija: nauka o živim bićima",
        "Pruža otpor struji",
        "Kroz njega struja teče",
        "Kroz njega struja ne teče",
        "Duvački instrument",
        "Gudački instrument",
        "Udarački instrument",
        "Određuje strane svijeta",
        "Ljubavni...",
        //
        "Vrsta mačke",
        "Nacionalni simbol Kine",
        "Vrsta ptice grabljivice",
        "Vrsta drveta u Kini",
        "Može biti otrovan",
        "Može biti morski",
        "Vrsta eksploziva",
        "Lovačka...",
        "Vrsta vatrenog oružja",
        "Municija ili...",
        //
        "Definicija: strah od homoseksualaca",
        "Vrsta bolesti",
        "Definicija: strah od uskog prostora",
        "Latinski izraz za matericu",
        "Au",
        "Ag",
        "Fe",
        "He",
        "Može biti od limuna",
        "... podataka",
    ]
}
(
    () => {
        document.querySelector("#clue-button").innerHTML = "Opis riječi";
        Start();
    }
)();