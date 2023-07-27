const submitBtn = document.getElementById('submit-btn');
const taskList = document.querySelector('.task-list');
const inputText = document.getElementById('task-input');
let inputValue;
let newTask;
let deleteBtn;

submitBtn.addEventListener('click', addTask);

function addTask() {
    newTask = document.createElement('li');
    taskList.prepend(newTask);
    addingLeftPanel();
    addingRightPanel();
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
}
