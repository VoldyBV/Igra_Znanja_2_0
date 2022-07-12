function Get_A_Game(game_index){
    var game = {};
    
    game.final_answer = Get_Rjesenja(game_index);
    game.questions = Get_Pitanja(game_index);
    game.correct_answers = Get_Correct_Answers(game_index);
    game.answers = Get_Answers(game_index);

    return game;
}
function Get_Rjesenja(which){
    switch(1) {
        case 1: return "riba";
        default: break;
    }
}
function Get_Pitanja(which){
    switch(1){
        case 1: return [
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
}
function Get_Correct_Answers(which){
    switch(1){
        case 1: return [
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
        default: break;
    }
}
function Get_Answers(which){
    switch(1){
        case 1: return [
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
        default: break;
    }
}
(
    () => {
        document.querySelector("#konacno_rjesenje").innerHTML = "KONAČNO RJEŠENJE";
        Start();
    }
)();