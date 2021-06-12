// Crear una mini app que entregue el resultado de multiplicar 2 nros pasados por la
// linea de comandos
let numOne = parseInt(process.argv[2]);
let numTwo = parseInt(process.argv[3]);

console.log(numOne * numTwo);