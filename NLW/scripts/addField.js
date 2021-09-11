//procurar o botão
document.querySelector("#add-time")
.addEventListener('click',cloneField) //ao "click" a função cloneField é ativada 
//quando clicar no botão - gera um evento

//executa uma ação
function cloneField(){
    //duplicar os campos, quais campos ?
    const newFildesContainer = document.querySelector('.schedule-item').cloneNode(true)//boolea: true or false 
    
    //pegar os campos. Que campos ?
    const field = newFildesContainer.querySelectorAll('input') //pegar todos os campos imput do no que vai ser clonado
    
    //para cada campo, limpar os campos
   field.forEach(function(field){
    field.value = ""
   })
    
    //colocar nas página, onde ?
    document.querySelector('#schdule-itens').appendChild(newFildesContainer)//appendChield adicionar um node um nó, o filho
}
    

    
