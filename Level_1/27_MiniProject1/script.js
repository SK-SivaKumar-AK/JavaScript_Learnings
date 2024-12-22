const submit = document.getElementById("addTaskBtn");
const deleteAll = document.getElementById("deleteTaskBtn");
const taskListElement = document.getElementById("taskList");

let taskList = [];

function renderTaskList(){
    taskListElement.innerHTML = "";
    taskList.forEach((task , index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${task.task} - ${task.status} <buttom id="deleteTaskBtn" onClick="deleteTask(${index})">Delete</button>`;
        taskListElement.append(listItem);
    });
}

submit.addEventListener("click" , () => {
    const taskInput = document.getElementById("taskInput");
    const taskStatus = document.getElementById("taskStatus");
    //console.log(taskInput , tasStatus);
    taskList.unshift({ task : taskInput.value , status : taskStatus.value });
    renderTaskList();
    taskInput.value = "";
    taskStatus.value = "Completed";
});

deleteAll.addEventListener("click" , () => {
    taskList = [];
    renderTaskList();
    taskInput.value = "";
    taskStatus.value = "Completed";
}); 

window.deleteTask = (index) => {
    taskList.splice(index , 1);
    renderTaskList();
};