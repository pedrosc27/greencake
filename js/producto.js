
const tamano = document.getElementById("tamano");
const bizcocho = document.getElementById("bizcocho");
const relleno = document.getElementById("relleno");
const figura = document.getElementById("figura");
function guardarProducto() {    
    document.getElementById("buttonAlert").classList.remove("display-none");
    document.getElementById("buttonAlert").classList.add("show");
    
}
function cerrar() { 
    document.getElementById("buttonAlert").classList.remove("show");
    document.getElementById("buttonAlert").classList.add("display-none");
 }
