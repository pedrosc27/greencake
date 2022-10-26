let nombre = document.getElementById('text');
let email = document.getElementById('email');
let number = document.getElementById('number');
let mensaje = document.getElementById('dudas');

function validar() {
    var validName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if(nombre.value.match(validName)){
        return null;
    }

    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(validEmail)) {
        return null;
    }

    var validNumber = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    if(number.value.match(validNumber)){
        return null;
    }

    var validMessage = /^.{1,255}$/;
    if(dudas.value.match(validMessage)){
        return null;
    }
}
console.log("Se validaron los datos")
