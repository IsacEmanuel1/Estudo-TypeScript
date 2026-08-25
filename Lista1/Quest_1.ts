//Questão 1:

/*
Calcule o volume de um cilindro dada a sua altura (h) e o seu raio (r) pela fórmula:
v =  pi x r² x h 

Quadrado: r ** 2 ou r * r
*/

const pi: number = 3.14;
const r: number = 5;
const h: number = 10;

let valor: number = pi * r**2 * h

console.log(`Volume do Cilindro: ${valor}`)

