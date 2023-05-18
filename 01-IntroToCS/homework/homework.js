"use strict";

function BinarioADecimal(num) {
  // 011001 = 25
  // <------- leyendo de der a izq
  //    1 * 2 ** 0  = 1
  //    0 * 2 ** 1  = 0
  //    0 * 2 ** 2  = 0
  //    1 * 2 ** 3  =  8
  //    1 * 2 ** 4  =  16
  //    0 * 2 ** 5  =   0
let nuevo = num.toString();
let cadauno = [];
for (let i = 0; i < nuevo.length; i++){
cadauno.unshift(nuevo[i])
}
let resultado = 0;
for (let j = 0; j < cadauno.length; j++){
resultado += cadauno[j]*(2**j);
}
return resultado;
}

function DecimalABinario(num) {
  // 91 = 1011011
  // 91 / 2 = 45  (.5) ===> 1
  // 45 / 2 = 22   (.5) ===> 1
  // 22 / 2 = 11  (0) ===> 0
  // 91 / 2 = 45 residuo 1
  // 45 / 2 = 22 residuo 1
  // 22 / 2 = 11 residuo 0
  // 11/ 2 = 5 residuo 1
  // 5 / 2 = 2 residuo 1
  // 2 / 2 = 1 residuo 0
  // 1 / 2 = 0 residuo 1
let binario = num;
let resultado = [];
do {
if (binario % 2 === 0) { resultado.unshift(0) }
else { resultado.unshift(1) }
binario = Math.floor(binario / 2);
}
while (binario > 0)
return resultado.join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};