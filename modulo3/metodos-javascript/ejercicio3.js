let frutas = ['Manzana', 'Banana', 'Naranja', 'Mango', 'Fresa'];

// Añadir "Uva" al final del array
frutas.push('Uva');
console.log("Después de añadir Uva:", frutas);

// Eliminar el primer elemento del array
frutas.shift();
console.log("Después de eliminar el primer elemento:", frutas);

// Ordenar el array alfabéticamente
frutas.sort();
console.log("Después de ordenar:", frutas);

// Filtrar frutas que empiezan con "M"
let frutasConM = frutas.filter(fruta => fruta.startsWith('M'));
console.log("Frutas que empiezan con M:", frutasConM);