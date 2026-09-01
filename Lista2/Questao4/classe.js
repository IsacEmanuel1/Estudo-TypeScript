export class peso_ideal {
    constructor(altura, sexo) {
        this.altura = altura;
        this.sexo = sexo;
        this.kHome = 4;
        this.kMulher = 2;
    }
    calcualr_Peso_Ideal() {
        if (this.sexo == 'M') {
            const peso = this.altura - 100 - (this.altura - 150) / this.kHome;
            return peso;
        }
        else if (this.sexo == 'F') {
            const peso = this.altura - 100 - (this.altura - 150) / this.kMulher;
            return peso;
        }
        else {
            throw new Error("Sexo inválido.");
        }
    }
}
