const body = document.querySelector('body')
const tbody = document.querySelector('tbody')

body.onload = () => {
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
  tdNombre.textContent = 'Corlos Pacheco'

  // Email
  const tdCorreo = document.createElement('td')
  tdCorreo.textContent = 'pache@yahoo.com'

  // Password
  const tdPassword  = document.createElement('td')
  tdPassword.textContent = 'abc1234'

  // Insertar estructura de usuario en la página
  tdDelete.appendChild(iDelete)
  tdUpdate.appendChild(iUpdate)
  tr.append(tdDelete, tdUpdate, tdNombre, tdCorreo, tdPassword)
  // Meter estructura de datos en tbody
  tbody.appendChild(tr)
}

  // <tr>
  //   <td>
  //      <i class="fas fa-trash"></i>
  //     <img  src="./img/trash-solid.svg" width="20%" alt="borrar">
  //   </td>
  //   <td>
  //      <i class="fas fa-pen"></i>
  //     <img src="./img/pen-solid.svg" width="20%" alt="editar"></i>
  //   </td>
  //   <td>Corlos Pacheco</td>
  //   <td>pache@yahoo.com</td>
  //   <td>abc1234</td>
  // </tr>
