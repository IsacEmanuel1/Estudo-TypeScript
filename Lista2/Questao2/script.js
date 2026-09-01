import { Triangulo } from "./classes.js";
const inputLado1 = document.getElementById("lado1");
const inputLado2 = document.getElementById("lado2");
const inputLado3 = document.getElementById("lado3");
const butao = document.getElementById("buttCalcular");
const paragrafoResultado = document.getElementById("resultado");
if (!inputLado1 || !inputLado2 || !inputLado3 || !butao || !paragrafoResultado) {
    throw new Error("Elementos do formulário não encontrados.");
}
butao.addEventListener("click", () => {
    const lado1 = Number(inputLado1.value);
    const lado2 = Number(inputLado2.value);
    const lado3 = Number(inputLado3.value);
    if (Number.isNaN(lado1) || Number.isNaN(lado2) || Number.isNaN(lado3)) {
        paragrafoResultado.textContent = "Informe valores válidos para os lados.";
        return;
    }
    const triangulo1 = new Triangulo(lado1, lado2, lado3);
    paragrafoResultado.textContent = `É um Triangulo: ${triangulo1.calcular()}`;
});
