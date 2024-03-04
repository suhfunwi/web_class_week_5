function grades(gpa) {
    //define the function and parameter
if (gpa >= 0 && gpa <= 4){
    return true
}else {
    return false
    //if loop to make sure it's between 0 and 4
}
}

console.log(grades(-1))
console.log(grades(1))
console.log(grades(4.1))
console.log(grades(-3))
console.log(grades(4))
console.log(grades(2.5))

