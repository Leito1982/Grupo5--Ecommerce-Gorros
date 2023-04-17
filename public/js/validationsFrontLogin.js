window.onload = function () {

  //capturo los elementos a validar, pongo las expresiones regulares y los campos para validar en el submit.
  const formulario = document.querySelector('#formulario');
  const inputs = document.querySelectorAll('#formulario .form-camp input');
  const expresiones = {
    email: /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i,
    password: /^.{8,30}$/
    }
  const campos = {
    email: false,
    password: false
  }  

  //funcion para validar el formulario, un caso para cada input  
  const validarFormulario = (e) => {

    switch (e.target.name) {
      case 'email':
        validarCampo(expresiones.email, e.target, "email")
      break;

      case 'password':
        validarCampo(expresiones.password, e.target, "password")
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
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
  })
  //evento submit del formulario
  formulario.addEventListener('submit', (e) => {
    
    if (campos.email == false || campos.password == false) {
      e.preventDefault();
    }
      
  })    
  
}