
// nada, primero se define la funcion 
function ejercicio2Modulo1Bloque1(){
	console.log ("Bienvenido, este programa te muestra el factorial de tu numero");
	//leer el numero
	let numero = parseInt (prompt("Para empezar dame un número: " ));
	//verificar el numero
	if (numero < 0 || isNaN(numero)) {
		console.log("Lo sentimos, el numero no se puede calcular deben ser numeros enteros mayores a 0")
	} else {
		// iniciamos la variable
		let x = 1;
		let factorial = 1;
		//ciclo mientras
		while (x <= numero) {
			factorial *= x;
			x++;
		}
		//escribir resultado
		console.log ("El factorial del numero: ", numero, "Es igual a: ", factorial);
	}
}

//disparador
ejercicio2Modulo1Bloque1();