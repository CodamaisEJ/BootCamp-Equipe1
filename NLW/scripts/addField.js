//procurar o botão
document.querySelector("#add-time")
.addEventListener('click',cloneField) //ao "click" a função cloneField é ativada 
//quando clicar no botão - gera um evento

//executa uma ação
function cloneField(){
    //duplicar os campos, quais campos ?
    fields = document.querySelector('.schedule-item').cloneNode(true)//boolea: true or false 
    //colocar nas página, onde ?
    document.querySelector('#schdule-itens').appendChild(fields)//appendChield adicionar um node um nó, o filho
}
    

    
