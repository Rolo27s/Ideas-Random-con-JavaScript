function matrix() {
    const MAX = 100;

const my_array = [];

for (let i = 0; i < MAX; i++) {
    my_array.push(Math.floor(Math.random() * MAX));
}

console.log('Array de 100 elementos aleatorios');
for (let i of my_array) {
    console.log(my_array[i]);
}

/* 

Explicación de diferencia entre for...in y for...of

for...in:
    * Se utiliza para iterar sobre las propiedades enumerables de un objeto, incluyendo las propiedades heredadas de su prototipo.
    * Es más apropiado para objetos y se usa para iterar sobre las claves (nombres de propiedades) de un objeto.
    * No se recomienda su uso para iterar sobre matrices o arreglos, ya que puede incluir propiedades no numéricas además de las índices numéricos.

for...of:
    * Se utiliza para iterar sobre elementos iterables, como arreglos, cadenas, conjuntos y mapas.
    * Es más apropiado para iterar sobre los valores de una estructura de datos en lugar de las claves.
    * No incluye propiedades no numéricas ni propiedades heredadas de un objeto, por lo que es más seguro y predecible para iterar sobre arreglos y otros iterables.

*/

// Agrego el array al DOM
const container = document.getElementById('container');
const $fragment = document.createDocumentFragment();

let index = 1;
for (let i of my_array) {
    const div = document.createElement('div');
    div.className = `item-${index}`;
    div.textContent = i;
    $fragment.appendChild(div);
    index++;
}

container.appendChild($fragment);
}

matrix();
