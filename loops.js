let birds = ['owl', 'robin', 'eagle']//array
console.log(birds)

birds.forEach(function (bird, index) {
    //repeat once for each object in array
    //function will be called for each object in the array
    console.log(index, bird.toUpperCase())
    //index shows you the counter
})

for (let  x = 0; x < birds.length; x++) {
    //another way to make a loop
    //traditional for loop
    let bird = birds[x]
    console.log(x, bird.toUpperCase())
//     x also shows you the counter
}
