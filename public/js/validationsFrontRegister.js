window.onload = function () {
    //capturo los elementos a validar, pongo las expresiones regulares y los campos para validar en el submit.
    const formulario = document.querySelector('#formulario');
    const inputs = document.querySelectorAll('#formulario .form-control input');
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
        apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
        email: /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i,
        password: /^.{8,40}$/,
        imagen: /^.*\.(jpg|gif|png|jpeg|webp)$/
    }
    const campos = {
        nombre: false,
        apellido: false,
        email: false,
        password: false,
        imagen: false
    }
    //funcion para validar el formulario, un caso para cada input  
  const validarFormulario = (e) => {

    switch (e.target.name) {
      case 'firstName':
        validarCampo(expresiones.nombre, e.target, "firstName")
      break;

      case 'lastName':
        validarCampo(expresiones.apellido, e.target, "lastName")
      break;

      case 'email':
        validarCampo(expresiones.email, e.target, "email")
      break;

      case 'password':
        validarCampo(expresiones.password, e.target, "password")
      break;

      case 'image':
        validarCampo(expresiones.imagen, e.target, "image")
      break;
    }
  }
  //funcion para validar cada input
  const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
      input.style.backgroundColor = 'white';
      document.querySelector(`#camp-${campo} .input-error`).classList.remove('input-error-active');
      campos[campo] = true;
    }else{
      input.style.backgroundColor = 'pink';
      document.querySelector(`#camp-${campo} .input-error`).classList.add('input-error-active');
      campos[campo] = false;
    }
  }
  //agrego los eventos a cada input
  inputs.forEach((input) => {
    if(input.name == 'image') {
        input.addEventListener('input', validarFormulario);

    }else{
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    }
  })
    
  
  //evento submit del formulario
  formulario.addEventListener('submit', (e) => {
    
    if (campos.nombre == false || campos.apellido == false || campos.email == false || campos.password == false || campos.imagen == false) {
      e.preventDefault();
    }
      
  })   
}