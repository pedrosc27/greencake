const queryString = window.location.search;
let baseUrl = "http://localhost:8080/api/producto/";
let categoria = getAllUrlParams(queryString).categoria; 
let pagina = getAllUrlParams(queryString).pagina; 
let url ="productos?pagina=1";
if (categoria == undefined && pagina == undefined) {
     url = baseUrl + 'productos?pagina=1';
}
if (categoria != undefined) {
    url = baseUrl + 'categoria/pagina?categoria='+categoria+'&pagina=1';
    console.log(url);
}
if (pagina != undefined) {
    url = baseUrl + 'productos?pagina='+pagina;
}


async function getProducts(){
    //let response = await fetch(url);
    let data = await fetchProducts();
    addProductHtml(data);
}

async function fetchProducts(){
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

function addProductHtml(data){
    let pagination = data.totalPages;
    let body = "";
    for (let index = 0; index < data.content.length; index++) {
        body += '<div class=" col-6 col-sm-3">\n' +
        '<a href="producto.html?id='+data.content[index].producto_id +'">\n' +
        '<div class="contenedor-pastel">\n' +
        '<img class="img-fluid" src="../assets/pasteles/' + data.content[index].imagen + '" alt="">\n' +
        '</div>\n' +
        '</a>\n' +
        '</div>';
    }
    let li ="";
    if(pagination > 1){
        for (let index = 0; index < pagination; index++) {
            let nuevoIndex = index +1;
            console.log(pagina);
            console.log(nuevoIndex);
            if(pagina == nuevoIndex ){
                li += "<li><a class='active' href=" +'?pagina='+ nuevoIndex +"> " + nuevoIndex +"</a></li>";
            }
            else if(pagina == undefined && nuevoIndex ==1){
                li += "<li><a class='active' href=" +'?pagina='+ nuevoIndex +"> " + nuevoIndex +"</a></li>";
            }
            else{
                li += "<li><a href=" +'?pagina='+ nuevoIndex +"> " + nuevoIndex +"</a></li>";
            }
            
        }
    }

   

    const itemsContainer = document.getElementById("list-items");
    const ulItemsContainer = document.getElementById("ul-list-items");
    itemsContainer.innerHTML += body;
    ulItemsContainer.innerHTML += li;
}

getProducts();





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