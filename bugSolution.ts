function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both parameters must be numbers.');
  }
  return a + b;
}

// let result = add("hello", 5); // This will now throw an error
try {
  let result = add(5, 10);
  console.log(result); // Outputs 15
} catch (error) {
  console.error(error.message);
}

//Alternative solution using type guards
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function add2(a: any, b: any): number {
  if (!isNumber(a) || !isNumber(b)){
    throw new Error("Invalid input: parameters must be numbers");
  }
  return a + b;
}
console.log(add2(5,6)); //Outputs 11