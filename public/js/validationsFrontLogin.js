window.onload = function () {

  const formulario = document.querySelector('#formulario');
  const inputs = document.querySelectorAll('#formulario .form-camp input');
  const expresiones = {
    email: /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i,
    password: /^.{8,30}$/
    }

  const validarFormulario = (e) => {
    switch (e.target.name) {
      case 'email':
        if (expresiones.email.test(e.target.value)) {
          e.target.style.backgroundColor = 'white';
          document.querySelector('#input-error-email').classList.remove('input-error-email-active')
          document.querySelector('#input-error-email').classList.add('input-error-email')
        }else{
          e.target.style.backgroundColor = 'pink';
          document.querySelector('#input-error-email').classList.add('input-error-email-active')
          document.querySelector('#input-error-email').classList.remove('input-error-email')
        }
      break;
      case 'password':
        if (expresiones.password.test(e.target.value)) {
          e.target.style.backgroundColor = 'white';
          document.querySelector('#input-error-password').classList.remove('input-error-password-active')
          document.querySelector('#input-error-password').classList.add('input-error-password')
        }else{
          e.target.style.backgroundColor = 'pink';
          document.querySelector('#input-error-password').classList.add('input-error-password-active')
          document.querySelector('#input-error-password').classList.remove('input-error-password')
        }
      break;
    }
  }

  inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
  })

  formulario.addEventListener('submit', (e) => {

    e.preventDefault();
      
  })    
  
}