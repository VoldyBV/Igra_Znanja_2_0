function Get_Words() {
    var words = Words();
    return Mix_Up_Array(words).slice(0, 3);
}
function Words () {
    return [
        "MISTREAT",
        "DESTROY",
        "CONFISCATE"
    ];
};

Start();