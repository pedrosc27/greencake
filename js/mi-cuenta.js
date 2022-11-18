function check(e) {
    tecla = (document.getElementById('nombre')) ? e.keyCode : e.which;
    // Patrón de entrada, en este caso solo acepta letras
    patron = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
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

 formulario.addEventListener('submit', async(e) =>{
      e.preventDefault()
      let warnings = "";
      let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
      let entrar = false;
      parrafo.innerHTML = "";

      if(nombre.value.length <2){
        warnings = `El nombre no es válido <br>`
        entrar = true
    }
      if(!regexEmail.test(correo.value)){
        warnings = `El email no es válido <br>`
        entrar = true
    }
    if(contraseña.value.length <8){
        warnings = `La contraseña no es válida <br>`
        entrar = true
    }
    if(contraseña.value !== contraseña2.value){
        warnings = `La contraseña no coincide <br>`
        entrar = true
    }
    if (entrar){
          parrafo.innerHTML = warnings;
          formulario.reset();
        }else{
            if(await registroUsuario()){
                parrafo.innerHTML = "¡Bienvenido, ya puedes iniciar sesión!";
                await registroUsuario();
                formulario.reset();
            }else
                parrafo.innerHTML = "El correo ya existe";
        }
        console.log(contraseña.value)
        console.log(contraseña2.value)
    })

/**
 * INICIAR SESION
 */
const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');
const formulario2 = document.getElementById('formulario2');
const input = document.querySelectorAll('#formulario2');
const parrafo2 = document.getElementById('error');

formulario2.addEventListener('submit', async(e) =>{
    e.preventDefault()
    let error = ""
    let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    let enter = false
    parrafo2.innerHTML = ""

    if(!regexEmail.test(username.value)){
        error += `El email no es válido <br>`;
        enter = true
    }if(password.value.length <8){
        error  += `La contraseña no es válida <br>`;
        enter = true
    }if(enter){
        parrafo2.innerHTML = error;
    }else{
        if(await login()){
            parrafo2.innerHTML = "¡Bienvenido!";
            window.location.href = "../index.html";
        }else{
            parrafo2.innerHTML = "Usuario o contraseña incorrecto <br>";
        }
        
    }
})


/**REGISTRO DE USUARIO - Almacenamiento local*/
 let usuarios = [];
 let usuario = {
    nombre: "",
    correo: "",
    contraseña: ""
};

let nombre1 = document.getElementById("nombre").value;
let correo1 = document.getElementById("correo").value;
let contraseña1 = document.getElementById("contraseña").value;
async function registroUsuario(){
    
    let validacion = false;
    usuario = {
        nombre: nombre,
        correo: correo,
        contraseña: contraseña
    }
    fetchRegisterStatus();
    /*
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].correo == usuario.correo)
            validacion =true;
    }

    if(validacion)
        alert("El correo ya existe");
    else{
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        let data = await fetchRegisterStatus();
        console.log(data);
        } 
        */                                     
}


async function fetchRegisterStatus() {
    try{
        let response = await fetch('https://awiwitch-greencake.herokuapp.com/api/usuario/register', {
            method: 'POST',
            headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({  
            "nombre_usuario": nombre1,
            "email": correo1,
            "password": contraseña1,
            "isActive": true
            })
        });
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw {message: message, status: response.status};
        }
            const registerUser = await response.json();
            console.log(registerUser);
            return registerUser;
        }catch (error) {
            console.error('There has been a problem with your fetch operation:', error.message);
            if(error.status === 400){
                console.log("El correo ya existe");
        }
    }
}
  

 
 /**
  * INICIAR SESION - Con local storage
  */
async function login(){
    const email= document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let respuest = await fetch('https://awiwitch-greencake.herokuapp.com/api/usuario/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            "email": email,
            "password": password
         })
        })
        console.log(respuest);


    let user = localStorage.getItem('usuarios');
    

    let data = JSON.parse(user);
    
    let validacionData = false;

    for(let i = 0; i < data.length; i++){
        if(data[i].correo == email && data[i].contraseña == password){
            validacionData = true;
            break;
        }else{
            console.log(data.correo);
            break;
        }
    }
    return validacionData;
 }
 



  
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
