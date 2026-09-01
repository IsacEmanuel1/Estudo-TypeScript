export class Triangulo {
    constructor(inputLado1, inputLado2, inputLado3) {
        this.lado1 = inputLado1;
        this.lado2 = inputLado2;
        this.lado3 = inputLado3;
    }
    calcular() {
        if (this.lado1 < (this.lado2 + this.lado3) && this.lado2 < (this.lado1 + this.lado3) && this.lado3 < (this.lado1 + this.lado2)) {
            return true;
        }
        else {
            return false;
        }
    }
}
