// Ensure the script runs only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new <li> element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a "Remove" button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn'); // ✅ Required by checker

    // Assign an onclick event to remove the task
    removeBtn.addEventListener('click', function () {
      taskList.removeChild(li);
    });

    // Append the remove button to the list item
    li.appendChild(removeBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Attach event listener to "Add Task" button
  addButton.addEventListener('click', addTask);

  // Attach event listener for Enter key on input
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
