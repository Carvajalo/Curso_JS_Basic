//Primer método con Spread
const cats = ['Nino', 'Guizmo', 'Milo']
const moreCats = ['Tina', 'Mona', 'Mila']

const allCats1 = [...cats, ...moreCats, ...['Rouco']]

console.log("allCats", allCats1);

const mergeArrays1 = (...arrays) => console.log(...arrays)
mergeArrays1(cats, moreCats)


const mergeArrays2 = (...arrays) => [...arrays].flat() 
const mergedArray2 = mergeArrays2(cats, moreCats, ["Rouco"])
console.log(mergedArray2);

//Segundo método CONCAT
//Concat no cambia la estructura de los arrays, es decir que no lo muta
const allCats2 = cats.concat(moreCats)
console.log("allCats2: ", allCats2);

//Si voy a concatenar más de dos arrays puedo hacer lo siguiente: 
const allCats3 = [].concat(moreCats, ["Rouco"], cats) //A un array vacío le concateno los demás arrays
console.log("allCats3: ", allCats3);