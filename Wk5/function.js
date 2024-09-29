function shout(text) {
    let shouty_text=text.toUpperCase() + '!!!'
    return shouty_text
}
console.log(shout('Hello world'))
let message = shout('Hello Programmers')
console.log(message)

function f_to_c(f, decimalPlaces) {
    let celsius=(f-32)*5/9
    if (decimalPlaces){// flase values. undefined  values are considered to be false
        return celsius.toFixed(decimalPlaces)// toFix rounds off to the nearest whole number until you specify the decimal
    }else{
        return celsius
    }

}

let todayTemp = 75
todayCelsicius  = f_to_c(todayTemp, 4)
console.log(todayCelsicius)
