function Get_a_Game(){
    var game = {};
    switch(Get_Random_Number(10)){
        case 1:
            game.naslov = "Grčki bogovi";
            game.correct = ["Hestija", "Zevs", "Dionis", "Demetra", "Hera", "Niksa", "Had"];
            game.wrong = ["Merkur", "Mars", "Jupiter", "Saturn", "Neptun", "Morana", "Vesna"];
            break;
        case 2:
            game.naslov = "Međunarodni sistem jedinica";
            game.correct = ["s", "kg", "mol", "cd", "K", "A", "m"];
            game.wrong = ["N", "g", "m/s", "W", "Pa", "Wb", "km"];
            break;
        case 3:
            game.naslov = "Ulazne jedinice";
            game.correct = ["tastatura", "miš", "mikrofon", "kamera", "skener", "džojstik", "veb kamera"];
            game.wrong = ["monitor", "slušalice", "zvučnik", "štampač", "projektor", "ploter", "GPS"];
            break;
        case 4:
            game.naslov = "Izlazne jedinice";
            game.correct = ["monitor", "slušalice", "zvučnik", "štampač", "projektor", "ploter", "GPS"];
            game.wrong = ["tastatura", "miš", "mikrofon", "kamera", "skener", "džojstik", "veb kamera"];
            break;
        case 5:
            game.naslov = "Domaće životinje";
            game.correct = ["pas", "krava", "koza", "ovca", "mačka", "kokoška", "svinja"];
            game.wrong = ["som", "tigar", "miš", "lav", "gepard", "slon", "nilski konj"];
            break;
        case 6:
            game.naslov = "Riječne ribe";
            game.correct = ["som", "šaran", "mrena", "amur", "bucov", "štuka", "smuđ"];
            game.wrong = ["haringa", "bakalar", "arbun", "losos", "inćun", "orada", "oslić"];
            break;
        case 7:
            game.naslov = "Morske ribe";
            game.correct = ["haringa", "bakalar", "arbun", "losos", "inćun", "orada", "oslić"];
            game.wrong = ["som", "šaran", "mrena", "amur", "bucov", "štuka", "smuđ"];
            break;
        case 8:
            game.naslov = "Metali";
            game.correct = ["Fe", "Au", "Ag", "Zr", "W", "Rf", "Db"];
            game.wrong = ["H", "Li", "Na", "K", "Rb", "Cs", "Fr"];
            break;
        case 9:
            game.naslov = "Glavni gradovi";
            game.correct = ["Sarajevo", "Zagreb", "Beograd", "Podgorica", "London", "Pariz", "Oslo"];
            game.wrong = ["Bihać", "Modriča", "Banja Luka", "Šamac", "Mersej", "Tuluz", "Doboj"];
            break;
        case 10:
            game.naslov = "Gradovi Bosne i Hercegovine";
            game.correct = ["Modriča", "Bihać", "Doboj", "Bijeljina", "Brčko", "Banja Luka", "Sarajevo"];
            game.wrong = ["Zagreb", "Beograd", "Mersej", "Podgorica", "Novi Sad", "Niš", "Čačak"];
            break;
        default: break;
    }
    return game;
}
Start();