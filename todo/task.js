const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.getElementById('tasks__add');


tasksAdd.addEventListener('click', (elem) => {
    elem.preventDefault();
    if (taskInput.value === '') {
        return;
    }
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = 
        `<div class="task__title">
         ${taskInput.value}
         </div>
         <a href="#" class="task__remove">&times;</a>`;
    tasksList.appendChild(task);
    taskInput.value = '';
});

tasksList.addEventListener('click', (elem) => {
    if (elem.target.classList.contains('task__remove')) {
        elem.target.closest('.task').remove();
    }
});