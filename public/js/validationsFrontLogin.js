window.onload = function () {

  let errores = [];
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const btnSubmit = document.querySelector(".button")
  let ulErrores = document.querySelector(".errores ul");
  ulErrores.style.color = 'red';

  //validaciones email
  email.addEventListener('blur', (e) => {
    errores = [];
    ulErrores.innerHTML = '';
    emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

    if(email.value == ""){
      errores.push("El campo email es obligatorio");
      email.style.backgroundColor = 'pink';
    }else if (emailRegex.test(e.target.value)) {
      email.style.backgroundColor = 'white';
    }else {
      email.style.backgroundColor = 'pink';
      errores.push("El formato del email no es válido");
    }

    errores.forEach(error => {
    ulErrores.innerHTML += `<li>${error}</li>`
    })   
  })

  email.addEventListener('input', (e) => {
    
    if (email.value != "") {
      email.style.backgroundColor = 'white';
      ulErrores.innerHTML = '';
    }else{
      email.style.backgroundColor = 'pink';  
    }
  })


  //validaciones password
  password.addEventListener('blur', (e) => {

  })

  btnSubmit.addEventListener('click', (e) => {
    if(errores.length > 0){
      e.preventDefault();
      
    }
  })   
}