function pulsar(){
    botonRegistrar = document.getElementById('formulario').style.display = 'block';
    ocultarregistro = document.getElementById('registro').style.display = 'none'
    mostrarTexto = document.getElementById('texto').style.display = 'block'
    
    botonRegistrar;
    ocultarregistro;
    mostrarTexto;
    
}

function getData(){
    lista = [{
    "nombre": document.getElementById('nombre').value,
    "segundoNombre": document.getElementById('nombre2').value,
    "apellido": document.getElementById('apellido').value,
    "apellido2": document.getElementById('apellido2').value,
    "tipoDocumento": document.getElementById('seleccion').value,
    "numeroDocumento": document.getElementById('numerodocumento').value,
    "correo": document.getElementById('correo').value,
    "constraseña":document.getElementById('contraseña').value,
    "tipoDeCliente": document.getElementById('tipoCliente').value,
    }];
    //real
   // localStorage.setItem("DATOS",JSON.stringify(lista));
    if(lista[0].nombre === '' || lista[0].nombre === ' '){document.getElementById('errorName').style.display = 'block'}
    if(lista[0].tipoDocumento === 'none'){document.getElementById('errorDocumentoTipo').style.display = 'block'}
    if(lista[0].apellido === ''){document.getElementById('errorApellido').style.display = 'block'}
    if(lista[0].apellido2 === ''){document.getElementById('errorApellido2').style.display = 'block'}
    if(isNaN(lista[0].numeroDocumento)){document.getElementById('errorNumdocumento').style.display = 'block'}
    if(lista[0].numeroDocumento === '' || lista[0].numeroDocumento === ' '){document.getElementById('errorNumdocumento').style.display = 'block'}
    if(lista[0].numeroDocumento){document.getElementById('errorNumdocumento').style.display = 'none'}
    if(validarcorreo()=== false){document.getElementById('errorCorreo').style.display = 'block'}
    if(validarcorreo()=== true){document.getElementById('errorCorreo').style.display = 'none'}
    console.table(lista)
    if(lista[0].constraseña === '' || ' '){document.getElementById('errorContraseña').style.display = 'block'}
    let contraseña2 = document.getElementById('contraseña2').value;
    if(contraseña2 === '' || ' '){document.getElementById('errorContraseña21').style.display = 'block'}
    if(lista[0].constraseña !== contraseña2){document.getElementById('errorContraseña2').style.display = 'block'}
    if(contraseña2 !== '' || ' '){document.getElementById('errorContraseña21').style.display = 'none'}
    if(lista[0].constraseña !== '' || ' '){document.getElementById('errorContraseña').style.display = 'none'}
    
    mensaje()

    function validarcorreo(){
        var referencia = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return referencia.test(lista[0].correo)
    }
    
    function mensaje(){
        let pasar = confirm('parece que la informacion es correcta. ¿desea ir a la página principal?')
        if(pasar === true){window.location.href = "/MainPage.html"}
    }
    //Aquí va el contenido original de la datastorage
    localStorage.setItem('lista',JSON.stringify(lista))
    const datosGuardados = localStorage.getItem('lista')
    const usuarioRecuperado = JSON.parse(datosGuardados)
}


