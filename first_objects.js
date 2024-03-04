let user = {username: 'Suh', password: 'Him Jones'}
//creates an object with a name and password
//keep in mind, square brackets are arrays, curly brackets are objects

for (let name in user) {
    console.log(name, user[name])
    //loop over an object
}
console.log(user.username)
console.log(user['username'])
console.log(user.password)
console.log(user['password'])
//same code, two different ways to display the same thing
let whatProperty = 'password'
console.log(user[whatProperty])
//this method lets you use variable names in the object

let usernameProperty = 'username'
console.log(user[usernameProperty])

user.password = 'elephant'
console.log(user)
//can change properties with this method as well
user['password'] = 'capybara'
console.log(user)

user.email = 'suh@gmail.com'
console.log(user)
console.log(user.email)

