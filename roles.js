let user ={
    name: 'suh',
    password: 'dog',
    email: 'suh@gmail.com',
    roles: ['programmer', 'developer'],
    contact: {
        office: 'M1234',
        phone: '1234567890'
    }

}


user.salary = 243545
user.roles.push('server admin')
user.contact.location = 'Minneapolis'
console.log(user)
