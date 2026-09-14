
function jogarDado() {
    const NumDado = Math.floor(Math.random() * 6) + 1;
    return NumDado
}

const totaljogadas = 1000;
let contadorFace6 = 0;

for (let i = 0; i < totaljogadas; i++) {
    const resultado = jogarDado();
    if (resultado === 6) {
        contadorFace6++;
    }
}

console.log("A face 6 foi sorteada " + contadorFace6 + " vezes em " + totaljogadas + " lançamentos do dado");