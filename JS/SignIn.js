let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

let datosCliente = document.getElementById('idnCliente')

usuarios.forEach(element => {
let option = document.createElement('option')
option.value = element.numeroDocumento
option.text = `${element.nombre} ${element.apellido}`
datosCliente.appendChild(option)
});
