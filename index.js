const submitBtn = document.getElementById('submit-btn');
const taskList = document.querySelector('.task-list');
const inputText = document.getElementById('task-input');
const btnForDelete = document.querySelectorAll('.delete-task-btn');
let inputValue;
let newTask;
let deleteBtn;

submitBtn.addEventListener('click', addTask);
inputText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    inputValue = inputText.value.trim();
    if (inputValue) {
        newTask = document.createElement('li');
        newTask.classList.add('task');
        taskList.prepend(newTask);
        addingLeftPanel();
        addingRightPanel();
    }
}

function addingLeftPanel() {
    let leftPanel = document.createElement('div');
    leftPanel.classList.add('left-panel');
    newTask.appendChild(leftPanel)
    addingTextTask(leftPanel);
}

function addingTextTask(leftPanel) {
    inputValue = inputText.value;
    let textTask = document.createElement('p');
    textTask.classList.add('task-text');
    textTask.textContent = inputValue;
    leftPanel.appendChild(textTask);
    inputText.value = '';
}

function addingRightPanel() {
    let rightPanel = document.createElement('div');
    rightPanel.classList.add('right-panel');
    newTask.appendChild(rightPanel);
    addingDeleteBtn(rightPanel);
}

function addingDeleteBtn(rightPanel) {
    deleteBtn = document.createElement('span');
    deleteBtn.textContent = '✖️';
    deleteBtn.classList.add('delete-task-btn');
    rightPanel.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', (e) => deleteTask(e))
}

function deleteTask(e) {
    const listItem = e.target.closest('.task');
    if (listItem) {
        listItem.remove();
    }
}
