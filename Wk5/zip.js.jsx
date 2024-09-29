function isMNZi(code) {
    //All MN zip are 55001 and 56763
    if (code>=55001 && code<56763){
        return true;
    }else {
        return false;
    }
}

console.log(isMNZi(55303))
console.log(isMNZi('55421'))// it works with numbers on string as well
console.log(isMNZi('57422'))