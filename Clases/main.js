var ConcatName = undefined;



const Name = {
    name: 'John',
    lastName: 'Doe',
}

var ConcatName =  (name, a) => {
    return name + ' ' + a;
}

var ConcatName; // undefined

let completeName = ConcatName2(Name.name, Name.lastName);


function ConcatName2(name, a) {
    return name + ' ' + a;
}

console.log(completeName);

//Arrow functions

console.log(ConcatName3(Name.name, Name.lastName));
let ConcatName3 = (name, a) => {
    return name + ' ' + a;
}
