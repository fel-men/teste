const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');

// Adiciona evento ao botão de adicionar tarefas
addToDoButton.addEventListener('click', function () {
    if (inputField.value.trim() !== "") { // Verifica se o campo não está vazio
        const task = document.createElement('div');
        task.classList.add('task');

        const taskText = document.createElement('p');
        taskText.classList.add('task-text');
        taskText.innerText = inputField.value;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerText = "✖";

        task.appendChild(taskText);
        task.appendChild(deleteButton);
        toDoContainer.appendChild(task);

        inputField.value = "";

        // Marca como concluído ao clicar no texto da tarefa
        taskText.addEventListener('click', function () {
            taskText.classList.toggle('completed');
        });

        // Remove a tarefa ao clicar no botão de deletar
        deleteButton.addEventListener('click', function () {
            toDoContainer.removeChild(task);
        });
    } else {
        alert("Please enter a task before adding!");
    }
});
