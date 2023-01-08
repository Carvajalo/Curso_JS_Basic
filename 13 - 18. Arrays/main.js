function ln() {
  console.log("------------------------------------------------------");
}

if (false) {
  const panas = [
    ["Naren", 24],
    ["Valeria", 24],
    ["Mandi", 23],
    ["Fabi", "--"],
    ["Hei", 26],
    ["Luzaré", 24],
    ["Majo", 26],
  ];

  const [[name, age], , mandi, , hei, luza] = panas;

  const API = "https://randomuser.me/api/?results=5";

  async function getData() {
    const response = await fetch(API);
    const { results } = await response.json();
    showUsers(results);
    showUsers2(results);
  }

  function showUsers(users) {
    users.forEach((user) => {
      const picture = user[`picture`].medium;

      const img = document.createElement("img");
      img.src = picture;
      document.body.appendChild(img);
      // console.log(picture);
    });
  }

  function showUsers2(users) {
    //Forma 1:
    users.forEach((user) => {
      const {
        picture: { medium: picture },
      } = user;
      console.log(picture);
    });
    //Forma 2
    users.forEach((user) => {
      const {
        picture: { large },
      } = user;
      console.log(large);
    });
  }
  getData();
}

/* Manipulación de Arrays: métodos y demás */

//Añadir al inicio del Array
//Mutando el array mismo:
const colores = ["rojo", "verde", "azul"];

//[...values] = Esto es el "operador" spread (lo mismo que rest pero no en una función)
console.log(colores);
const a = colores.unshift("morado"); // retorna el lenght del nuevo array
console.log(`colores.unshift("morado") = ${colores} \n
                a = colores.unshift("morado") = ${a}`);

ln();
//Sin mutar el array:
let color = "amarillo";
const colores2 = [color, ...colores];

console.log("Colores 2 = " + colores2 + "\n");
ln();
//Para añadir elementos al final mutando el array

color = "white";
colores.push(color);

console.log(`Ejemplo push: ${colores}`);
ln();
//añadir al final sin mutar el array
color = "black";
const colores3 = [...colores, color];
console.log(`Colores2 sin mutar colores: ${colores3}`);

ln();
//Añadir elementos en cualquier posición N de un array mutando el array
const años = [2016, 2018, 2019, 2020, 2022, 2022, 2023, 20243, 2025];
años.splice(1, 0, 2017); //Start position, delete count, value
//Anteriormente, entro al índice 1, no elimino ningún elemento y añado 2017
console.log("Años después del Splice: " + años);
console.log("Arreglando el 2022 repetido reemplazándolo con 2021");
años.splice(5, 1, 2021);
console.log("Años después del arreglo: " + años);
ln();
console.log("Arreglando el array sin saber el índice del problema");
años.splice(
  años.findIndex((number) => number == 20243),
  1,
  2024
);
console.log(años);

ln();
//Quitaré algunos años del array de años por efectos del siguiente ejercicio
años.splice(2, 2);
console.log(años);
//Para agregar un elemento en CUALQUIER parte del array SIN mutar el array
//se utiliza el método SLICE
ln();
console.log("Haciendo una copia del array original sin mutarlo: ");
const añosCopia = [...años.slice(0, 2), 2018, 2019, ...años.slice(2)]; //Si no le mandas un end index él toma todo
console.log(`AñosCopia = \r ${añosCopia}`);

ln();
//Para añadir BIEN los elementos que retorna slice, debo utilizar el operador spread
const añosAñadir = [2018, 2019];
console.log("Sin el operador spread (...) :");
const añosCopia2 = [años.slice(0, 2), ...añosAñadir, años.slice(2)];
console.log("añosCopia2= \r");
console.log(añosCopia2);

ln();
//Eliminar del inicio mutando
console.log("Eliminando mutando: ");
const añosEliminados = años.shift();
console.log(`Años que fueron eliminados: `);
console.log(añosEliminados);
console.log("el array de años:");
console.log(años);

ln();
console.log("Eliminando ahora de añosCopia2");
const añosEliminados2 = añosCopia2.shift();
console.log(`Años que fueron eliminados de añosCopia2:`);
console.log(añosEliminados2);
console.log("el array de años:");
console.log(añosCopia2);

ln();
//Eliminando al INICIO del array SIN mutar el array, haciendo una copia
console.log("Eliminando sin mutar el array: ");
console.log(`años antes de eliminar el primer elemento: ${años}`);
const añosCopia3 = [...años.slice(1)];
console.log(`Años después de eliminar el primer elemento: ${añosCopia3}`);

ln();
//Eliminando al FINAL del array mutando el array
console.log("Eliminando sin mutar el array: ");
const añosPop = años.pop();
console.log(`El año eliminado: años.pop()  ${añosPop}`);
console.log(`Años después de eliminar el último elemento: ${años}`);

ln();
//Eliminando del FINAL del array SIN mutar el array, haciendo una copia
console.log(`Años:`);
console.log(años);
const añosCopia4 = [...años.slice(0, años.length - 1)];
console.log(`añosCopia4: `);
console.log(añosCopia4);

ln();

//Eliminar un elemento que está dentro del array, mutándolo
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
  "Diciembre",
];
const index = "";
function eliminarElemento(array, busqueda) {
  const index = array.indexOf(busqueda);
  if (index != -1) {
    array.splice(index, 1);
  }
}

eliminarElemento(meses, "Febrero");
console.log(meses);

//Comprobar si hay algún elemento primitivo en el arreglo
let isMes = meses.includes("Abril");
console.log("¿Abril está?: " + isMes);

isMes = meses.includes("abril");
console.log("¿abril está? (sin mayúscula): " + isMes);

//FinIndex
const finSecond = (count, mes) => {
  if (count == 0 && mes == mes) {
    count++;
  } else {
    return element == mes;
  }
};

console.log(meses);
let count = 0;
function findMes2(mes) {
  if (mes == "Diciembre") {
    count++;
  }
  return mes === "Diciembre" && count == 2;
}

const indiceDic = meses.findIndex(findMes2);
console.log(indiceDic);

ln();
ln();
const coloresN = [
  { id: 1, nombre: "Rojo" },
  { id: 2, nombre: "Verde" },
  { id: 3, nombre: "Azul" },
  { id: 4, nombre: "Morado" },
];

//Sin CallBack
function findColor(color) {
  return color.id == 2;
}

console.log(coloresN);
const indiceVerde1 = coloresN.findIndex(findColor);
console.log("indiceVerde1: " + indiceVerde1);

//Con CallBack
const indiceVerde2 = coloresN.findIndex(function findColor(color) {
  return color.id == 2;
});

console.log("indiceVerde2: " + indiceVerde2);

//Con CallbackFlecha
const indiceVerde3 = coloresN.findIndex((color) => {
  return color.id == 2;
});

console.log("indiceVerde3: " + indiceVerde3);

//Si lo que necesitamos es el elemento y no su índice, podemos usar FIND
const colorAzul = coloresN.find((color) => color.nombre === "Azul");
console.log(colorAzul);

//Filter para más de uno:

const coloresNCaracteres = coloresN.filter((color) => {
  return color.nombre.length > 5;
});

console.log(`Colores con length > 5: `);
console.log(coloresNCaracteres);

ln();
ln();
//Copiar objetos de forma profunda o superficial
/*Cuando son elementos primitivos las copias superficiales 
al no tener dentro objetos a los que hacer referencia, si 
cambias sus valores primitivos no afecta al array original */

console.log("Copias superficiales: ");
console.log("Volviendo al array de Meses: ");
console.log(meses);
console.log("Si hago una copia SUPERFICIAL y le cambio uno de los valores: ");
const mesesCopia1 = [...meses];
mesesCopia1[0] = "None";
console.log(meses, mesesCopia1);
console.log("Esto no genera cambios en el array original de meses");

console.log("Haciendo una copia SUPERFICIAL con Slice: ");
console.log(meses);
console.log("Si hago una copia y le cambio uno de los valores: ");
const mesesCopia2 = meses.slice();
mesesCopia2[0] = "None";
console.log(meses, mesesCopia2);
console.log("Esto no genera cambios en el array original de meses");

console.log(
  "Ahora bien, si lo intento con un array que tiene apuntadores hacia objetos, la cosa cambia"
);
console.log("Copia de coloresN de forma superficial #1");
const coloresN2 = coloresN.slice();
console.log("coloresN2, coloreN:");
console.log(coloresN2, coloresN);
coloresN2[0].id = 0;
console.log("coloresN2, coloreN:");
console.log(coloresN2, coloresN);

console.log("Copia de coloresN de forma superficial #2");
const coloresN3 = [...coloresN];
console.log("coloresN2, coloreN:");
console.log(coloresN2, coloresN);
coloresN2[0].id = 0;
console.log("coloresN2, coloreN:");
console.log(coloresN2, coloresN);

console.log(
  "Esto se debe a que la copia hace una copia con apuntadores a la memoria donde están alojado los objetos"
);
console.log("Copias profundas");
const copiaColoresN3 = JSON.parse(JSON.stringify(coloresN3));
console.log("coloresN3, copiaColoresN3");
console.log(coloresN3, copiaColoresN3);
console.log(
  "Si cambio algún valor en copiaColoresN3, esto no afectará al original"
);
copiaColoresN3[0].id = 666;
console.log("coloresN3, copiaColoresN3");
console.log(coloresN3, copiaColoresN3);

ln();
ln();
console.log("Typeof: ");
const myArray = [];
console.log(typeof myArray);

console.log("instanceof");
console.log("myArray instanceof Array: ", myArray instanceof Array);
console.log("myArray instanceof Array: ", myArray instanceof Object);

console.log("isArray: ");
console.log("array.isArray(myArray):", Array.isArray(myArray));
