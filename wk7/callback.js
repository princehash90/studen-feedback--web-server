let animals = ['Giraffe','Elephant', 'Yak']

animals.forEach(function (animal, index) {
    console.log(animal, index)
})

//another way to write the above code
animals.forEach( (animal,index ) => {// the arrow can be used instead of function
    console.log(animal)
})

//another variant
animals.forEach( (function (animal) {
    console.log(animal.toUpperCase())
}))

//arrow notation method

animals.forEach( (animal)=> {
    console.log(animal)
})

//minimal code
animals.forEach( animal => console.log(animal.toUpperCase()))