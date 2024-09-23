let addTodo = document.querySelector("#add-todo");
let listItem = document.querySelector('.list-items');
let inputField = document.querySelector("#input-text");

addTodo.addEventListener('click', addTask);

function addTask() {
    let inputText = inputField.value.trim(); 

    if(inputText){
    let li = document.createElement('li');
    li.textContent = inputText;
    listItem.appendChild(li);
    inputField.value ='';
    }
    else{
        alert('add task')
    }
    
}
