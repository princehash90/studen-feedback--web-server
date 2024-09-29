console.log("Hello World!")

//3 ways to create variables

let color= 'blue'
var size=  'medium' // var not recommended
const  language = 'Javascript' // used to create final variable that wont change

let quantity=5
let distance=5.6
let text='Hello World!'
let message='Hi Programmers'
let todayTemp=75

console.log('There are '+quantity + 'programmers')

console.log("Today's temperature is " + todayTemp +"F" )

let tempC = (todayTemp-32) *5/9

console.log("Today's temperature in Celsius is "+tempC.toFixed(2)+"C")
console.log(`today's temperature is ${tempC.toFixed()}C and in Fahrenheit is ${todayTemp.toFixed()}F`)

let className ='Web Programming'
let classcode = 2560
let department = 'ITEC'

console.log(`This class is ${department} ${classcode} ${className}`)