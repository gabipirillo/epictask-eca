document.querySelector("#botao-cadastrar").addEventListener("click", ()=> {
    
    const form= document.querySelector("form")
    
    const tarefa ={
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value
    }

    validar(tarefa)
    
    console.log(tarefa)

})

function validar (tarefa){
    // limparError()
    if (tarefa.titulo.trim() == ""){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-erro").innerText = "Nome do produto é obrigatorio"
        console.log("Tópico Reprovado. Insira os dados corretamente");
    } else{
        limparError();
        console.log("Tópico Aprovado");
    }
    if (tarefa.descricao.trim() == "" || tarefa.descricao.lenght <10){
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao-erro").innerText = "Descrição deve ter pelo menos 10 caracteres"
        console.log("Tópico Reprovado. Insira os dados corretamente");
    }else{
        limparError();
        console.log("Tópico Aprovado");
    }
    if (tarefa.pontos <=0){
        document.querySelector("#pontos").classList.add("is-error")
        document.querySelector("#pontos-erro").innerText = "pontos deve ser maior que zero "
        console.log("Tópico Reprovado. Insira os dados corretamente");
    }else{
        limparError();
        console.log("Tópico Aprovado");
    }
}

function limparError(){
    //Todo percorrer o array
    const errorElements = document.querySelectorAll("input.is-error, textarea.is-error")
    errorElements.forEach(element => element.classList.remove("is-error"))
}
