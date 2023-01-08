function miFuncion(fn) {
  fn();
}

miFuncion(function () {
  console.log("Ejecutando la función");
});

function abplus(a, b, fn) {
  fn(a + b);
}

abplus(5, 10, function (result) {
  console.log(result);
});

function miFuncionSaludar(nombre, fn) {
  fn(nombre);
}

miFuncionSaludar("Andrés", function saludar(nombre) {
  console.log(`Hola ${nombre}`);
});

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function recorrer(numero) {
  console.log(numero);
}

nums.forEach(recorrer);

nums.forEach((numero) => {
  console.log(numero);
});

nums.forEach(function (numero) {
  console.log(numero);
});

const doble = nums.map((numero) => {
  return numero * 2;
});

console.log(doble);

function paresFilter(nums) {
  return nums % 2 === 0;
}

const pares = nums.filter(paresFilter);

console.log(pares);
