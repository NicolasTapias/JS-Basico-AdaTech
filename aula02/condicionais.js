const prompt = require("readline-sync");

const idade = Number (prompt.question("Qual eh a sua idade?"));

const ehMaiorDeIdade = idade >= 18;

// Estrututa condicional: if/else

if (ehMaiorDeIdade){
    // Faça alguma coisa...
    console.log("Voce eh maior de idade!");
} else {
    console.log("Voce eh menor de idade.");
}

const mediaDoAluno = 8;

if (mediaDoAluno >=7){
    console.log("Aprovado!");
    console.log("Parabéns!😊👌");
} else if (mediaDoAluno < 7 && mediaDoAluno >= 5){
    console.log("Prova Final");
} else {
    console.log("Reprovado");
}