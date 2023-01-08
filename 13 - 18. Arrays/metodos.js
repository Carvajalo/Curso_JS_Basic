//Hight order functions (Funciones de orden mayor).
//Son funciones que reciben un callback o retornan una función.

function ln() {
  console.log("-----------------------------------------------");
}

let employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 1, 2011" },
];

employees.forEach((employe, index) => console.log(employe.name, index));

//Array filter (Crea un nuevo arreglo con un filtro)
const highTier = employees.filter((employe) => employe.salary >= 80000);

console.log("Employees: ", employees);
console.log("highTier employees: ", highTier);

//Array map: retorna un nuevo array con una función aplicada a cada uno de los elementos
const upperCaseEmployees = employees.map((employe) =>
  employe.name.toLocaleUpperCase()
);
console.log("Employees: ", employees);
console.log("upperCaseEmployees", upperCaseEmployees);

//Ahora algo más elaborado:
const employeesTier = employees.map((employee) => {
  if (employee.salary >= 80000) {
    return {
      ...employee,
      tier: "Hight",
    };
  }
  return {
    ...employee,
    tier: "mid",
  };
});

console.log("employeesTier", employeesTier);

//Array Sort: método para organizar un array de acuerdo a un parámetro:
console.log("Sort normal: ", [1, 3, 4, 2, 1, 4, 6, 7].sort());
console.log(
  "Sort si le pongo un 10 al Array: ",
  [1, 3, 4, 2, 1, 4, 6, 7, 10].sort()
);
console.log(
  "Eso pasa porque el algoritmo sort por defecto tiene en cuenta el UTF y 10<2"
);
console.log("Para que funcione bien toca implementarlo manualmente");
console.log("Sort con el 10 y haciendo la función: ");
const sortArray = [1, 3, 4, 2, 1, 4, 6, 7, 10].sort((num1, num2) => {
  return num1 - num2; //Ascendente
  //return num2 - num1 //De forma descendente

  /*     if (num1 < num2) {
        return -1
    } else if (num1 > num2){
        return 1
    }else{
        return 0
    } */
});

console.log(sortArray);

//Organizar los empleados por sus salarios (El método SORT muta el array original):
const employeesAsc = employees.sort((a, b) => {
  return -b.salary + a.salary;
});
console.log("employees: ", employees);
console.log("employeesAsc: ", employeesAsc);

//Para hacer una copia superficial y no modificar los valores que tiene employees actualmente:
const employeesDesc = [...employees].sort((a, b) => b.salary - a.salary);

console.log("employees: ", employees);
console.log("employeesDesc: ", employeesDesc);

//Array Reduce: Suma los valores del array:
console.log("Sacar cuanto hay que pagar a los empleados por nómina");
employees.forEach((employe, index) => console.log(employe.salary, index));

ln();

ln();

const totalSalary1 = employees.reduce(
  (total, employe) => total + employe.salary,
  0
);
console.log("totalSalary1: ", totalSalary1);

const totalSalary2 = employees.reduce((total, employe) => {
  return total + employe.salary;
}, 0);

console.log("totalSalary2: " + totalSalary2);

//Copiar solo los salarios de los empleados:
const salaries1 = employees.map((employe) => employe.salary);
console.log("salaries: ", salaries1);

//Copiar solo los salarios de los empleados con reduce:
const salaries2 = employees.reduce((salaries, employe) => {
  return [...salaries, employe.salary];
}, []);

console.log("salaries2: ", salaries2);

/* employees.forEach((employe) => {
    console.log(employe.salary)
    const {
        salary: {salario},
    } = employe;
    console.log(salario)
}) */

employees.forEach((user) => {
  const { salary } = user;
  console.log("El salario de ", user.name, "es de: ", salary);
});


//Constuir un arreglo con los empleados hight tier:

const hightTier1 = employees
    .map(employee => employee.salary)
    .filter(salary => salary >= 80000)
    .reduce((total, salary) => total + salary, 0)

console.log("hightTier1 total: ", hightTier1);

const hightTier2 = employees.reduce((hightTier, employe) => {
    if (employe.salary >= 80000) {
        return [...hightTier, employe];
    }
    return hightTier;
    }, []);

console.log("hightTier1: ", hightTier2);