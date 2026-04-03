const tasks = [];

function addTask(task) {
    tasks.push(task);
    console.log("Task added:", task);
}

function listTasks() {
    console.log("All Tasks:");
    tasks.forEach((t, i) => console.log(i + 1 + ".", t));
}

module.exports = { addTask, listTasks };