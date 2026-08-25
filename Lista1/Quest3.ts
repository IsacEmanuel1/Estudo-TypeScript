let inicioAno = new Date('2026-1-01')
let dataInformada = new Date('2026-9-29') 

const msDia: number = 1000 * 60 * 60 * 24

const intervaloTempo: number = dataInformada.getTime() - inicioAno.getTime();

let dias: number = (intervaloTempo / msDia) + 1

console.log(`No dia ${dataInformada.toLocaleDateString('pt-BR')} se passaram ${dias} dias.`)

