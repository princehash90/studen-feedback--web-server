let hashObject={
    name:'hashim',
    password: 'zebra',
    email:'hashim@gmail.com',
    password:'miceCat',
    contact: {
        office: 'primrose',
        phone: '564-233-2422',
    },
    roles: ['student', 'developer']
}
console.log(hashObject)

hashObject.salary=10000// adding salary
console.log(hashObject)

hashObject.roles.push('server admin')// adding role to role array
console.log(hashObject)

hashObject.contact.location='Minneapolis'// adding location
console.log(hashObject)