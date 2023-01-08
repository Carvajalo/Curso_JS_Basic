
/* console.log(64 === 0100); */ //Error: OCTAL IS NOT ALLOWED IN STRICT MODE 
"use strict"

/* const array = [];
setTimeout(() => {
  setTimeout(() => {
    array.push('it worked');
    console.log(array);
  }, 200);
}, 400);

setTimeout(() => {
    setTimeout(() => {
      array.push('it worked2');
      console.log(array);
    }, 200);
  }, 300);
array; */


function chain(value) {
  return {
    value: value,
    then: callback => {
      return chain(callback(value));
    }
  };
}

chain(5).then(n=> n + 1)

const b = chain(5)
  .then(n => n * 3)

console.log("b: ", b.value);
