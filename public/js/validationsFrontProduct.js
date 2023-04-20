window.onload = function () {
    //capturo los elementos a validar, pongo las expresiones regulares y los campos para validar en el submit.
    const formulario = document.querySelector('#formulario');
    const inputs = document.querySelectorAll('#formulario .form-control input');

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/,
        descripcion: /^[a-zA-ZÀ-ÿ\s]{20,100}$/,
        imagen: /^.*\.(jpg|gif|png|jpeg|webp)$/
    }

    const campos = {
        nombre: false,
        descripcion: false,
        imagen: false
    }

      //funcion para validar el formulario, un caso para cada input  
  const validarFormulario = (e) => {

    switch (e.target.name) {
      case 'name':
        validarCampo(expresiones.nombre, e.target, "name")
      break;
    
      case 'descrption':
        validarCampo(expresiones.password, e.target, "descrption")
      break;

      case 'image':
        validarCampo(expresiones.imagen, e.target, "image")
      break;
    }
  }


}