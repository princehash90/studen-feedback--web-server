let birds =['Owl', 'Robin','Eagle']
console.log(birds)

birds.forEach(function (bird,index) {
    // this code will repeat once for each object in the array
    //function will be called for each object in the array
    console.log(index, bird.toUpperCase())
})

// traditional loop
for (let x=0; x<birds.length; x++) {
    let bird= birds[x]
    console.log(x, bird)
    //console.log(birds[x])// another way to print
}