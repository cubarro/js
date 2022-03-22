const body = document.querySelector('body')
const tbody = document.querySelector('tbody')
const btnAddUpdate = document.querySelector('#btnAddUpdate')
const iNombre   = document.querySelector('#iNombre')
const iEmail    = document.querySelector('#iEmail')
const iPassword = document.querySelector('#iPassword')

/* 
+ C Crear 
+ R Leer 
  U Actualizar
  D Borrar
 */

body.onload = () => {

  // const users = getUsers()
  // console.log(users)
  let trs = []

  users.forEach( (u) => {
    // console.log(e)
    const tr = createRow(u)
    trs.push(tr)
  } )
  // Meter estructura de datos en tbody
  tbody.append(...trs)
}

function createRow(u){
  // alert('hola')
  const tr       = document.createElement('tr')

  // Borrar
  const tdDelete = document.createElement('td')
  const iDelete = document.createElement('i')
  iDelete.className = 'fas fa-trash'

  // Actualizar
  const tdUpdate = document.createElement('td')
  const iUpdate = document.createElement('i')
  iUpdate.className = 'fas fa-pen'
  
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

btnAddUpdate.onclick = (e) => {
  // https://youtu.be/kXt_55factU?t=3113
  const newUser = createUser( iNombre.value, iEmail.value, iPassword.value ) 
  // alert(newUser)
  const tr = createRow( newUser )
  tbody.appendChild( tr )
  e.preventDefault()
}