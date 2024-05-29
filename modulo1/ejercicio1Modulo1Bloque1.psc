Algoritmo ejercicio1Modulo1Bloque1
	Escribir "Bienvenido, este programa suma los números pares e impares";
	Escribir  "A continuación una lista de números: " ;
	Definir x, pares, impares Como Entero
	x = 1; 
	pares = 0;
	impares = 0;
	Mientras x <= 50 Hacer	
		Escribir x
		Si x mod 2 == 0 Entonces
			pares = pares + x
		SiNo
			impares = impares + x
		Fin Si
		x = x +1
	Fin Mientras
	Escribir " ============ ";
	Escribir "La suma de los números pares es: " , pares
	Escribir  "La suma de los números impares es: " , impares
	Escribir  "Gracias por usar el programa";
FinAlgoritmo
