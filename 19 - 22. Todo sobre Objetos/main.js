//Un objeto es una abstracción de una entidad
function ln(){
    console.log("-------------------------------------------");
}

const tags = ["black", "cat", "street"]; //Si el key y el value tienen el mismo nombre, no es necesario declararlo abajo

const cat = {
  name: "Guizmo",
  color: "Black",
  adopted: "true",
  address: {
    city: "Valencia",
    coords: {
      lat: 31.13123,
      lang: 5.3123123,
    },
  },
  tags, //obtiene el valor de la constante de tags
};
console.log("cat: ", cat);
console.log("cat.address.coords", cat.address.coords); //El DOT (.) operator sirve para moverme entre las propiedades del objeto

ln()
//Creación de un Objeto:

const user1 = {
  rol: "Developer",
  team: "FE",
};
console.log("user: ", user1);

ln()
//Esto ya CASI NUNCA SE USA: 
const person = new Object({ name: "Juan" });
console.log("person: ", person);


const user2 = {}
console.log("user2: ", user2);
user2.rol = 'Developer';
user2.team = 'FE';
console.log('user2', user2);


ln()
//Valor VS referencia:
//Los objetos (al igual que los arrays) se pasan por referencia y no por valor

const user3 = {rol: 'Developer'};
const userReference = user3;
console.log(user3 === userReference); //Ambos apuntas al mismo espacio de memoria
console.log({} === {}); //Un objeto nunca es igual a otro objeto a menos que sea referencia al mismo objeto
console.log("Si le hago cambios a userReference: ");
userReference.city = 'Valencia',
console.log("user3: ", user3);
console.log("userReference: ", userReference);
ln()