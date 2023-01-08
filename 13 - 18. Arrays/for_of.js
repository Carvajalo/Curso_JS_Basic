function ln() {
  console.log(
    "--------------------------------------------------------------------------------"
  );
}

const { log } = require("console");

const employees = [
  {
    name: "Juan",
    salary: 50000,
  },
  {
    name: "Pedro",
    salary: 80000,
  },
  {
    name: "Karla",
    salary: 60000,
  },
  {
    name: "Maria",
    salary: 100000,
  },
];

const results1 = [];

for (let i = 0; i < employees.length; i++) {
  if (employees[i].salary >= 80000) {
    results1.push(employees[i]);
  }
}

console.log("results1: ", results1);

const results2 = [];

employees.forEach((employe) => {
  if (employe.salary >= 80000) {
    results2.push(employe);
  }
});

console.log("results2: ", results2);

//Forma declarativa (QUÉ):
const results3 = employees.filter((employe) => employe.salary >= 80000);
console.log("results3: ", results3);

//Usando el FOR...OF

const results4 = [];

for (const employee of employees) {
  if (employee.salary >= 80000) {
    results4.push(employee);
  }
}

console.log("results4: ", results4);

const results5 = [];

for (const employee of employees) {
  if (employee.salary <= 60000) {
    results5.push(employee);
    break; //Para solo sacar el primer elemento
  }
}

console.log("results5: ", results5);

//Qué pasa si lo usamos en objetos:
const developer = {
  name: "Juan",
  city: "Valencia",
  skills: ["JavaScript", "Vue", "CSS"],
};
ln();

for (const property of Object.entries(developer)) {
  console.log(property);
}
ln();

for (const [key, value] of Object.entries(developer)) {
  console.log(key + ":", value);
}

//Implementando Sinbol Iterator
developer[Symbol.iterator] = function (){
  let i = 0; //Con este iterador vamos a ir recorriendo los valores del objeto en el campo de Skills
  return {
    next: () => ({ //Recibe dos parámetros, los values que vamos a iterar y la condición para salir
      value: this.skills[i++], //Acá le decimos que con el iterador vamos a ir recorriendo las skills del objeto
      done: i > this.skills.length, //Y esta es la condición de salida
    })
  }
}

for(const skill of developer){
  console.log(skill)
}