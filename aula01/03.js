const readlineSync = require('readline-sync')
const idade = readlineSync.question("Qual eh a sua idade?");
const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);

// coerção explícita (conversão manual)

console.log(Number("X"));

console.log(String(10), typeof String(10));

console.log(Boolean(2));

// coerção implícita

console.log(1 + "1");
console.log(10 - "5");