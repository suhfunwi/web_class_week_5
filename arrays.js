let animals = ['lion', 'tiger','cheetah']
//simple array
console.log(animals)
console.log(animals[2])
//searching for the index of one of the values in the array
animals[3] = 'leopard'
//JS will simply make the array bigger
console.log(animals)
console.log(animals[5])

animals[1] = 'antelope'
console.log(animals[1])
//changing elements in the array

animals.push('elephant')
console.log(animals)
//adding elements to the end of an array
let lastAnimal = animals.pop()
console.log(lastAnimal)
console.log(animals)
//removes elements form the end of an array
animals.unshift('deer')
console.log(animals)
//adds elements to the beginning of an array

let firstAnimal = animals.shift()
console.log(firstAnimal)
console.log(animals)
//remove data from the beginning
//push and pop are much more common
animals.reverse()
console.log(animals)
//reverses the order
animals.sort()
console.log(animals)
//sorts the array
let numberOfAnimals = animals.length
console.log(numberOfAnimals)
//shows the length of the array

console.log(animals.indexOf('lion'))
//shows the index of the value you search for
console.log(animals.indexOf('walrus'))
//if the value doesn't exist it returns -1
if (animals.indexOf('walrus') == -1) {
    console.log('walrus is not in the array')
}

if (animals.includes('cheetah')) {
    console.log('cheetah is in the array')
    //checks if something is in the array and returns a boolean
}

console.log(animals.join(' * '))
//connects together everything in the array with a string
// the default is to join with a comma

animals.forEach(function (animal){
    console.log(animal.toUpperCase())
    //using the array in a loop
})
animals.forEach(function (animal){
    console.log(animal.length)
    //shows the length of each animal name
})

animals.push('alligator')

let animalLength = []
animals.forEach(function (animal){
    let length = animal.length
    animalLength.push(length)
})
console.log(animalLength)
//puts the name lengths of the animals into another separate array