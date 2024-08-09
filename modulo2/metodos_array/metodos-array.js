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

/* Encontrar un numero dentro del array  */

let numeros3 = [1,2,3,4,5,6];

let encontrar = numeros3.find( function(numero){
    return numero >2
});

console.log(encontrar);

/* Busque una cadena dentro del array */
let nombrePersonas = [
    {nombre: "armando", edad: 18},
    {nombre: "jorge" , edad: 21},
    {nombre: "Luis" , edad: 23},
    {nombre: "María" , edad: 12},
    {nombre: "Carlos" , edad: 16}
];

let personaEncontrada = nombrePersonas.find(nombrePersonas => nombrePersonas.starstWith('L'));
console.log(personaEncontrada)

/* push */

const frutas = ['manzana','platano'];

frutas.push('zanahoria');


console.log(frutas);


let numerosPares = [];
for(let i=1; i<=10; i++){
    if(i % 2 == 0){
        numerosPares.push(i);
    }
}