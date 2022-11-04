/**
 * INICIAR SESION
 */
const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');
const formulario2 = document.getElementById('formulario2');
const input = document.querySelectorAll('#formulario2');
const parrafo2 = document.getElementById('error');

formulario2.addEventListener('submit', (e) =>{
    e.preventDefault()
    let error = ""
    let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    let enter = false
    parrafo2.innerHTML = ""

    if(!regexEmail.test(username.value)){
        error += `El email no es válido <br>`
        enter = true
    }if(password.value.length <8){
        error  += `La contraseña no es válida <br>`
        enter = true
    }if(enter){
        parrafo2.innerHTML = error
    }else{
        parrafo2.innerHTML = "¡Bienvenido!"
    }
})


/**REGISTRO Y CREACION DE OBJETO USUARIO */
let usuarios = [];
function registroUsuario(){
   
   let usuario = {
       nombre: document.getElementById("nombre").value,
       correo: document.getElementById("correo").value,
       contraseña: document.getElementById("contraseña").value
    }
       usuarios.push(usuario);
   
   console.log(usuarios);
   localStorage.setItem("usuario", JSON.stringify(usuarios));
   //document.forms[0].reset();
}


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
 
 formulario.addEventListener('submit', (e) =>{
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
    if(contraseña2.value.length <8){
        warnings += `La contraseña no es válida <br>`
        entrar = true
    }
    if(contraseña.value !== contraseña2.value){
        warnings += `La contraseña no coincide <br>`
        entrar = true
    }
    if (entrar){
          parrafo.innerHTML = warnings
        }else{
          parrafo.innerHTML = "¡Bienvenido!"
        }
        console.log(contraseña.value)
        console.log(contraseña2.value)
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