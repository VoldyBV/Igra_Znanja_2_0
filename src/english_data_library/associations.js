function Get_A_Game(game_index){
    switch(game_index){
        case 1: return {
            "A": ["COLOR", "WINE", "HOPE", "LIGHT", "WHITE"],
            "B": ["COLOR", "WINE", "SADNESS", "DARK", "BLACK"],
            "C": ["WALL", "COMMUNISM", "RICE", "CHOPSTICKS", "CHINA"],
            "D": ["WOOD", "FOREST", "FLUTE", "ASIA", "BAMBOO"],
            "final_answer": "PANDA"
        };
        case 2: return {
            "A": ["BLACK", "WHITE", "VOODOO", "SPELLS", "MAGIC"],
            "B": ["LOVE", "POISON", "BOTTLE", "ELIXIR", "POTION"],
            "C": ["STICK", "SWEEPING", "DUSTPAN", "FLYING", "BROOM"],
            "D": ["SACRAFICE", "PROCESS", "SUMMONING", "CANDLE", "RITUAL"],
            "final_answer": "WITCH"
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