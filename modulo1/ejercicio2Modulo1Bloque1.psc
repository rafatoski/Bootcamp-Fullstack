Algoritmo ejercicio2Modulo1Bloque1
	Escribir 'Bienvenido, este programa te muestra el factorial de tu numero'
	Definir numero, factorial, x Como Entero
	Escribir 'Para empezar dame un numero'
	Leer numero
	Si numero<0 Entonces
		Escribir 'Lo sentimos, el numero no se puede calcular deben ser numeros enteros mayores a 0'
	SiNo
		x <- 1
		factorial <- 1
		Mientras x<=numero Hacer
			factorial <- factorial*x
			// si el resultado del numero multiplicado por el anterior da un decimal, arrojara error porque se definio la variable como enteros. 
			x <- x+1
		FinMientras
		Escribir 'El factorial del numero ', numero, ' es igual a: ', factorial
	FinSi
FinAlgoritmo
