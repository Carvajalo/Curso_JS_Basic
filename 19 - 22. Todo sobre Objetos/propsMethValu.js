function ln (){
    console.log("----------------------------------------------");
}

const person1 = {
    name: "Juan",
};

person1.surname = "Andrés"

console.log(person1); //Las propiedades son inertes e inanimadas
//Sin embargo, muchas entidades no son inanimadas y tienen acciones.

function sayHello1 (){
    console.log(`Hi my name is ${this.name}`);
}
person1.sayHello = sayHello1; //Esto guarda la referencia a la función
console.log("person.sayHello: ", person1.sayHello);
person1.sayHello(); //Para ejecutarla se invoca con los ()


ln()
//También puedo declararla en el objeto de forma inmediata.
person1.sayHello2 = function () { //Esto es un método que vive dentro de un objeto
    console.log(`Hi, I'm ${this.name}`); 
}
person1.sayHello2()

ln()
//Y si quisiera, puedo hacerlo dentro de las propiedades del objeto: 


const person2 = {
    name: "Andrés",
    sayHello: function(){
        console.log(`Hi my name is ${this.name}`);
    },
};


console.log("person2: ", person2, "\n");
console.log("person2.sayHello(): ");
person2.sayHello()

ln()

//También se puede hacer si declarar la función anónima:

const person3 = {
    name: "Camilo",
    sayHello(){
        console.log(`Hi my name is ${this.name}`);
    },
};


console.log("person2: ", person3, "\n");
console.log("person2.sayHello(): ");
person3.sayHello()

//Además, puedo declarar propiedades primitivas
ln()
const person4 = {
    name: "Camilo",
    sayHello(){
        console.log(`Hi my name is ${this.name}`);
    },
    'Skill 1': "JavaScript",
};

//Para pedir las propiedades primitivas de un objeto\nbasta con solo 
//pedirlo a través de cualquier expresión\n que devuelva 
//el nombre de esa propiedad

//Ejemplo: 
console.log("person4['Skill 1']: ", person4['Skill 1']);
const number = 1; 
console.log("person4['Skill ' + number]: ", person4['Skill ' + number]);

ln();

//También puedo hacer referencia a los demás atributos del objeto de esa misma forma

//Ejemplo: 
console.log("person4['say' + 'Hello](): "); //Los paréntesis para invocar la función
person4['say'+'Hello']()


//THIS en OBJECTS
ln()

var name = 'Guizmo';
const person5 = {
    name: "Sergio",
    greet,
    'Skill 1': "JavaScript",
};

function greet(){
    console.log(`Hi, I'm ${this.name}`);
}

person5.greet()

//Ahora bien, si yo ejecuto la función greet() él utilizará el this del ámbito global
//Sin embargo, puedo pasarle el this de persona5 con call
console.log("greet(): ");
greet()
console.log("greet.call(person5): ");
greet.call(person5) //Y acá podría pasarle cualquier objeto con propiedad name


ln()
ln()
//Values y entries + Ejercicios: 
const persons = {
    laura: 22,
    raul: 76,
    marta: 53,
    jorge: 18,
    valeria: 15,
};

//Para retornar los keys de un objeto: 
console.log("Object.keys(persons): ", Object.keys(persons));
Object.keys(persons).forEach(key => console.log(key))

//Para obtener los valores: 
console.log("Object.values(persons): ", Object.values(persons));
console.log("Con forEach: ");
Object.values(persons).forEach(value => console.log(value))
console.log("Con for of: ");
for(const value of Object.values(persons)){
    console.log(value);
}

//Para obtener los pares key: values (Entries):
console.log("Object.entries(persons): ", Object.entries(persons));
console.log("Con forEach: ");
Object.entries(persons).forEach(person => console.log(person));


//La suma total de todas las edades: 
const totalAge = Object.values(persons).reduce((total, value) => total + value)
console.log(totalAge);

//Averiguar si un objeto tiene propiedades o no: 
const noEntriesPerson = {
    
}
console.log("Para persons");
const hasProperties1 = !!Object.entries(persons).length
console.log(hasProperties1);

console.log("Para noEntriesPerson: ");
const hasProperties2 = !!Object.entries(noEntriesPerson).length
console.log(hasProperties2);

//Crear un array con las propiedades de persons cuyo valor no supere 18
//Ordenadas de menor a mayor

const newPersons = Object.entries(persons)
    .sort((a,b) => a[1] - b[1])
    .filter(person => person[1] > 18)

console.log(newPersons);