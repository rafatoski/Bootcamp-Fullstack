// primero se define una funcion como el algoritmo
function ejercicio1Modulo1Bloque1 (inicio,fin) {
	console.log ("Bienvenido, este programa suma los numeros pares e impares");

	// se crean las variables y se inician a cero
	let sumaPares = 0;
	let sumaImpares = 0;
	// creamos el mientras con ciclo for
	console.log ("A continuacion una lista de numeros: ");
	for (let i = inicio; i <= fin; i++){
		// creamos el valor de inicio y lo comparamos con fin y si es menor se le agrega uno , hasta llegar al mismo valor del fin y completar el mientras
		
		if (i % 2 === 0) {
			// si es divisible entre dos es porque es par, y le sumamos un punto a la variable pares
			sumaPares += i;
		} else {
			// sino, es porque es impar y se lo sumamos a su variable respectiva
			sumaImpares += i;
		}
		console.log (i);
	}
	// escribimso el resultado
	console.log ("=======");
	console.log ("La sume de los numeros pares es: ", sumaPares);
	console.log ("La suma de los numeros impares es: " , sumaImpares);
}
//disparador
ejercicio1Modulo1Bloque1(1,50);