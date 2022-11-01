/**
 * CREAR CUENTA
 */
 const nombre = document.getElementById("nombre");
 const correo = document.getElementById("correo");
 const contraseña = document.getElementById("contraseña");
 const formulario = document.getElementById('formulario');
 const inputs = document.querySelectorAll('#formulario');
 const parrafo = document.getElementById("warnings");
 
 formulario.addEventListener("submit", e =>{
     e.preventDefault()
     let warnings = ""
     let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
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
  * INICIAR SESION
  */
 
 
 
 
 
 
 /**
  * Esto venia con el otro formulario no se bien que sea.
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