// escuchar eventos
//botonIngresar.addEventListener('click',)
botonIngresar.onclick = () => {
    if (inputNombre.value || inputApellido.value) {
    const usuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
    }
    localStorage.setItem('infoUsuario', JSON.stringify(usuario))