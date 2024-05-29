function ejercicio3Modulo1Bloque1(){
	console.log("Bienvenido, este programa calcula los números primos");
	let numero = parseInt(prompt("Ingrese un número para verificar si es un número primo: "));
	let contador = 0;
	// ciclo mientras
	for (let i = 2; i <= numero / 2; i++) {
		if (numero % i === 0) {
			contador++;
		}
	}
	if (contador === 0) {
		console.log(" === ");
		console.log(numero + " Es un número primo");
	} else {
		console.log("===");
		console.log(numero + "No es un número primo, es un número compuesto");
	}
	console.log("Gracias por usar el programa");
}

ejercicio3Modulo1Bloque1();