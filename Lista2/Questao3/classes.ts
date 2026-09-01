export class media_parcial {
    b1: number
    b2: number

    constructor(b1: number, b2: number){
        this.b1 = b1
        this.b2 = b2
    }

    calcularMedia(): number{
        let mediaParcial: number = ((this.b1 * 2) + (this.b2 * 3)) / 5
        return mediaParcial
    }
}