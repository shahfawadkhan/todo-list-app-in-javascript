let addTodo = document.querySelector("#add-todo");
let listItem = document.querySelector('.list-items');
let inputField = document.querySelector("#input-text");

addTodo.addEventListener('click', addTask);

function addTask() {
    let inputText = inputField.value.trim(); 

    if(inputText){
    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.textContent = 'remove';
    li.textContent = inputText;
    li.appendChild(btn);
    listItem.appendChild(li);
    inputField.value ='';

    btn.addEventListener('click' , function(){
        listItem.removeChild(li);
    })
    }
    else{
        alert('add task')
    }
}
