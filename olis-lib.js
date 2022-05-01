function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randDec(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)+Math.random();
}
function chance(percentage){
    if (Math.floor(Math.random() * 101) >= 100-percentage) {
        return true;
    }
}
