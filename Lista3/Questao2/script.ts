import promptSync from 'prompt-sync'

const prompt = promptSync()

let num: number

do {
    num = Number(prompt("Número inteiro positivo (>1): "))
} while (num <= 1)

let primo: boolean = true
let divisor: number = num - 1

while (primo && divisor > 1) {
    if (num % divisor == 0) {
        primo = false
    } else {
        divisor = divisor - 1
    }
}

if (primo) {
    console.log(`O número ${num} é primo`)
} else {
    console.log(`O número ${num} não é primo`)
}