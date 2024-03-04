let text = 'The classes are itec 1150, itec 1250, itec 2560'

let replaced = text.replace('itec', 'ITEC')
console.log(replaced)
//how to replace things within strings
//only replaces the first instance found
let replacedAll = text.replace(/itec/g, 'ITEC')
console.log(replacedAll)
//this one replaces all instances found
let message = 'The classes are 1150, 1250, 2560'
let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&')
console.log(replaceRegex)
//match any 4 digit number and replace it with ITEC and the string that was replaced(the number)
