import { media_parcial } from "./classes.js";
const inputB1 = document.getElementById("b1");
const inputB2 = document.getElementById("b2");
const butao = document.getElementById("buttCalcular");
const paragrafoResultado = document.getElementById("resultadoMediaParcial");
const paragrafoSituacao = document.getElementById("Situacao");
if (!inputB1 || !inputB2 || !butao || !paragrafoResultado || !paragrafoSituacao) {
    throw new Error("Elementos não encontrados");
}
butao.addEventListener("click", () => {
    const b1 = Number(inputB1.value);
    const b2 = Number(inputB2.value);
    const mediaParcial1 = new media_parcial(b1, b2);
    const mediaParcial = Number(mediaParcial1.calcularMedia().toFixed(2));
    if (mediaParcial >= 60) {
        paragrafoResultado.textContent = (`Media Parcial do seus dois bimestre: ${mediaParcial}`);
        paragrafoSituacao.textContent = ("Aprovado!");
    }
    else if (mediaParcial > 10 && mediaParcial < 60) {
        paragrafoResultado.textContent = (`Media Parcial do seus dois bimestre: ${mediaParcial}`);
        paragrafoSituacao.textContent = ("Prova Final!");
    }
    else if (mediaParcial <= 10) {
        paragrafoResultado.textContent = (`Media Parcial do seus dois bimestre: ${mediaParcial}`);
        paragrafoSituacao.textContent = ("Reprovado!");
    }
});
