document.getElementById('add-task').addEventListener('click', function () {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            newTask.classList.add('completed');
        } else {
            newTask.classList.remove('completed');
        }
    });

    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(newTask);
    });

    newTask.appendChild(checkbox);
    newTask.appendChild(taskLabel);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    taskInput.value = '';
});