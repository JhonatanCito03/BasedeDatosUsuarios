let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const selectTipoCliente = document.getElementById('tipoCliente');

usuarios.forEach(usuario => {
  const option = document.createElement('option');
  option.value = usuario.numeroDocumento; 
  option.text = usuario.nombre;
  selectTipoCliente.appendChild(option);
});
console.log(usuarios[0].nombre)