var addTodo = document.querySelector("#add-todo");
var listItem = document.querySelector('.list-items');

addTodo.addEventListener('click', addTask);

function addTask() {
    var inputText = document.querySelector("#input-text").value; 
    var li = document.createElement('li');
    li.textContent = inputText;
    listItem.appendChild(li);
}
