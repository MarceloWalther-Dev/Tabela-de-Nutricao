
    const botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", ()=>{
        event.preventDefault();
    
        const form = document.querySelector("#form-adiciona");
    
        const paciente = obtemPacienteDoForm(form);
        

        erros = validaPaciente(paciente);
        
        if(erros.length > 0){
            exibeMensagensDeErro(erros);
            return;
        }
        
            
        adicionaPacienteNaTabela(paciente)

        form.reset(); // função limpa formulario


        let mensagensDeErro = document.querySelector("#mensagens-erro");
        mensagensDeErro.innerHTML = "";

    });





function adicionaPacienteNaTabela(paciente){
    const pacienteTr =  montaTr(paciente);
    const tBody = document.querySelector("#tabela-pacientes");
    tBody.appendChild(pacienteTr)
} 





    
    function exibeMensagensDeErro(erros){
        let ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";
        
        erros.forEach(erro => {
            let li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li)
        });
    }

    function obtemPacienteDoForm(form){
        let paciente ={
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc : calculaImc(form.peso.value, form.altura.value)
        }
        return paciente
    }


    function montaTr(paciente){
        const pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");

        const nomeTd = montaTd(paciente.nome, "info-nome");
        const pesoTd =  montaTd(paciente.peso, "info-peso");
        const alturaTd =  montaTd(paciente.altura, "info-altura");
        const gorduraTd = montaTd(paciente.gordura, "info-gordura");
        const imcTd = montaTd(paciente.imc, "info-imc");

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);

        return pacienteTr
    }

    function montaTd(dados,classe){
        let td = document.createElement("td");
        td.textContent = dados;
        td.classList.add(classe);
        
        return td;
    }


function validaPaciente(paciente){
    let erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)) erros.push("Peso é invalido")

    if(!validaAltura(paciente.altura)) erros.push("Altura invalida")

    if(paciente.gordura.length == 0){
        erros.push("Gordura não pode ser em branco")
    }
    if(paciente.peso.length == 0){
        erros.push("Peso não pode ficar em branco")
    }
    if(paciente.altura.length == 0){
        erros.push("Altura não pode ficar em branco")
    }
    return erros;
}
