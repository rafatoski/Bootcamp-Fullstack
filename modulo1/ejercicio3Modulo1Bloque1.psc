Algoritmo ejercicio3Modulo1Bloque1
	Escribir 'Bienvenido, este programa calcula los numeros primos'
	Definir numero, contador Como Entero
	Escribir 'Ingrese un número para verificar si es un numero primo:'
	Leer numero
	contador <- 0
	Para i<-2 Hasta numero/2 Con Paso 1 Hacer
		Si numero MOD i=0 Entonces
			contador <- contador+1
		FinSi
	FinPara
	Si contador=0 Entonces
		Escribir ' === Calculando === '
		Esperar 3 Segundos
		Escribir numero, ' es un numero primo'
	SiNo
		Escribir ' === '
		Escribir numero, ' NO es un numero primo, es un numero compuesto'
	FinSi
	Escribir 'Gracias por usar el programa'
FinAlgoritmo
