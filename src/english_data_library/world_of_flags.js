function Get_A_Game() {
    var indexes = new Array(50);

    for(var i = 0;i < indexes.length;i++){
        indexes[i] = i+1;
    }

    var game = {};
    game.flag_index = Mix_Up_Array(indexes).slice(0, 5);
    game.flag_names = new Array(5);

    for(var i = 0;i < game.flag_names.length;i++){
        game.flag_names[i] = Get_A_Flag(game.flag_index[i]);
    }

    return game;
}
function Get_A_Flag(flad_id){
    switch(flad_id){
        case 1: return "ALGERIA";
        case 2: return "ARGENTINA";
        case 3: return "AFGHANISTAN";
        case 4: return "BANGLADESH";
        case 5: return "BELARUS";
        case 6: return "ECUADOR";
        case 7: return "COLOMBIA";
        case 8: return "AZERBAIJAN";
        case 9: return "BOLIVIA";
        case 10: return "BRAZIL";
        case 11: return "BRUNEI";
        case 12: return "BHUTAN";
        case 13: return "CHILE";
        case 14: return "MOLDOVA";
        case 15: return "ROMANIA";
        case 16: return "EGIPT";
        case 17: return "GEORGIA";
        case 18: return "GUYANA";
        case 19: return "INDONESIA";
        case 20: return "MONACO";
        case 21: return "INDIA";
        case 22: return "EAST TIMOR";
        case 23: return "JAPAN";
        case 24: return "ARMENIA";
        case 25: return "SOUTH KOREA";
        case 26: return "CAMBODIA";
        case 27: return "CANADA";
        case 28: return "LAOS";
        case 29: return "MALAYSIA";
        case 30: return "MYANMAR";
        case 31: return "CHINA";
        case 32: return "KYRGYZSTAN";
        case 33: return "NEPAL";
        case 34: return "PAKISTAN";
        case 35: return "PARAGUAY";
        case 36: return "PERU";
        case 37: return "SINGAPORE";
        case 38: return "UNITED ARAB REPUBLIC";
        case 39: return "NORTH KOREA";
        case 40: return "SRI LANKA";
        case 41: return "THAILAND";
        case 42: return "TUNISIA";
        case 43: return "TURKMENISTAN";
        case 44: return "TURKEY";
        case 45: return "UKRAINE";
        case 46: return "URUGUAY";
        case 47: return "UZBEKISTAN";
        case 48: return "VENEZUELA";
        case 49: return "VIETNAM";
        case 50: return "WESTERN SAHARA";
        default: return "";
    }
}
(
    () => {
        document.querySelector("#odgovor").placeholder = "Your answer...";
        document.querySelector("button.next-flag-btn").innerHTML = "Next flag";
        Start();
    }
)();