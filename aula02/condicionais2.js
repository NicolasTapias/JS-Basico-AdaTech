// Muito útil quando a variavel possui valores especificos
const permissoes = 'admin' // 'aluno' || 'professor' || 'admin'

switch (permissoes) {
    case 'aluno':
        console.log("Voce so pode visualizar as aulas.");
        break
    case 'professor':
        console.log("Voce pode alterar as aulas e adicionar exercicios.");
        break
    case 'admin':
        console.log("Voce pode fazer o que quiser no sistema!");
        break
    default:
        console.log("Não sei quem voce é no sistema");
        break
}