function Get_A_Game(game_index){
    switch(game_index){
        case 1: return {
            "A": ["COLOR", "WINE", "HOPE", "LIGHT", "WHITE"],
            "B": ["COLOR", "WINE", "SADNESS", "DARK", "BLACK"],
            "C": ["WALL", "COMMUNISM", "RICE", "CHOPSTICKS", "CHINA"],
            "D": ["WOOD", "FOREST", "FLUTE", "ASIA", "BAMBOO"],
            "final_answer": "PANDA"
        };
        default: break;
    }
}

(
    () => {
        var info = JSON.parse(sessionStorage.getItem("info"));
        document.querySelector("#final_answer_container button").innerHTML = "THE FINAL ANSWER";
        Start();
    }
)()