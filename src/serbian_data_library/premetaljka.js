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
        "ZAPLIJENITI"
    ];
};
function Clues() {
    return [
        "Vrsta ptice",
        "Ispeći - sinonim",
        "Konfiskovati - sinonim"
    ]
}
(
    () => {
        document.querySelector("#clue-button").innerHTML = "Opis riječi";
        Start();
    }
)();