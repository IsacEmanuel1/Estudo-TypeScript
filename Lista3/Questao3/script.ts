import promptSync from 'prompt-sync'

const prompt = promptSync()

function ehPrimo(num: number): boolean {
    if (num <= 1) {
        return false
    }

    let primo: boolean = true
    let divisor: number = num - 1

    while (primo && divisor > 1) {
        if (num % divisor == 0) {
            primo = false
        } else {
            divisor = divisor - 1
        }
    }
    return primo
}

let intervaloTexto: string = prompt("Digite o intervalo (ex: 2-10): ")
let partes: string[] = intervaloTexto.split("-")

let inicio: number = Number(partes[0])
let fim: number = Number(partes[1])

let quantidadePrimos: number = 0

for (let numeroAtual = inicio; numeroAtual <= fim; numeroAtual++) {
    if (ehPrimo(numeroAtual)) {
        quantidadePrimos = quantidadePrimos + 1
    }
}

console.log(`Quantidade de números primos entre ${inicio} e ${fim}: ${quantidadePrimos}`)