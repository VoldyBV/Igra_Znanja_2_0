function Get_A_Game(game_index){
    var game = {};
    
    game.final_answer = Get_Rjesenja(game_index);
    game.questions = Get_Pitanja(game_index);
    game.correct_answers = Get_Correct_Answers(game_index);
    game.answers = Get_Answers(game_index);

    return game;
}
function Get_Rjesenja(which){
    switch(which) {
        case 1: return "fish";
        default: break;
    }
}
function Get_Pitanja(which){
    switch(which){
        case 1: return [
            "Which of the following fish is a sea fish?",
            "What is the main ingredient of sushi?",
            "What is the largest sea in the world?",
            "Kick the intruder out:",
            "What is the biggest river in the world?",
            "Which ocean connects the east and the west?",
            "How many hearts does an octopus have?",
            "Kick the intruder out:",
            "Koji je prirodni neprijatelj hobotnica?",
            "What is the natural enemy of the octopus?",
            "What are corals?",
            "Kick the intruder out:"
        ];
        default: break;
    }
}
function Get_Correct_Answers(which){
    switch(which){
        case 1: return [
            "salmon",
            "rice",
            "sargas sea",
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
        default: break;
    }
}
function Get_Answers(which){
    switch(which){
        case 1: return [
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
        default: break;
    }
}
(
    () => {
        document.querySelector("#konacno_rjesenje").innerHTML = "THE FINAL ANSWER";
        Start();
    }
)();