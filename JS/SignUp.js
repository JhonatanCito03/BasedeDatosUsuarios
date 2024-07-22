function pulsar() {
  botonRegistrar = document.getElementById("formulario").style.display =
    "block";
  ocultarregistro = document.getElementById("registro").style.display = "none";
  mostrarTexto = document.getElementById("texto").style.display = "block";
  botonRegistrar;
  ocultarregistro;
  mostrarTexto;
}

function getData() {
  const nombre = document.getElementById("nombre").value;
  const segundoNombre = document.getElementById("nombre2").value;
  const apellido = document.getElementById("apellido").value;
  const apellido2 = document.getElementById("apellido2").value;
  const tipoDocumento = document.getElementById("seleccion").value;
  const numeroDocumento = document.getElementById("numerodocumento").value;
  const correo = document.getElementById("correo").value;
  const contraseña = document.getElementById("contraseña").value;
  const tipoCliente = document.getElementById("tipoCliente").value;
  const dataUsuarios = [
    {
      "nombre": nombre,
      "segundoNombre": segundoNombre,
      "apellido": apellido,
      "apellido2": apellido2,
      "tipoDocumento": tipoDocumento,
      "numeroDocumento": numeroDocumento,
      "correo": correo,
      "constraseña": contraseña,
      "tipoDeCliente": tipoCliente,
    },
  ];

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.push(dataUsuarios);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  function mensaje() {
    let pasar = confirm(
      "parece que la informacion es correcta. ¿desea ir a la página de servicios?"
    );
    if (pasar === true) {
      window.location.href = "/HTML/factura.html";
    }
  }
  mensaje();

}
