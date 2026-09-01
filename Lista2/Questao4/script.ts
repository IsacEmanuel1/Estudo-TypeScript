import { peso_ideal } from "./classe.js";

const selectSexo = document.getElementById("sexo") as HTMLSelectElement | null
const inputAltura = document.getElementById("altura") as HTMLInputElement | null
const butao = document.getElementById("buttCalcular") as HTMLButtonElement | null
const paragrafoResultado = document.getElementById("resultado") as HTMLParagraphElement | null

if(!selectSexo || !inputAltura || !butao || !paragrafoResultado){
    throw new Error("Elementos não encontrados")
}

butao.addEventListener("click", () =>{
    const sexo = selectSexo.value
    const altura: number = Number(inputAltura.value)

    if(sexo == "M"){
        const Pessoa1 = new peso_ideal(altura, sexo)

        paragrafoResultado.textContent = `O seu Peso Ideal: ${Pessoa1.calcualr_Peso_Ideal()}`
    }else if(sexo == "F"){
        const Pessoa2 = new peso_ideal(altura, sexo)

        paragrafoResultado.textContent = `O seu Peso Ideal: ${Pessoa2.calcualr_Peso_Ideal()}`
    }
})


