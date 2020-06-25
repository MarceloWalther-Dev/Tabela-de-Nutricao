const tabela = document.querySelector("#tabela-pacientes");


    tabela.addEventListener("dblclick",(event)=>{
        event.target.parentNode.classList.add("fadeOut");// adiciona o css fadeOut no pai do evento

        setTimeout(function(){
            if(event.target.tagName == "TD"){            
                event.target.parentNode.remove();
            }
        },500);

        /* let alvoEvento = event.target;
        let paiDoAlvo = alvoEvento.parentNode;
        paiDoAlvo.remove(); */
    })
    

