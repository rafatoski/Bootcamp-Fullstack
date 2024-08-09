let personas = [
    {nombre: "Armando", edad: 18},
    {nombre: "rafael", edad:28}
];


let nombres = personas.map(function(persona){
    return persona.nombre;
});

console.log(nombres);

/* filtrar los numeros que sean pares  */

let numeros = [1,2,3,4,5,6];
let pares = numeros.filter(function(numero){
    return numero % 2 === 0;
});

console.log(pares);

/* filtro palabras cortas  */
let palabras = ['Rafael','Carlos' , 'Manuela' , 'Mauro']
let palabrasMin = palabras.filter(function(palabra){
    return palabra.length <= 4;
});

console.log(palabrasMin);


/* Sumar todos los numeros que se encuentran dentro del array  */
let numeros2 = [1,2,3,4,5,6];
let suma = numeros.reduce(function(acumulador, numero){
    return acumulador + numero;
}, 0);

console.log(suma);