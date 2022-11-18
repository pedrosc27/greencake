const queryString = window.location.search;
let baseUrl = "http://localhost:8080/api/producto/id?id=";
let id = getAllUrlParams(queryString).id; 
let  url = baseUrl + id;
console.log(url);


console.log("holaaaaaaaaaaaa");
const tamano = document.getElementById("tamano");
const bizcocho = document.getElementById("bizcocho");
const relleno = document.getElementById("relleno");
let nombreWhats="";

async function getProduct(){
    //let response = await fetch(url);
    let data = await fetchProduct();
    console.log(data);
    console.log("data");
    addProductHtml(data);
}

async function fetchProduct(){
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

function addProductHtml(data){
    nombreWhats=data.nombre_producto;
    let titulo = '<h3> Pastel '+data.nombre_producto+'</h3>';
    let texto = '<p>'+data.descripcion_producto+'</p>';
    let imagen =  '<img class="img-fluid fantasma-filtros" src="../assets/pasteles/'+ data.imagen +' " alt=""></img>';
    const addTitulo = document.getElementById("nombre");
    const addImagen = document.getElementById("imagen-producto");
    addTitulo.innerHTML = titulo + texto;
    addImagen.innerHTML = imagen;
}
 

function getAllUrlParams(url) {

    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  
    // we'll store the parameters here
    var obj = {};
  
    // if query string exists
    if (queryString) {
  
      // stuff after # is not part of query string, so get rid of it
      queryString = queryString.split('#')[0];
  
      // split our query string into its component parts
      var arr = queryString.split('&');
  
      for (var i = 0; i < arr.length; i++) {
        // separate the keys and the values
        var a = arr[i].split('=');
  
        // set parameter name and value (use 'true' if empty)
        var paramName = a[0];
        var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
  
        // (optional) keep case consistent
        paramName = paramName;
        if (typeof paramValue === 'string') paramValue = paramValue;
  
        // if the paramName ends with square brackets, e.g. colors[] or colors[2]
        if (paramName.match(/\[(\d+)?\]$/)) {
  
          // create key if it doesn't exist
          var key = paramName.replace(/\[(\d+)?\]/, '');
          if (!obj[key]) obj[key] = [];
  
          // if it's an indexed array e.g. colors[2]
          if (paramName.match(/\[\d+\]$/)) {
            // get the index value and add the entry at the appropriate position
            var index = /\[(\d+)\]/.exec(paramName)[1];
            obj[key][index] = paramValue;
          } else {
            // otherwise add the value to the end of the array
            obj[key].push(paramValue);
          }
        } else {
          // we're dealing with a string
          if (!obj[paramName]) {
            // if it doesn't exist, create property
            obj[paramName] = paramValue;
          } else if (obj[paramName] && typeof obj[paramName] === 'string'){
            // if property does exist and it's a string, convert it to an array
            obj[paramName] = [obj[paramName]];
            obj[paramName].push(paramValue);
          } else {
            // otherwise add the property
            obj[paramName].push(paramValue);
          }
        }
      }
    }
  
    return obj;
  }


  getProduct();

  function guardarProducto() {    
    var win = window.open(`https://wa.me/5218131275658?text=Hola,+estoy+interesado+en+el+Pastel+:+*${nombreWhats}*+,+Tamaño+:+${tamano.value}+,+Bizcocho+:+${bizcocho.value}+,+Relleno+:+${relleno.value}+`, '_blank');
   
    
}
function cerrar() { 
    document.getElementById("buttonAlert").classList.remove("show");
    document.getElementById("buttonAlert").classList.add("display-none");
 }


