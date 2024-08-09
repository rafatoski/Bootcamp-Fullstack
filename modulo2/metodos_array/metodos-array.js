let personas = [
    {nombre: "Armando", edad: 18},
    {nombre: "rafael", edad:28}
];


let nombres = personas.map(function(persona){
    return persona.nombre;
});

console.log(nombres);