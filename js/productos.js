function addItem(item) {
    const itemHTML = '<div class=" col-6 col-sm-4">\n' +
        '<a href="">\n' +
        '<div class="contenedor-pastel color-' + item.color + '">\n' +
        '<img class="img-fluid" src="../assets/' + item.img + '" alt="">\n' +
        '<h6>' + item.name + '</h6>\n' +
        '</div>\n' +
        '</a>\n' +
        '</div>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}



addItem({
    'name': 'Pastel 1',
    'img': 'pastel1.png',
    'color': 'naranja'
});

addItem({
    'name': 'Pastel 2',
    'img': 'pastel2.png',
    'color': 'morado'
});
addItem({
    'name': 'Pastel 3',
    'img': 'pastel3.png',
    'color': 'naranja'
});

addItem({
    'name': 'Pastel 4',
    'img': 'pastel1.png',
    'color': 'morado'
});
addItem({
    'name': 'Pastel 5',
    'img': 'pastel2.png',
    'color': 'naranja'
});

addItem({
    'name': 'Pastel 6',
    'img': 'pastel3.png',
    'color': 'morado'
});
addItem({
    'name': 'Pastel 7',
    'img': 'pastel1.png',
    'color': 'naranja'
});

addItem({
    'name': 'Pastel 8',
    'img': 'pastel2.png',
    'color': 'morado'
});
addItem({
    'name': 'Pastel 9',
    'img': 'pastel3.png',
    'color': 'naranja'
});

addItem({
    'name': 'Pastel 10',
    'img': 'pastel1.png',
    'color': 'morado'
});
