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
        // btn.style.background = 'red';
        // btn.style.color = 'white';
        li.classList.add('li-class');
        
        let span = document.createElement('span');
        span.textContent = inputText;
        
        li.appendChild(span);
        li.appendChild(btn);
        listItem.appendChild(li);
        inputField.value = '';

        li.addEventListener('click', function(e) {
            if (e.target !== btn) {  
                span.style.textDecoration = span.style.textDecoration === 'line-through' ? 'none' : 'line-through';
            }
        });

        btn.addEventListener('click', function(){
            listItem.removeChild(li);
        });
    }
    else{
        alert('add task');
    }
}
