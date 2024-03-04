function shout(text) {
    //use the word function to define a function
    //text is the parameter that the function applies to
    let shouty_text = text.toUpperCase() + '!!!'
    //create a variable and make it uppercase, plus the exclamations
    return shouty_text
}

console.log(shout('hello world'))
let message = shout('hello web programmers')
console.log(message)

function f_to_c (f, decimalplaces) {
    let  celsius = (f -32) * 5/9
    //equation for converting fahrenheit to celsius
    if (decimalplaces){ //undefined values are considered to be false
        return celsius.toFixed(decimalplaces)
    } else {
        return celsius
        //limits it to a certain number of decimal points, will round up
    }
    }

//just another function
let todayTemp = 75
todayCelsius = f_to_c(todayTemp)
console.log(todayCelsius)