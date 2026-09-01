 export class peso_ideal {
    altura: number
    sexo: string
    private kHome: number
    private kMulher: number

    constructor(altura: number, sexo: string){
        this.altura = altura
        this.sexo = sexo
        this.kHome = 4
        this.kMulher = 2
    }

    calcualr_Peso_Ideal(): number{
        if(this.sexo == 'M'){
            const peso: number = this.altura - 100 - (this.altura - 150) / this.kHome
            return peso
        }else if(this.sexo == 'F'){
            const peso: number = this.altura - 100 - (this.altura - 150) / this.kMulher
            return peso
        }else{
            throw new Error("Sexo inválido.")
        }
    }
}