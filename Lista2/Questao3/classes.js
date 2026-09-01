export class media_parcial {
    constructor(b1, b2) {
        this.b1 = b1;
        this.b2 = b2;
    }
    calcularMedia() {
        let mediaParcial = ((this.b1 * 2) + (this.b2 * 3)) / 5;
        return mediaParcial;
    }
}
