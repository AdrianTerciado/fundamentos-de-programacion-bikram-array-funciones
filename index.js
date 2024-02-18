// 1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío

var arrayVacio = [];

// 2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)

var arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)

var arrayNumerosPares = [0, 2, 4, 6, 8];

// 4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]

var arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

// 5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma

function suma(a, b) {
    return a + b;
}

// 6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)

function potenciacion(a, b) {
    let resultado = 1;
    for (i = 0; i < b; i++) {
        resultado = a * resultado;
    }
    return resultado
}

// 7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]

function separarPalabras(a) {
    let array = a.split(" ");
    return array;
}

// 8.- Crea la función **repetirString** que acepte como argumento **un string y un número** y devuelva **un string que sea el resultado de concatenar el primer string el número dado de veces**

function repetirString(a, b) {
    let resultado = a;
    for (let i = 1; i < b; i++) {
        resultado = resultado + a;
    } return resultado;
}

// 9.- Crea la función **esPrimo** que acepte como argumento **un número** y devuelva ****true si es primo y false si no lo es****

function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {  // 1 no entraría, daría true. 2 no entraría, daría true. 3 entraría pero no se cumpliría la condicion. 
        if (numero % i === 0) {         // 4 entraría y cumpliría la condicion. 5 entraría pero se saldría porque no cumple
            return false;
        }
    }
    return true;
}

// 10.-  Crear la función **ordenarArray** que acepta como argumento **un array de números** y devuelva un **array ordenado de menor a mayor**

function ordenarArray(a) {
    let ordenado;
    ordenado = a.sort(function (a, b) { a - b });
    return ordenado;
}


// 11.- Crear la función **obtenerPares** que acepta como argumento **un array de números** y devuelva un **array con los elementos pares**

function obtenerPares(a) {
    let arrayPares = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            arrayPares.push(a[i]);
        }
    } return arrayPares;
}

// 12.- Crear la función **pintarArray** que acepte como argumento **un array** y devuelva **una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'**

/* Esta solución bikram no me la da por buena porque elimina los espacios
 function pintarArray(array) {
    let cadena = array.toString();
    let resultado = "[" + cadena + "]";
    console.log(resultado);
    return resultado;
} */

/* Solución Vero */
/* function pintarArray(array) {
    return `[${array.join(', ')}]`;
} */

/* Solución */
function pintarArray(array) {

    let resultado = array[0].toString();

    for (let i = 1; i < array.length; i++) {
        resultado += ", " + array[i].toString();
    }

    return "[" + resultado + "]";
}

pintarArray([0, 1, 2]);


// 13.- Crear la función **arrayMapi** que acepte como argumento **un Array y una función** y devuelva **un array en el que se haya aplicado la función a cada elemento del array**

function arrayMapi(array, funcion) {

    let arrayFuncion = [];

    for (let i = 0; i < array.length; i++) {

        arrayFuncion[i] = funcion(array[i]);
    }

    return arrayFuncion;
}


/* 14.- Crear la función **eliminarDuplicados** que acepte como argumento **un array** y devuelva **un array en el que se hayan eliminado los duplicados*/

/* Solución Vero: usa .includes y no lo hemos visto,no es válida

 function eliminarDuplicados(array) {
  let nuevoArray = [];
  for (i = 0; i < array.length; i++) {
      if (!nuevoArray.includes(array[i])) {
        nuevoArray.push(array[i]);
      }
  }
  return nuevoArray;
}*/

/* Solución 1, funciona pero para Bikhram no es válida porque se evalúa consigo mismo y descarta, siempre que más adelante haya una igualdad, pero graba cuando en adelante ya no vuelva a encontrarla. Ejemplo: [11, 22, 33, 11] --> [22, 33, 11]*/

/* function eliminarDuplicados(array) {

    // Creo un array para almacenar los numeros sin duplicar
    let sinDuplicados = [];

    // Recorremos el array desde la posicion 0 para tener el primer miembro de la comparación
    for (let i = 0; i < array.length; i++) {

        // Creo una variable para detectar si encuentra alguna igualdad
        let igualdad = false;
        // La declaro aquí porque a cada vuelta hago que se resetee a false

        // Recorremos de nuevo para tener el segundo miembro de la comparación, pero desde la posición 1
        for (let j = i+1; j < array.length; j++) {
        // Si el for lo inicializo directamente en 1, cada vez que entra de uevo se vuelve a inicializar en 1 y compara la posicion del array consigo misma y siempre da true. Tiene que ir siempre uno por delante

            // Si encuentra una igualdad por el array, establecemos igualdad como true
            if (array[i] == array[j]) {
                igualdad = true;
            }
        }
        // Si no ha encontrado ninguna igualdad, subirá el numero
        if (igualdad == false)
            sinDuplicados.push(array[i]);
    }
    return sinDuplicados;
} */

/**Solución 2. Se evalúa con el nuevo array, que al estar vacío irá grabando desde el principio y descarta las repeticiones que salen más adelante, el resultado sale en el orden que compara el Bikhram */

function eliminarDuplicados(array) {

    // Creo un array para almacenar los numeros sin duplicar
    let sinDuplicados = [];

    // Recorremos el array original para tener el primer miembro de la comparación
    for (let i = 0; i < array.length; i++) {

        // Creo una variable para detectar si encuentra alguna igualdad
        let igualdad = false;
        // La declaro aquí porque a cada vuelta hago que se resetee a false

        // Recorremos el nuevo array (sinDuplicados) para tener el segundo miembro de la comparación
        for (let j = 0; j < sinDuplicados.length; j++) {

            // Si encuentra una igualdad por el array, establecemos igualdad como true
            if (array[i] == sinDuplicados[j]) {
                igualdad = true;
            }
        }
        // Si no ha encontrado ninguna igualdad, subirá el numero
        if (igualdad == false)
            sinDuplicados.push(array[i]);
    }
    return sinDuplicados;
}

eliminarDuplicados([44, 88, 44, 57, 68, 88, 87, 51, 54, 88, 36, 69]);


/* Solución Vanesa mejorado */
/* function eliminarDuplicados(arrayOriginal) {
    let arraySinDuplicados = [];
    arrayOriginal.sort((a, b) => (a - b)); // ¿se podría quitar esto?
    for (let i = 0; i < arrayOriginal.length; i++) {

        // Si encuentra una desigualdad...
        if (arrayOriginal[i] !== arrayOriginal[(i + 1)]) { 
            arraySinDuplicados.push(arrayOriginal[i]);
        }
    }
    return arraySinDuplicados;
} */


// 15.- Crear variable de nombre **arrayNumerosNeg** declarada con un **array de números del 0 al -9 (0, -1, -2...)**

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

// 16.- Crear variable de nombre **holaMundo** declarada con valor **array con las palabras 'Hola' y 'Mundo'**

let holaMundo = ['Hola', 'Mundo']; // Si pones comillas dobles la da por mala

//17.- Crear variable de nombre **loGuardoTodo** declarada con valor **array con valores 'hola', 'que', 23, 42.33 y 'tal'**

let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

//18.- Crear variable de nombre **arrayDeArrays** declarada con valor **array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]**

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

// 19.- Crea la función **multiplicacion** que acepte como argumento **dos números** y devuelva **el resultado de su multiplicación**

function multiplicacion(a, b) {
    return a * b;
}

// 20.- Crea la función **division** que acepte como argumento **dos números** y devuelva **el resultado de su division**

function division(a, b) {
    return a / b;
}


// 21.- Crea la función **esPar** que acepte como argumento **un número** y devuelva **true si es par y false si es impar**

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


// 22.- Crea el array **arrayFunciones** que tenga como valor **las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)**

function suma (a, b){
    return a + b;
}

function resta(a, b){
    return a - b;
}

function multiplicacion(a, b){
    return a * b;
}

let arrayFunciones = [suma, resta, multiplicacion];



// 23.-  Crear la función **ordenarArray2** que acepta como argumento **un array de números** y devuelva un **array ordenado de mayor a menor**

function ordenarArray2(array) {
    let ordenado = array.sort(function (a, b) { b - a });
    return ordenado;
}


// 24.- Crear la función **obtenerImpares** que acepta como argumento **un array de números** y devuelva un **array con los elementos impares**

function obtenerImpares(array) {
    let arrayImpares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            arrayImpares.push(array[i]);
        }
    }
    return arrayImpares;
}


// 25.- Crear la función **sumarArray** que acepte como argumento **un array numérico** y devuelva **la suma de los números en el array Array: [1, 2, 3] resultado: 6**

function sumarArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma
}

// 26.- Crear la función **multiplicarArray** que acepte como argumento **un array numérico** y devuelva **la multiplicación de los números en el array Array:  [2, 3, 4] resultado: 24**

function multiplicarArray(array) {
    let resultado = 1;
    for (let i = 0; i < array.length; i++) {
        resultado *= array[i];
    }
    return resultado;
}


/* Las: 13 y 22 no sé sacarlas */