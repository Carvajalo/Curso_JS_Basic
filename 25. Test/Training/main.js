/* const evenNumbers = () => {
  for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
};

//evenNumbers();

const tables = (number) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
};

for (let index = 0; index < 10; index++) {
  tables(index);
  console.log("-----------------");
}

const revert = (array) => {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
};

let a = revert([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(a);

const cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
[1, 3, 2].sort(cmp[this.key || "asc"]); // [1, 2, 3]

console.log();

console.log("Area of a triangle");

const triangle = (base, height) => {
  return (base * height) / 2;
};

console.log(triangle(7, 4));

console.log("Convert age to days");
const age = (age) => {
  return age * 365;
};

console.log(age(65));

console.log("Counting the true/false");

 trueOrFalse = () => {
  let argsValues = {
    trues: 0,
    falses: 0,
  };
  return function counter(...args){
    args.forEach((item) => {
      if (item == true) {
        argsValues.trues += 1;
        return;
      }
      argsValues.falses += 1;
    });
    return argsValues;
  }
}

const truesFalseCounter = trueOrFalse();
console.log(truesFalseCounter(true, false, true, true, false));


function countTrue([...args]){
  countBoolean = 0, 
  args.forEach((item) => {
    if (item) {
      countBoolean += 1;
    }
  })
  return countBoolean
}

console.log(countTrue([true, false, false, true, false]));


const countTrue2 = r => r.filter(Boolean).length
console.log(countTrue2([true, false, true, true, false]));

console.log("----------------------------");
const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4];
console.log(array2 === array1);

console.log("----------------------------");




 */


