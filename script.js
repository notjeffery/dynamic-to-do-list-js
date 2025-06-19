document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); 
  }

  // Save tasks to Local Storage
  function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Add a task (optionally save it)
  function addTask(taskText, save = true) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    removeBtn.addEventListener('click', function () {
      taskList.removeChild(li);

      // Remove from local storage
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = tasks.filter(task => task !== taskText);
      saveTasks(updatedTasks);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (save) {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      tasks.push(taskText);
      saveTasks(tasks);
    }
  }

  // Add Task from input field
  function handleAddTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    addTask(taskText); // Save to localStorage
    taskInput.value = '';
  }

  // Event Listeners
  addButton.addEventListener('click', handleAddTask);
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  });

  // Load tasks on page load
  loadTasks();
});
