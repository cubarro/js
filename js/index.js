const body = document.querySelector('body')
const tbody = document.querySelector('tbody')

/* 
  C Crear 
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

  // Email
  const tdCorreo = document.createElement('td')
  tdCorreo.textContent = u.email

  // Password
  const tdPassword  = document.createElement('td')
  tdPassword.textContent = u.password

  // Insertar estructura de usuario en la página
  tdDelete.appendChild(iDelete)
  tdUpdate.appendChild(iUpdate)
  tr.append(tdDelete, tdUpdate, tdNombre, tdCorreo, tdPassword)

  return tr

}