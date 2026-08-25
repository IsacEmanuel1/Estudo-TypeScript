/*
Dada a média parcial (menor que 60) de um estudante do IFRN em uma disciplina, calcule quanto ele(a) precisa tirar na avaliação final para ser aprovado(a).
Para referência, segue a fórmula da média final:

mediaFinal = (mediaParcial + notaAvFinal) / 2

60 = (55 + notaAvFinal) / 2
mediafinal - mediaParcial * 2 =  notaAvFinal
*/

const mediaParcial: number = 55;

const nota_para_AvFinal: number = 120 - mediaParcial

console.log(`Nota Para obter na Avaliação Final: ${nota_para_AvFinal}`)