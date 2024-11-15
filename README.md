# Práctica Formativa Obligatoria 3

## Justificación

Profe, inclui en este README los pasos detallados que seguí para resolver los ejercicios, con el fin de que puedan ser visualizados de manera más clara y organizada. En el archivo main.js, los comentarios están redactados en forma de texto explicativo, y quiero asegurarme de que se entiendan correctamente. Por eso, describo los procesos de resolución de cada ejercicio aquí, de manera más estructurada.

## Ejercicios

# Ejercicio 1: Calcular el área de un rectángulo

## Descripción

La función `calcularAreaRectangulo()` recibe dos parámetros: **ancho** y **alto** de un rectángulo, y retorna el cálculo de su área, utilizando la fórmula **área = ancho * alto**.

## Proceso de resolución

1. Definí la función `calcularAreaRectangulo` que recibe dos parámetros: **ancho** y **alto**.
2. Utilicé la operación de multiplicación para calcular el área.
3. En lugar de usar `console.log()` directamente, utilicé `return` para devolver el valor de la operación y luego lo imprimí con `console.log()`.
4. Probé la función con tres valores distintos de ancho y alto, y separé las soluciones con líneas divisorias para mayor claridad.

## Código
```javascript
function calcularAreaRectangulo(ancho, alto) {
  return ancho * alto;
}

console.log("Solución 1: " + calcularAreaRectangulo(5, 3)); // Resultado: 15
console.log("Solución 2: " + calcularAreaRectangulo(6, 4)); // Resultado: 24
console.log("Solución 3: " + calcularAreaRectangulo(7, 5)); // Resultado: 35
```
# Ejercicio 2: Contar palabras en una cadena

## Descripción

La función `contarPalabras()` recibe una cadena de texto y devuelve el número de palabras que contiene. Utiliza el método `split()` para separar la cadena por los espacios y luego cuenta el número de elementos en el array resultante.

## Proceso de resolución

1. Creé la función `contarPalabras` que usa el método `split(" ")` para separar las palabras en un array.
2. Luego, utilicé la propiedad `length` para obtener el número de elementos (palabras) en el array.
3. Probé la función con tres cadenas de texto diferentes y las separé con líneas divisorias.

## Código
```javascript
function contarPalabras(cadena) {
  let cantidadDePalabras = cadena.split(" ").length;
  return cantidadDePalabras;
}

console.log("Solución 1: " + contarPalabras("Humahuaca es un lugar copado")); // Resultado: 5
console.log("Solución 2: " + contarPalabras("The Secret Life of Walter Mitty es una buena comedia")); // Resultado: 10
console.log("Solución 3: " + contarPalabras("Yerba Mate Andresito es una buena yerba")); // Resultado: 7
```
# Ejercicio 3: Invertir una cadena

## Descripción

La función `invertirCadena()` toma una cadena de texto y la invierte utilizando los métodos `split()`, `reverse()` y `join()`. Primero, convierte la cadena en un array de caracteres, luego la invierte y finalmente la convierte de nuevo a una cadena.

## Proceso de resolución

1. Usé el método `split("")` para dividir la cadena en un array de caracteres.
2. Luego, utilicé el método `reverse()` para invertir el array.
3. Finalmente, utilicé `join("")` para unir el array invertido y obtener la cadena final.
4. Probé la función con tres palabras distintas y separé las soluciones con líneas divisorias.

## Código
```javascript
function invertirCadena(cadena) {
  let cadenaInvertida = cadena.split("").reverse().join("");
  return cadenaInvertida;
}

console.log("Solución 1: " + invertirCadena("Pepita")); // Resultado: "atipeP"
console.log("Solución 2: " + invertirCadena("Puede")); // Resultado: "edeuP"
console.log("Solución 3: " + invertirCadena("Volar")); // Resultado: "raloV"
```
# Ejercicio 4: Verificar si una cadena es un palíndromo

## Descripción

La función `esPalindromo()` recibe una cadena y la compara con su versión invertida. Si ambas cadenas son iguales, devuelve `true`; de lo contrario, devuelve `false`.

## Proceso de resolución

1. Definí la función `esPalindromo()` que invierte la cadena utilizando la función `invertirCadena()` que ya había creado.
2. Luego, utilicé un condicional `if` para comparar la cadena original con la cadena invertida.
3. Probé la función con tres cadenas, incluyendo palabras que son palíndromos y una que no lo es.

## Código
```javascript
function esPalindromo(cadena) {
  let cadenaInvertida = invertirCadena(cadena);
  if (cadenaInvertida == cadena) {
    return true;
  } else return false;
}

console.log("Solución 1: " + esPalindromo("neuquen")); // true
console.log("Solución 2: " + esPalindromo("rallar")); // true
console.log("Solución 3: " + esPalindromo("Flor")); // false
```

# Ejercicio 5: Convertir la edad de un perro a años humanos

## Descripción

La función `edadCanina()` solicita al usuario mediante un `prompt` la edad de un perro y la convierte a años humanos multiplicando por 7. La entrada del usuario se valida para asegurarse de que sea un número positivo.

## Proceso de resolución

1. Creé la función `edadCanina()` que solicita al usuario la edad de su perro a través de un `prompt`.
2. Validé la entrada para asegurarse de que fuera un número válido y positivo.
3. Multipliqué la edad ingresada por 7 para obtener la equivalencia en años humanos y la mostré con un mensaje en la consola.
4. Como la entrada es dinámica, no incluí tres soluciones con diferentes valores, pero aseguré que el código validara correctamente la entrada.

## Código

```javascript
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

edadCanina();
```
