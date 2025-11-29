// DOM elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const searchBar = document.getElementById("searchBar");

// ----------------------------
// Retrieve tasks from localStorage or return empty array
// ----------------------------
function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

// ----------------------------
// Save tasks to localStorage
// ----------------------------
function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ----------------------------
// Render all tasks to screen
// ----------------------------
function renderTasks() {
    const tasks = getTasks();
    taskList.innerHTML = ""; // Clear tasks before re-rendering

    tasks.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        // Task Text
        const taskText = document.createElement("span");
        taskText.innerText = task.text;

        if (task.completed) {
            taskText.classList.add("completed");
        }

        // Complete Button
        const completeBtn = document.createElement("button");
        completeBtn.innerText = task.completed ? "Undo" : "Complete";
        completeBtn.addEventListener("click", () => toggleTask(task.id));

        // Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", () => removeTask(task.id));

        taskDiv.appendChild(taskText);
        taskDiv.appendChild(completeBtn);
        taskDiv.appendChild(deleteBtn);

        taskList.appendChild(taskDiv);
    });
}

// ----------------------------
// Add new task
// ----------------------------
addBtn.addEventListener("click", function () {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Task cannot be empty!");
        return;
    }

    const tasks = getTasks();

    const newTask = {
        id: Date.now(),      // Unique ID
        text: text,
        completed: false
    };

    tasks.push(newTask);
    saveTasks(tasks);
    renderTasks(); 
    taskInput.value = "";
});

// ----------------------------
// Toggle completion status
// ----------------------------
function toggleTask(id) {
    const tasks = getTasks();
    const task = tasks.find(t => t.id === id);

    task.completed = !task.completed;

    saveTasks(tasks);
    renderTasks();
}

// ----------------------------
// Remove a task
// ----------------------------
function removeTask(id) {
    let tasks = getTasks();
    tasks = tasks.filter(task => task.id !== id);

    saveTasks(tasks);
    renderTasks();
}

// ----------------------------
// Real-time Search
// ----------------------------
searchBar.addEventListener("input", function () {
    const searchText = searchBar.value.toLowerCase();
    const tasks = document.querySelectorAll(".task");

    tasks.forEach(task => {
        const text = task.querySelector("span").innerText.toLowerCase();
        task.style.display = text.includes(searchText) ? "flex" : "none";
    });
});

// ----------------------------
// Load tasks automatically on page load
// ----------------------------
window.addEventListener("load", renderTasks);
