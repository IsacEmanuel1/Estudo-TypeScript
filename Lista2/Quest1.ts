// a) a + b = c
class formulaA{
    a: number
    b: number

    constructor(a: number, b: number){
        this.a = a
        this.b = b
    }

    calcularFormula(): number {
        return this.a + this.b
    }
}

const calc1 = new formulaA(80, 10)
console.log(`Resultado do Calculo1: ${calc1.calcularFormula().toFixed(2)}`)

const calc2 = new formulaA(100, 89)
console.log(`resultado do Calculo2: ${calc2.calcularFormula().toFixed(2)}`)



//b) (4𝛑r3)/3
class formulaB {
    r: number

    constructor(raio: number){
        this.r = raio
    }

    calcularFormula(): number{
        return (4 * Math.PI * Math.pow(this.r, 2)) / 3
    }
}

const calc1B = new formulaB(30)
console.log(`Resultado do Calculo 1 da formula B: ${calc1B.calcularFormula().toFixed(2)}`)

