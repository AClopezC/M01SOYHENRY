'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let resultado = [];
  resultado.push(1);

  let actual = num;
  let divisor = 2;

  while (actual > 1) {
    if (actual % divisor === 0) {
      resultado.push(divisor);
      actual /= divisor;
    }
    else {
      divisor++;
    }
  }
  return resultado;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length - 1; i++){ //Bucle externo, controla el # de pasadas.
    for (let h = 0; h < array.length - 1; h++) { // Bucle interno, itera sobre el array en cada pasada. Por cada vez que pase el for de arriba, se hará la operación del if.
      if (array[h] > array[h + 1]) {
        [array[h], array[h + 1]] = [array[h + 1], array[h]]; // "destructuring assignment"
      }
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i <= array.length; i++) {
    let r = i;
    while (r >= 1 && array[r] < array[r - 1]) {
      let guardado = array[r];
      array[r] = array[r - 1];
      array[r - 1] = guardado;
      r-- // Creo que el truco del while está aquí, (en cada vuelta NO del for, sino del while, se lleva el número hasta donde corresponde.)
    }
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++){ // Las letras solas son indicadores de posiciones, no de valores.
    let aux  = i;

    for (let h = i + 1; h < array.length; h++){ // h va una posición por delante de i
      if (array[h] < array[aux]) {
         aux = h
       }
    }
    if (i !== aux) {
      let guardado = array[i]
      array[i] = array[aux]
      array[aux] = guardado
    }
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
