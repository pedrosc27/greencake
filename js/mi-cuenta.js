/**
 * INICIAR SESION
 */
const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');
const formulario2 = document.getElementById('formulario2');
const input = document.querySelectorAll('#formulario');

button.addEventListener('click', (e)=>{
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }  
})

formulario2.addEventListener('button', e =>{
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    let ingresar = false
    parrafo.innerHTML = ""
    if(!regexEmail.test(username.value)){
        warnings += `El email no es válido <br>`
        ingresar = true
    }if(password.value.length <8){
        warnings += `La contraseña no es válida <br>`
        ingresar = true
    }if (ingresar){
    parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "¡Bienvenido!"
    }
})




/*
 * De aqui falta enviar estos objetos generadod a la API 
*/




/**
 * CREAR CUENTA falta la confirmacion de contraseña.
 */
 const formulario = document.getElementById('formulario');
 const inputs = document.querySelectorAll('#formulario');
 const nombre = document.getElementById('nombre');
 const correo = document.getElementById('correo');
 const contraseña = document.getElementById('contraseña');
 const contraseña2 = document.getElementById('contraseña2');
 const parrafo = document.getElementById('warnings');
 
 formulario.addEventListener('submit', e =>{
      e.preventDefault()
      let warnings = ""
      let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
      let entrar = false
      parrafo.innerHTML = ""
      if(nombre.value.length <2){
          warnings += `El nombre no es válido <br>`
          entrar = true
      }
      if(!regexEmail.test(correo.value)){
          warnings += `El email no es válido <br>`
          entrar = true
      }
      if(contraseña.value.length <8){
          warnings += `La contraseña no es válida <br>`
          entrar = true
     }
      if (entrar){
          parrafo.innerHTML = warnings
      }else{
          parrafo.innerHTML = "¡Bienvenido!"
      }
  })
 /**
  * PARA BOTONES DE SIGN IN Y SIGN UP
  */
 const signUpButton = document.getElementById('signUp');
 const signInButton = document.getElementById('signIn');
 const container = document.getElementById('container');
 
 signUpButton.addEventListener('click', () => {
     container.classList.add("right-panel-active");
 });
 
 signInButton.addEventListener('click', () => {
     container.classList.remove("right-panel-active");
 });