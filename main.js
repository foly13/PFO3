/*Ejercicio 1: Calcular area rectangulo */

function calcularAreaRectangulo(ancho, alto) {
  return ancho * alto;
}
console.log("_______________________________");
console.log("Ejercicio 1: Calcular el área de un rectángulo");
console.log("_______________________________");

console.log("Solución 1:");
console.log("Resultado: " + calcularAreaRectangulo(5, 3));
console.log("______________");

console.log("Solución 2:");
console.log("Resultado: " + calcularAreaRectangulo(6, 4));
console.log("______________");

console.log("Solución 3:");
console.log("Resultado: " + calcularAreaRectangulo(7, 5));
console.log("______________");

/*
Para resolver el primer ejercicio, Empecé definiendo la función calcularAreaRectangulo(), 
que toma como parámetros el ancho y alto del rectángulo y luego los multiplica. 
Luego, agregué los console.log para mostrar tres ejemplos de salida y chequear que los resultados sean correctos.
Para finalizar, agregué un console.log() antes de cada resultado con el número de solución, 
y después de cada resultado, un console.log() con una línea divisoria, ya que así lo requería la consigna.
Cuando terminé el ejercicio, agregué tres console.log() antes de que se impriman por consola los resultados:
 uno con el título del ejercicio y otro antes y después del título, con líneas divisorias, para que esté más prolijo.
*/

/*Ejercicio 2: Contar palabras en una cadena*/
function contarPalabras(cadena) {
  let cantidadDePalabras = cadena.split(" ").length;
  return cantidadDePalabras;
}

console.log("_______________________________");
console.log("Ejercicio 2: Contar palabras en una cadena");
console.log("_______________________________");

console.log("Solución 1:");
console.log("Resultado: " + contarPalabras("Humahuaca es un lugar copado"));
console.log("______________");

console.log("Solución 2:");
console.log("Resultado: " +
contarPalabras("The Secret Life of Walter Mitty es una buena comedia")
);
console.log("______________");

console.log("Solución 3:");
console.log(
  "Resultado: " + contarPalabras("Yerba Mate Andresito es una buena yerba")
);
console.log("______________");

/* Lo primero que hice fue crear la función contarPalabras. Para esto, 
busqué en internet si había algún método que contara las palabras de un string. 
Encontré que el método split() me podía ayudar. A este se le debe pasar como parámetro un separador 
(en este caso, uso un espacio). Lo que hace este método es transformar un string en un array de strings. 
Luego, con el método length, cuento la cantidad de palabras del array, y ese valor es lo que retorna la función.
Luego, escribí las tres soluciones. La primera es la de la consigna de la PFO, 
y le agregué los comentarios respectivos para ordenar las salidas por consola, igual que en el primer ejercicio.
 */

/*Ejercicio 3:  Invertir una cadena */
function invertirCadena(cadena) {
  let cadenaInvertida = cadena.split("").reverse().join("");
  return cadenaInvertida;
}

console.log("__________________________________");
console.log("Ejercicio 3: Invertir una cadena");
console.log("___________________________________");

console.log("Solución 1:");
console.log("Cadena invertida: " + invertirCadena("Pepita"));
console.log("______________");

console.log("Solución 2:");
console.log("Cadena invertida: " + invertirCadena("Puede"));
console.log("______________");

console.log("Solución 3:");
console.log("Cadena invertida: " + invertirCadena("Volar"));
console.log("______________");

/*
En primer lugar, creé la función invertirCadena. En esta, se me ocurrió usar el método split(), 
ya que me permite separar los elementos de un string en un array para luego poder ordenarlo. 
A diferencia del ejercicio anterior, el parámetro que pasamos es un string vacío, porque necesitamos dividir 
por carácter.
Luego, para invertir los elementos del array, utilicé el método reverse() y agregué un console.log 
para probar el código, que funcionaba, pero me devolvía un array, no una cadena. Entonces, busqué en internet 
un método en JS para pasar de array a string y encontré que esto lo podía hacer con el método join().
Luego, pensé dos soluciones más y agregué los comentarios, al igual que en los otros ejercicios.
 */

/* Ejercicio 4: Encontrar el palíndromo */

function esPalindromo(cadena) {
  let cadenaInvertida = invertirCadena(cadena);
  if (cadenaInvertida == cadena) {
    return true;
  } else return false;
}

console.log("_______________________________");
console.log("Ejercicio 4: Encontrar el palíndromo");
console.log("_______________________________");

console.log("Solución 1:");
console.log("¿Es palindromo?: " + esPalindromo("neuquen"));
console.log("______________");

console.log("Solución 2:");
console.log("¿Es palindromo?: " + esPalindromo("rallar"));
console.log("______________");

console.log("Solución 3:");
console.log("¿Es palindromo?: " + esPalindromo("Flor"));
console.log("______________");

/* 
En primer lugar, creé la función esPalindromo, para la cual se me ocurrió que debería haber un condicional 
para evaluar si la palabra que se recibe en el parámetro de la función es igual a la palabra invertida.
Primero, definí la variable cadenaInvertida y copié esta línea del ejemplo anterior 
“let cadenaInvertida = cadena.split("").reverse().join("");”. En el if, evalué si cadenaInvertida 
es igual a la cadena que recibe por parámetro. En caso de que así sea, la función devuelve true; 
en caso de que no, la función devuelve false.
Después, me di cuenta de que, en vez de volver a escribir los métodos para invertir una cadena, 
podía usar la función del ejercicio anterior invertirCadena, y eso hice.
Agregué un console.log para probar y todo funcionó.
Luego, agregué dos soluciones más y los comentarios como en los otros ejercicios para ordenar el código.
*/

/* Ejercicio 5: Crear un programa para convertir la edad de un perro a años humanos */

function edadCanina() {
  let edadCanina;
  do {
    edadCanina = prompt("Ingrese la edad de su perro");
    edadCanina = Number(edadCanina);
    if (isNaN(edadCanina) || edadCanina <= 0) {
      console.log("Por favor, ingrese un número positivo");
    }
  } while (edadCanina <= 0);

  let edadHumana = edadCanina * 7;
  console.log(`Tu perro tiene ${edadHumana} años humanos.`);
}

console.log("_______________________________");
console.log("Ejercicio 5: Convertir la edad de un perro a años humanos");
console.log("_______________________________");

edadCanina();
console.log("______________");

/*
Primero, creé la función edadCanina. Dentro, definí una variable llamada edadCanina en la que guardo lo que 
se ingrese en el prompt. Luego, defino otra variable, edadHumana que multiplica lo ingresado en el prompt por 7. 
Lo probé y la consola me devolvía un undefined. Me imaginé que era por el tipo de dato de la función, así que 
lo cambié a Number. Seguía devolviendo undefined. Era que me había olvidado del return.
Luego de eso, se me ocurrió usar una validación para validar que la entrada ingresada sea positiva y, 
además, sea un número válido. Cuando hice la validación, me di cuenta de que la consigna pedía que no retornara 
un valor la función, sino que imprimiera un mensaje. Entonces, cambié el return por un console.log.
Como en este caso el ingreso de datos es por medio de un prompt, no agregué las distintas opciones de soluciones. 
Sí, un comentario con el título del ejercicio.
Cuando probé el código con números no válidos, me di cuenta de que lanzaba el mensaje por consola, 
pero no me volvía a pedir que ingresé la edad canina. Entonces, se me ocurrió usar un bucle do while."
 */
