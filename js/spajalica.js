function Start(){
    var game = Get_A_Game(Get_Random_Number(1));
    var left = Mix_Up_Array(game.pairs.map((item) => {return item.split('-')[0]}));
    var right = Mix_Up_Array(game.pairs.map((item) => {return item.split('-')[1]}));
    var btns_left = document.querySelectorAll("button[pair=left]");
    var btns_right = document.querySelectorAll("button[pair=right]");
    var description = document.querySelector("#naslov");

    description.innerHTML = game.description;
    
    btns_left.forEach((item, index) => {
        item.innerHTML = left[index];
    });

    btns_right.forEach((item, index) => {
        item.innerHTML = right[index];
    })
}