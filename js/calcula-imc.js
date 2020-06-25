function imc(){
    const pascientes = document.querySelectorAll(".paciente");
    pascientes.forEach((i)=>{
        const pasciente = i;        
        
        const pesoTD = pasciente.querySelector(".info-peso");
        const peso = pesoTD.textContent;
        
        const alturaTD = pasciente.querySelector(".info-altura");
        const altura = alturaTD.textContent;

        const imc = pasciente.querySelector(".info-imc");

        let pesoEhValido = validaPeso(peso);
        let alturaEhValida = validaAltura(altura);
        
        if(!pesoEhValido){
            imc.textContent = "Peso invalido !!";
            pesoEhValido = false;
            pasciente.classList.add("paciente-invalido");
        }
        if(!alturaEhValida){
            imc.textContent = "Altura invalida !!"
            alturaEhValida = false;
            pasciente.classList.add("paciente-invalido"); // classList consegui moudar o css
        }
        if(pesoEhValido && alturaEhValida){
            const resultado = calculaImc(peso,altura);
            imc.textContent = resultado
        }       
    })
}

imc();

function calculaImc(peso,altura){
    let imc = 0;
    imc = peso / (altura * altura)
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3.0){
        return true;
    }else{
        return false;
    }
}



