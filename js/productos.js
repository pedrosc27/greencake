function addItem(item) {
    const itemHTML = '<div class=" col-6 col-sm-3">\n' +
        '<a href="producto.html">\n' +
        '<div class="contenedor-pastel">\n' +
        '<img class="img-fluid" src="../assets/' + item.img + '" alt="">\n' +
        '</div>\n' +
        '</a>\n' +
        '</div>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}
addItem({
    'name': 'Pastel 1',
    'img': 'spooky.jpg',
    'color': 'naranja'
});

addItem({
    'name': 'Pastel 2',
    'img': 'spooky2.png',
    'color': 'morado'
});
addItem({
    'name': 'Pastel 3',
    'img': 'tematicas.jpg',
    'color': 'naranja'
});

addItem({
    'name': 'Pastel 4',
    'img': 'tematicas2.jpg',
    'color': 'morado'
});
addItem({
    'name': 'Pastel 5',
    'img': 'spooky.jpg',
    'color': 'naranja'
});

addItem({
    'name': 'Pastel 6',
    'img': 'spooky2.png',
    'color': 'morado'
});
addItem({
    'name': 'Pastel 7',
    'img': 'tematicas.jpg',
    'color': 'naranja'
});

addItem({
    'name': 'Pastel 8',
    'img': 'tematicas2.jpg',
    'color': 'morado'
});
addItem({
    'name': 'Pastel 9',
    'img': 'spooky.jpg',
    'color': 'naranja'
});

addItem({
    'name': 'Pastel 10',
    'img': 'spooky2.png',
    'color': 'morado'
});
addItem({
    'name': 'Pastel 11',
    'img': 'tematicas.jpg',
    'color': 'naranja'
});

addItem({
    'name': 'Pastel 12',
    'img': 'tematicas2.jpg',
    'color': 'morado'
});