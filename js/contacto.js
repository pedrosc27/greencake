let nombre = document.getElementById('text');
let email = document.getElementById('email');
let number = document.getElementById('number');
let mensaje = document.getElementById('dudas');

function validar() {
    if(nombre.value.length >=3){
        return null;
    }

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.value.match(validRegex)) {
    return null;
    } /* Esta parte nos ayuda a validar los caracteres que iran en el contenedor de email*/

    if(typeOf (number.value)  == 'number'){
        return null;
    }

    if(mensaje.value.length >= 8){
        return null;
    }
}
