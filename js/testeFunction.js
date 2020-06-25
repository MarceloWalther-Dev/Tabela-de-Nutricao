const primeiro = document.querySelector("#primeiro");
const resultado = primeiro.querySelector(".info-imc");

function pegaDados(){
const tdNome = primeiro.querySelector(".info-nome");
const nome = tdNome.textContent;

const tdPeso = primeiro.querySelector(".info-peso");
const peso = tdPeso.textContent;

const tdAltura = primeiro.querySelector(".info-altura");
const altura = tdAltura.textContent;

if(peso <= 0 || peso >= 1000){
    resultado.textContent =`Peso invalido!`
}else if (altura >= 3.00 || altura <= 0){
    resultado.textContent =`Altura invalida!`
}else{
     return calculoImc(peso,altura)
}}



function calculoImc(peso, altura){

const imc = peso / (altura * altura)
return resultado.textContent = imc;
}

pegaDados()
