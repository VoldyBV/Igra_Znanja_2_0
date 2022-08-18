function Get_A_Game() {
    var br_pitanja = 12;
    var indeksi = new Array(12);

    for(var i = 0;i < br_pitanja;i++) {
        indeksi[i] = i;
    }

    var game = {
        questions: [],
        correct_answers: [],
        answers: []
    }

    var pitanja = Pitanja();
    var tacni_odgovori = Tacni_Odgovori();
    var odgovori = Odgovori();

    indeksi = Mix_Up_Array(indeksi).slice(0, 10);

    for(var i = 0;i < indeksi.length;i++){
        game.questions[i] = pitanja[indeksi[i]];
        game.correct_answers[i] = tacni_odgovori[indeksi[i]];
        game.answers[i] = odgovori[indeksi[i]];
    }

    return game;
}

function Pitanja(){
    return [
        "Koja od navedenih riba je morska?",
        "Koji je glavni sastojak svakog sušija?",
        "Koje je najveće more na svijetu?",
        "Izbaci uljeza:",
        "Koja je najveća rijeka na svijetu?",
        "Koji okean spaja istok i zabad?",
        "Koliko hobotnica ima srca?",
        "Izbaci uljeza:",
        "Koji je prirodni neprijatelj hobotnica?",
        "U koju kategoriju spada delfin?",
        "Korali su:",
        "Izbaci uljeza:"
    ];
}
function Tacni_Odgovori(){
    return [
        "losos",
        "riža",
        "sargaško more",
        "alge",
        "amazon",
        "tihi okean",
        "3",
        "delfin",
        "kit",
        "sisari",
        "životinje",
        "som"
    ];
}
function Odgovori() {
    return [
        ["losos", "šaran", "bucov", "mrena"],
        ["riža", "riba", "alge", "soja"],
        ["sargaško more", "baltičko more", "crno more", "crveno more"],
        ["alge", "delfin", "koral", "losos"],
        ["amazon", "nil", "bosna", "una"],
        ["tihi okean", "atlanski okean", "indijski okean", "južni okean"],
        ["3", "1", "2", "4"],
        ["delfin", "losos", "šaran", "smuđ"],
        ["kit", "delfin", "ajkula", "oktopus"],
        ["sisari", "ribe", "gmizavci", "vodozemci"],
        ["životinje", "biljke", "glive", "ništa od ponuđenog"],
        ["som", "losos", "zubatac", "haringa"]
    ];
}
(
    () => {
        document.querySelector("#next").innerHTML = "Ne znam";
        Start();
    }
)()