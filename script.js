function verificarNota(){

    let nota = document.getElementById("text-verify").value

    if(nota){
        if (nota <= 2){

            alert("Muito fraco")
        }

        else if (nota <= 4){
            alert("Insuficiente")
        }
        else if (nota <= 6 ){
            alert("Suficiente")
        }
        else if (nota <= 8){
            alert("Boa")
        }
        else if (nota <= 10){
            alert("Excelente")
        }

    }
    else{
        alert("Não inseriu valores")
    }
       
    }
