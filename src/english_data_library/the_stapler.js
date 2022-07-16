function Get_A_Game(game_index){
    var game = {};
    game.description = Get_A_Description(game_index);
    game.pairs = Get_Pairs(game_index);
    console.log(game);
    return game;
}
function Get_A_Description(game_index){
    switch(game_index){
        case 1: return "Football clubs and the cities where they are located";
        default: break;
    }
}
function Get_Pairs(game_index){
    switch(game_index){
        case 1: return [
            "PARTIZAN-BELGRADE",
            "JUVENTUS-TORINO",
            "ARSENAL-LONDON",
            "BAYERN-MUNICH",
            "AJAX-AMSTERDAM",
            "HAJDUK-SPLIT",
            "ATLETICO-MADRID",
            "BORUSSIA-DORTMUND"
        ];
        default: break;
    }
}

Start();