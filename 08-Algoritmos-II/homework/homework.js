'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
 
  if (array.length < 2) return array;

  let pivotRan = array[Math.floor(Math.random() * array.length)];
  let pivots = [];
  let left = [];
  let right = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== pivotRan) {
      if (array[i] < pivotRan) {
        left.push(array[i])
      }
      else {
        right.push(array[i])
      }
      }
    else pivots.push(array[i])
  }
  return (quickSort(left).concat(pivots).concat(right))
  }


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length < 2) return array; // Si solo tengo un elemento lo retorno sin hacerle nada.

  const mitad = Math.floor(array.length / 2 ) // Divide en la mitad, si es impar, el floor acerca al anterior.
  let left = array.slice(0, mitad) // Slice corta desde posición 0 hasta el anterior al último/mitad en este caso. 
  let right = array.slice(mitad, array.length)

  array = [] // Vacío el array para optimizar memoria, y ya tengo su contenido en left y right. Reciclo el lugar de la memoria.
  
  left = mergeSort(left)
  right = mergeSort(right)

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift()) // Lo pusheo en mi nuevo array y lo elimino de donde estaba.
    }
    else array.push(right.shift())
  }
  array = array.concat(left, right)

  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
