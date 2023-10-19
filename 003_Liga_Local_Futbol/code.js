/* 
    - La liga la disputan 10 equipos
    - Para cada equipo necesitas:
        * Nombre
        * Puntos
        * Partidos jugados, ganados, empatados y perdidos
        * Goles a favor y goles en contra
*/
class Equipo {
    constructor(nombre, puntos, partidos, goles) {
        this.nombre = nombre;
        this.puntos = puntos;
        this.partidos = {
            jugados: partidos[0],
            ganados: partidos[1],
            empatados: partidos[2],
            perdidos: partidos[3]
        };
        this.goles = {
            aFavor: goles[0],
            enContra: goles[1]
        };
    }

    mostrarInfoConsola() {
        console.log(`Información del equipo ${this.nombre}:`);
        console.log(`Puntos: ${this.puntos}`);
        console.log(`Partidos jugados: ${this.partidos.jugados}`);
        console.log(`Partidos ganados: ${this.partidos.ganados}`);
        console.log(`Partidos empatados: ${this.partidos.empatados}`);
        console.log(`Partidos perdidos: ${this.partidos.perdidos}`);
        console.log(`Goles a favor: ${this.goles.aFavor}`);
        console.log(`Goles en contra: ${this.goles.enContra}`);
    }

    mostrarInfo() {
        return `
        Información del equipo ${this.nombre}:
        <br>Puntos: ${this.puntos}
        <br>Partidos jugados: ${this.partidos.jugados}
        <br>Partidos ganados: ${this.partidos.ganados}
        <br>Partidos empatados: ${this.partidos.empatados}
        <br>Partidos perdidos: ${this.partidos.perdidos}
        <br>Goles a favor: ${this.goles.aFavor}
        <br>Goles en contra: ${this.goles.enContra} <br><br>`;
    }
}

// Crear 10 equipos con información aleatoria
const equiposFicticios = [
    "Real Madrid",
    "FC Barcelona",
    "Atletico Madrid",
    "Sevilla FC",
    "Valencia CF",
    "Real Betis",
    "Villarreal CF",
    "Real Sociedad",
    "Levante UD",
    "Espanyol"
    // Agrega más nombres de equipos aquí
];

const equipos = [];

for (let i = 1; i <= 10; i++) {
    const nombre = equiposFicticios[i-1];
    const puntos = Math.floor(Math.random() * 50); // Puntos aleatorios entre 0 y 49
    const partidos = [
        Math.floor(Math.random() * 20), // Partidos jugados
        Math.floor(Math.random() * 20), // Partidos ganados
        Math.floor(Math.random() * 20), // Partidos empatados
        Math.floor(Math.random() * 20)  // Partidos perdidos
    ];
    const goles = [
        Math.floor(Math.random() * 50), // Goles a favor
        Math.floor(Math.random() * 50)  // Goles en contra
    ];

    const equipo = new Equipo(nombre, puntos, partidos, goles);
    equipos.push(equipo);
}

// Mostrar la información de los 10 equipos por consola
equipos.forEach((equipo, index) => {
    console.log(`Equipo ${index + 1}`);
    equipo.mostrarInfoConsola();
    console.log("------------------------------");
});

// ----------------------------------------------------------------

// Función para agregar la información de un equipo al DOM utilizando el método mostrarInfo()
function agregarEquipoAlDOM(equipo) {
    const equiposContainer = document.getElementById("equipos-container");

    // Crear un elemento div para representar un equipo
    const equipoDiv = document.createElement("div");
    equipoDiv.className = "equipo"; // Agregar una clase para el estilo CSS

    // Llamar al método mostrarInfo() para obtener la información del equipo
    const infoEquipo = equipo.mostrarInfo();

    // Crear un elemento de div para mostrar la información con saltos de línea
    const infoDiv = document.createElement("div");
    infoDiv.innerHTML = infoEquipo; // Establecer contenido HTML en lugar de texto

    // Agregar el div con la información al div del equipo
    equipoDiv.appendChild(infoDiv);

    // Agregar el div del equipo al contenedor de equipos
    equiposContainer.appendChild(equipoDiv);
}

// Agregar la información de cada equipo al DOM
equipos.forEach(agregarEquipoAlDOM);

// Función para ordenar los equipos por puntos (de mayor a menor)
function ordenarEquiposPorPuntos(equipos) {
    return equipos.sort((a, b) => b.puntos - a.puntos);
}

// Ordenar los equipos
const equiposOrdenados = ordenarEquiposPorPuntos(equipos);

// Crear una tabla HTML
const tabla = document.createElement("table");
tabla.innerHTML = `
    <thead>
        <tr>
            <th>Posición</th>
            <th>Equipo</th>
            <th>Puntos</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
`;

// Agregar filas a la tabla con los equipos ordenados
const tbody = tabla.querySelector("tbody");
equiposOrdenados.forEach((equipo, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${index + 1}</td>
        <td>${equipo.nombre}</td>
        <td>${equipo.puntos}</td>
    `;
    tbody.appendChild(fila);
});

// Agregar la tabla al contenedor en el DOM
const equiposContainerMain = document.getElementById("equipos-container-main");
equiposContainerMain.appendChild(tabla);
