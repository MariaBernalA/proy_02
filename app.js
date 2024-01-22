const functions = require('./functions.js')//importando el módulo functions.js y asignándolo a la variable functions

console.log(functions);//Se imprime en la consola el objeto functions ,esto permite ver qué funciones están disponibles en ese módulo.
process.stdout.write("Ejercicios\n\n");//se utiliza para escribir directamente en la salida estándar se esta imprimiendo el texto "Ejercicios" seguido de dos saltos de línea).

console.log(functions.add(5,3));//se utiliza la función add del objeto functions para sumar y luego se imprime el resultado en la consola.
console.log(functions.substract(2,8));//se utiliza la función substract del objeto functions para restar y luego se imprime el resultado en la consola.
console.log(functions.multiply(2,8));//se utiliza la función multiply del objeto functions para multiplicar y luego se imprime el resultado en la consola.
console.log(functions.divide(2,0.9));//se utiliza la función divide del objeto functions para dividir y luego se imprime el resultado en la consola.
