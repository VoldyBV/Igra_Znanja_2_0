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
        "Which of the following fish is a sea fish?",
        "What is the main ingredient of sushi?",
        "What is the largest sea in the world?",
        "Kick the intruder out:",
        "What is the biggest river in the world?",
        "Which ocean connects the east and the west?",
        "How many hearts does an octopus have?",
        "Kick the intruder out:",
        "What is the natural enemy of the octopus?",
        "What category does a dolphin belong to?",
        "What are corals?",
        "Kick the intruder out:"
    ];
}
function Tacni_Odgovori(){
    return [
        "salmon",
        "rice",
        "Sargese Sea",
        "algae",
        "amazon river",
        "pacific ocean",
        "3",
        "dolphin",
        "whale",
        "mammals",
        "animals",
        "catfish"
    ];
}
function Odgovori() {
    return [
        ["salmon", "carp", "cod", "barbel"],
        ["rice", "fish", "algae", "soy"],
        ["Sargese Sea", "Baltic Sea", "Black Sea", "Red Sea"],
        ["algae", "dolphin", "coral", "salmon"],
        ["amazon river", "nile", "bosna", "una"],
        ["pacific ocean", "atlantic ocean", "indian ocean", "southern ocean"],
        ["3", "1", "2", "4"],
        ["dolphin", "salmon", "carp", "perch"],
        ["whale", "dolphin", "shark", "octopus"],
        ["mammals", "fish", "reptiles", "amphibians"],
        ["animals", "plants", "fungi", "none of the above"],
        ["catfish", "salmon", "toothfish", "herring"]
    ];
}
(
    () => {
        document.querySelector("#next").innerHTML = "I don't know";
        Start();
    }
)()