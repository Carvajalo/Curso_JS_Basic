/* for(let i = 0; i < 10; i++){
    console.log(i);
    setTimeout(function(){
      console.log("\nEl número es: "+ i);
    }, 1000);
  } */

// Con el IIFE
/* for(var i = 0; i < 10; i++){
    console.log(i);
    (function(i){
      setTimeout(function(){
        console.log("\nEl número es: "+ i);
      }, 1000);
    })(i);
  }
console.log(`Al final el valor de i es: ${i}`); */

/* let a = 1;
(function(a){
  console.log(`El valor de a dentro de la IIFE es: ${a}`);
  var a = 20;
  console.log(a);
})(a);

console.log(a); */

/* const name = "Juan"
let distance = 0;

function greet(){
  console.log(`Hola me llamo ${name}`);
}

function run (){
  distance += 10;
  console.log(`${name} corriendo ${distance} metros`);
}

greet();
run();
run()
 */
arrowFunction = () => {
}


//Ahora con un IFFE 
const Person = ((personName) => {
  const name = personName || "Juan";
  let distance = 0;

  function greet(){
    console.log(`Hola me llamo ${name}`);
  }

  function run (){
    distance += 10;
    console.log(`${name} corriendo ${distance} metros`);
  }
  return {
    greet,
    run
  }
})()


let person1 = Person;
let person2 = Person;


person1.greet();
person1.run();
person1.run();

person2.greet();
person2.run();
person2.run();