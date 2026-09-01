 export class Triangulo {
    lado1: number
    lado2: number
    lado3: number

    constructor(inputLado1: number, inputLado2: number, inputLado3:number){
        this.lado1 = inputLado1
        this.lado2 = inputLado2
        this.lado3 = inputLado3
    }

    calcular(): boolean{
        if(this.lado1 < (this.lado2 + this.lado3) && this.lado2 < (this.lado1 + this.lado3) && this.lado3 < (this.lado1 + this.lado2)){
            return true
        }
        else{
            return false
        }
    }
}