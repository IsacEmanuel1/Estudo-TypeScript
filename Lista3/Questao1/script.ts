import promptSync from 'prompt-sync'

const prompt = promptSync()

let somaRenda: number = 0
let somaFilhos: number = 0
let quantidadeFamilias: number = 0

let renda: number = Number(prompt("Renda familiar (negativo para encerrar): "))
let filhos: number = Number(prompt("Número de filhos (negativo para encerrar): "))

while (renda >= 0 && filhos >= 0) {
    somaRenda = somaRenda + renda
    somaFilhos = somaFilhos + filhos
    quantidadeFamilias = quantidadeFamilias + 1

    renda = Number(prompt("Renda familiar (negativo para encerrar): "))
    filhos = Number(prompt("Número de filhos (negativo para encerrar): "))
}

if (quantidadeFamilias > 0) {
    const mediaRenda: number = somaRenda / quantidadeFamilias
    const mediaFilhos: number = somaFilhos / quantidadeFamilias

    console.log(`Renda familiar média: ${mediaRenda}`)
    console.log(`Média de filhos por família: ${mediaFilhos}`)
} else {
    console.log("Nenhuma família foi informada.")
}