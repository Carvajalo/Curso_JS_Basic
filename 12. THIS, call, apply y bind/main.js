const a = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = a.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

// expected output: undefined

const boundGetX = unboundGetX.bind(a);
console.log(boundGetX());



