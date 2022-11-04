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


/**REGISTRO DE USUARIO - Almacenamiento local*/
 let usuarios = [];
 let usuario = {
    nombre: "",
    correo: "",
    contraseña: ""
};
function registroUsuario(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;
    let validacion = false;
    usuario = {
        nombre: nombre,
        correo: correo,
        contraseña: contraseña
    }
    
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].correo == usuario.correo)
            validacion =true;
    }

    if(validacion)
        alert("El correo ya existe");
    else{
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }  
    console.log(usuarios);                                                
}

 
 /**
  * INICIAR SESION - Con local storage
  */
 function login(){
    let email= document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = localStorage.getItem('usuarios');
    console.log(user);

    let data = JSON.parse(user);
    console.log(data);

    for(let i = 0; i < data.length; i++){
        if(data[i].correo == email && data[i].contraseña == password){
            alert("Bienvenido");

            break;
        }else{
            console.log(data.correo);
            alert("Datos incorrectos");
            break;
        }
    }
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
