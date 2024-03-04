let age = 30
let usCitizenTime = 30
let stateOfResidence = 'Minnesota'
let stateWantToRepresent = 'Minnesota'

if (age >= 30 && usCitizenTime >= 9 && stateWantToRepresent === stateOfResidence) {
    //== for type coercion(comparing different data types) and === will check that the data types are the same
    console.log('You are eligible to be a senator!')
} else {
    console.log('You are not eligible to be a senator.')
}

//falsy values - undefined, null, empty lists, empty objects, 0, false
if ( false === 0){
    //the logic isn't very predictable for falsy values with ==
    console.log('the same!')
} else {
    console.log('not the same')
}