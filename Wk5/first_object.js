let user= {username: 'mike', password:'lion'}
console.log(user.username)
console.log(user['username'])
console.log(user.password)
console.log(user['password'])

let whatPropery='password'
console.log(user[whatPropery])

let usernamePoperty='username'
console.log(user[usernamePoperty])

user.password='mice'
console.log(user.password)

user['password']='alligator'
console.log(user)

user.email='lion@gmail.com'
console.log(user.email)
console.log(user)
