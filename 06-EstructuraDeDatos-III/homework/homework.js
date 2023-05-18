'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
BinarySearchTree.prototype.size = function () {
  if (this.value === null) return 0;
  let contador = 1;
  
     if (this.left) {
      contador += this.left.size();
    }
    if (this.right) {
      contador += this.right.size();
    }
  
  return contador;
}
BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value)
    }
    else {
      this.left = new BinarySearchTree(value);
    }
  }
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value)
    }
    else {
      this.right = new BinarySearchTree(value);
    }
  }
}
BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) {
    return true;
  }
  else if (this.left && this.left.contains(value)) {
    return true;
    }
    
  else if (this.right && this.right.contains(value)) {
      return true
    }
    else { return false };
}
BinarySearchTree.prototype.depthFirstForEach = function (cb, value) {
  if (value === "in-order" || value == null) {
    if (this.left) {
      this.left.depthFirstForEach(cb, value);
    }
    cb(this.value);
    if (this.right) {
      this.right.depthFirstForEach(cb, value);
    }
  }
  if (value === "pre-order") {
    cb(this.value);
    if (this.left && this.left.depthFirstForEach(cb, value));
    if (this.right && this.right.depthFirstForEach(cb, value));   
  }
  if (value === "post-order") {
    if (this.left && this.left.depthFirstForEach(cb, value));
    if (this.right && this.right.depthFirstForEach(cb, value));
    cb(this.value);
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function (cb, value = []) {
  if (this.left !== null) {
    value.push(this.left)
  }
  if (this.right !== null) {
    value.push(this.right)
  }
  cb(this.value)

  if (value.length > 0) {
    value.shift().breadthFirstForEach(cb, value)
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
