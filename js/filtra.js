const campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    let pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){  

        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            let expressao = new RegExp(this.value,"i"); // "i" é para deixar minuscula sem usar o case sensitive

                if(!expressao.test(nome)){ // .test() é para verificar, no caso ele vai testar o paramentro que ele recebe
                    paciente.classList.add("invisivel")
                }else{
                    paciente.classList.remove("invisivel")
            }
        }
    }else{
        for(let i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

});