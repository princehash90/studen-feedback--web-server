function gpaValue(gpa) {
    if (gpa>=0 && gpa<=4) {
        return true
    }else {
        return false
    }

}
console.log(gpaValue(5))
console.log(gpaValue(4))
console.log(gpaValue(2.5))
console.log(gpaValue(-3))


function CityState(city, state) {
    let address =` ${city}, + ${state.toUpperCase()}`
    return address
}
console.log(CityState('Minneapolis', 'mn'))
let address = CityState('Houston', 'tx')
console.log(address)