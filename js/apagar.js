function apagar(id){
const tarefas=JSON.parse(localStorage.getItem("tarefas"))|| []
const tarefasAtualizadas= tarefas.filter(tarefas => tarefas.id != id)
localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas))

document.querySelector("#" + id).remove()




}