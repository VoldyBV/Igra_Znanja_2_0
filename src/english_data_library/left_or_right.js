function Get_a_Game(){
    var game = {};
    switch(Get_Random_Number(10)){
        case 1:
            game.naslov = "Greek Gods";
            game.correct = ["Hestia", "Zeus", "Dionysus", "Demeter", "Hera", "Nyx", "Hades"];
            game.wrong = ["Mercury", "Mars", "Jupiter", "Saturn", "Neptune", "Morana", "Vesna"];
            break;
        case 2:
            game.naslov = "International System of Units";
            game.correct = ["s", "kg", "mol", "cd", "K", "A", "m"];
            game.wrong = ["N", "g", "m/s", "W", "Pa", "Wb", "km"];
            break;
        case 3:
            game.naslov = "Input devices";
            game.correct = ["keyboard", "mouse", "microphone", "camera", "scanner", "joystick", "webcam"];
            game.wrong = ["VDA", "headset", "speaker", "printer", "projector", "plotter", "GPS"];
            break;
        case 4:
            game.naslov = "Output devices";
            game.correct = ["VDA", "headset", "speaker", "printer", "projector", "plotter", "GPS"];
            game.wrong = ["keyboard", "mouse", "microphone", "camera", "scanner", "joystick", "webcam"];
            break;
        case 5:
            game.naslov = "Domestic animals";
            game.correct = ["dog", "cow", "goat", "sheep", "cat", "chicken", "pig"];
            game.wrong = ["catfish", "tiger", "mouse", "lion", "cheetah", "elephant", "hippo"];
            break;
        case 6:
            game.naslov = "River fish";
            game.correct = ["catfish", "carp", "barbel", "carp", "crab", "pike", "perch"];
            game.wrong = ["herring", "cod", "salmon", "anchovy", "bream", "hake"];
            break;
        case 7:
            game.naslov = "Sea fish";
            game.correct = ["herring", "cod", "salmon", "anchovy", "bream", "hake"];
            game.wrong = ["catfish", "carp", "barbel", "carp", "crab", "pike", "perch"];

            break;
        case 8:
            game.naslov = "Metals";
            game.correct = ["Fe", "Au", "Ag", "Zr", "W", "Rf", "Db"];
            game.wrong = ["H", "Li", "Na", "K", "Rb", "Cs", "Fr"];
            break;
        case 9:
            game.naslov = "Capital cities";
            game.correct = ["Sarajevo", "Zagreb", "Belgrade", "Podgorica", "London", "Paris", "Oslo"];
            game.wrong = ["Bihać", "Modriča", "Banja Luka", "Šamac", "Marseille", "Toulouse", "Doboj"];
            break;
        case 10:
            game.naslov = "Cities of Bosnia and Herzegovina";
            game.correct = ["Modriča", "Bihać", "Doboj", "Bijeljina", "Brčko", "Banja Luka", "Sarajevo"];
            game.wrong = ["Zagreb", "Belgrade", "Marseille", "Podgorica", "Novi Sad", "Niš", "Čačak"];
            break;
        default: break;
    }
    return game;
}
Start();