const users = [ 
  new User( 'Carmen Alicia',   'caalmadu@gmail.com', 'qwer12' ),
  new User( 'María del Pilar', 'madepilo@gmail.com', 'asdf12' ),
  new User( 'Santiago Josué',  'sajoloma@gmail.com', 'qwer34' ),
  new User( 'Corlos Pacheco',  'pache@yahoo.com',    'abc1234')
]

function getUsers() {
  return users
}

function createUser( nombre, email, password ) {
  const newUser = new User( nombre, email, password )
  users.push(newUser)
  return newUser
}

function updateUser( i, nvoNombre, nvoEmail, nvoClave ) {
  users[i].nombre = nvoNombre
  users[i].email = nvoEmail
  users[i].password = nvoClave
}

function deleteUser(i){
  users.splice(i, 1)
}