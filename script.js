var addTodo = document.querySelector("#add-todo");
var listItem = document.querySelector('.list-items')

addTodo.addEventListener('click' , addTask);

function addTask(){
    var li = document.createElement('li');
    listItem.appendChild(li);
}