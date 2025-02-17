function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 5); // This will compile without error, but will produce an incorrect result at runtime
console.log(result); // Outputs "hello5"