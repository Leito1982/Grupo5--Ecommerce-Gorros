window.onload = function () {
    //capturo los elementos a validar, pongo las expresiones regulares y los campos para validar en el submit.
    const formulario = document.querySelector('#formulario');
    const inputs = document.querySelectorAll('#formulario .form-control input');
    const description = document.querySelector('#description')

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/,
        descripcion: /^[a-zA-ZÀ-ÿ\s]{20,80}$/,
        imagen: /^.*\.(jpg|gif|png|jpeg|webp)$/
    }

    const campos = {
      name: false,
      description: false,
      image: false
    }

      //funcion para validar el formulario, un caso para cada input  
  const validarFormulario = (e) => {

    switch (e.target.name) {
      case 'name':
        validarCampo(expresiones.nombre, e.target, "name")
      break;
    
      case 'description':
        validarCampo(expresiones.descripcion, e.target, "description")
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
  description.addEventListener('keyup', validarFormulario);
  description.addEventListener('blur', validarFormulario);
  
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
    
    if (campos.name == false || campos.description == false || campos.image == false) {
      e.preventDefault();
    }
      
  }) 

}