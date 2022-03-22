const body = document.querySelector('body')
const tbody = document.querySelector('tbody')
const btnAddUpdate = document.querySelector('#btnAddUpdate')
const iNombre   = document.querySelector('#iNombre')
const iEmail    = document.querySelector('#iEmail')
const iPassword = document.querySelector('#iPassword')

/* 
+ C Crear 
+ R Leer 
+ U Actualizar
+ D Borrar
 */
btnAddUpdate.onclick = btnAddUser

body.onload = () => {
  fillTable()
}

function createRow(u, i){
  // alert('hola')
  const tr       = document.createElement('tr')

  // Borrar
  const tdDelete = document.createElement('td')
  const iDelete = document.createElement('i')
  iDelete.className = 'fas fa-trash'
  iDelete.onclick =  () => {
    const confirmo = confirm('¿Borrar ' + u.nombre + '?' )
    if (confirmo){
      deleteUser(i)
      clearTable()
      fillTable()
    }
  }

  // Actualizar
  const tdUpdate = document.createElement('td')
  const iUpdate = document.createElement('i')
  iUpdate.className = 'fas fa-pen'
  iUpdate.onclick = () => {
    // alert( 'Actualizar ' + i + ' ' + u.nombre )
    btnAddUpdate.textContent = 'Actualizar'
    iNombre.value = u.nombre
    iEmail.value = u.email
    iPassword.value = u.password
    btnAddUpdate.onclick = (e) => btnUpdateUser(e, i)
  }
  
  // Nombre
  const tdNombre = document.createElement('td')
  tdNombre.textContent = u.nombre

  // Email https://youtu.be/kXt_55factU
  const tdEmail  = document.createElement('td')
  tdEmail.textContent = u.email 

  // Password
  const tdPassword  = document.createElement('td')
  tdPassword.textContent = u.password

  // Insertar estructura de usuario en la página
  tdDelete.appendChild(iDelete)
  tdUpdate.appendChild(iUpdate)
  tr.append(tdDelete, tdUpdate, tdNombre, tdEmail, tdPassword)

  return tr

}

function btnAddUser (e) {
  // https://youtu.be/kXt_55factU?t=3981
  const i = getUsers().length
  // https://youtu.be/kXt_55factU?t=3113
  const newUser = createUser( iNombre.value, iEmail.value, iPassword.value ) 
  // alert(newUser)
  const tr = createRow( newUser )
  tbody.appendChild( tr )
  alert('Se agregó el registro ' + iNombre.value)
  e.preventDefault()
}

function btnUpdateUser (e, i) {
  updateUser(i, iNombre.value, iEmail.value, iPassword.value )
  clearTable()
  fillTable()
  alert('Se actualizó el registro ' + iNombre.value )
  iNombre.value = ''
  iEmail.value = ''
  iPassword.value = ''
  btnAddUpdate.textContent = 'Agregar'
  btnAddUpdate.onclick = btnAddUser
  e.preventDefault()
}

function clearTable () {
  tbody.innerHTML = ''
}

function fillTable () {
  // const users = getUsers()
  // console.log(users)
  let trs = []
  const users = getUsers()
  users.forEach( (u, i) => {
    // console.log(e)
    const tr = createRow(u, i)
    trs.push(tr)
  } )
  // Meter estructura de datos en tbody
  tbody.append(...trs)
}

