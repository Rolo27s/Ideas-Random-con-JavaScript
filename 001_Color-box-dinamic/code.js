const container = document.getElementById('container');

let paleta = ['#F39C12', '#C0F312', '#12F3E5', '#F312AF', '#F31212'];

// Genero la paleta en div's 
let i = 1;
paleta.forEach(color => {
    const $box = document.createElement('div');
    $box.className = `box-${i}`;
    $box.style.width = '80px';
    $box.style.height = '80px';
    $box.style.backgroundColor = color;
    container.appendChild($box);
    i++;
});

// Intervalo cada 2500ms
setInterval(() => {
    // Rotación del array original
    const lastValue = paleta.pop(); // Recojo el ultimo elemento, lo quito del array original y lo guardo en lastValue.
    paleta.unshift(lastValue); // Cojo el ultimo valor y lo pongo el primero

    let j = 1;
    paleta.forEach(color => {
        const $box = document.querySelector(`.box-${j}`);
        $box.style.backgroundColor = color;
        // container.appendChild($box); // Si no comento esta línea estaría generando cada vez el container y solo quiero reescribirlo.
        j++;
    });
}, 2500);
