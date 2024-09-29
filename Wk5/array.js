let animals =['lion', 'tiger', 'cheetah']
console.log(animals)
console.log(animals[1])
console.log(animals[1000])

animals[3]='giraffe' // trying to set item number that is not on the array
console.log(animals)//js will just make the array bigger and will not crash

animals [1]='zebra'// assigning new array element
console.log(animals)

animals.push('elephant')// adds elements to the end of the array
console.log(animals)

let lastAnimal=animals.pop()//calls the elements that is removed. it also works like push
console.log(lastAnimal)
console.log(animals)


animals.unshift('wild cat')// adds element to the end of the array
console.log(animals)

let firstAnimals= animals.shift()// removes element at the beginning
console.log(firstAnimals)
console.log(animals)

animals.reverse()// reverses the order
console.log(animals)

animals.sort()// orders in alphabet
console.log(animals)

let animalLengths=animals.length// number of elements in the array
console.log(animalLengths)

console.log(animals.indexOf('lion'))// prints the number of the element in the array

console.log(animals.indexOf('walrus'))

if (animals.indexOf('walrus')==-1){
    console.log('Walrus is not the array')
}

if (animals.includes('cheetah')){//checking if an item is in the array
    console.log('cheetah is in the array')
}

console.log(animals.join(' * '))

animals.forEach(function (animal) {
    console.log(animal.toUpperCase())
    console.log(animal.length)// prints the length of each element in the array with uppercase
})

animals.forEach(function (animal) {
    console.log(animal.length)// prints just the length
})

animals.push('gazelle')

let animalNamelength= []// creating a new empty array
animals.forEach(function (animal) {
    let length =animal.length// gettin the length
    animalNamelength.push(length)// adding to the empty array with use of push
})

console.log(animalNamelength)


