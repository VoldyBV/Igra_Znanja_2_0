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
        default: break;
    }
}

Start();