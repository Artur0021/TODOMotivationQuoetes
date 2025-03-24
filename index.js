const taskForm = document.getElementById('taskForm')
const taskInput = document.getElementById('taskInput')
const todoListContainer = document.querySelector('.dolist')

function saveTasks() {
	const tasks = []
	document.querySelectorAll('.task-item').forEach((taskItem) => {
		tasks.push({
			text: taskItem.querySelector('.task-text').textContent,
			completed: taskItem
				.querySelector('.task-text')
				.classList.contains('completed'),
		})
	})
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTasks() {
	const savedTasks = JSON.parse(localStorage.getItem('tasks')) || []
	savedTasks.forEach((task) => {
		addTaskToDOM(task.text, task.completed)
	})
}

function addTaskToDOM(taskText, completed = false) {
	const taskItem = document.createElement('div')
	taskItem.className = 'task-item'

	const taskContent = document.createElement('span')
	taskContent.textContent = taskText
	taskContent.className = 'task-text'
	if (completed) taskContent.classList.add('completed')

	const doneButton = document.createElement('button')
	doneButton.textContent = 'Done'
	doneButton.className = 'done-btn'

	const deleteButton = document.createElement('button')
	deleteButton.textContent = 'Delete'
	deleteButton.className = 'delete-btn'

	taskItem.appendChild(taskContent)
	taskItem.appendChild(doneButton)
	taskItem.appendChild(deleteButton)

	todoListContainer.appendChild(taskItem)

	doneButton.addEventListener('click', function () {
		taskContent.classList.toggle('completed')
		saveTasks()
	})

	deleteButton.addEventListener('click', function () {
		taskItem.remove()
		saveTasks()
	})
}

if (taskForm) {
	taskForm.addEventListener('submit', function (e) {
		e.preventDefault()

		const taskText = taskInput.value.trim()
		if (taskText === '') {
			alert('Please enter a task!')
			return
		}

		addTaskToDOM(taskText)
		saveTasks()
		taskInput.value = ''
	})
}

loadTasks()

export const modal = document.getElementById('modal')
export const helpButton = document.querySelector('.helpa')
export const closeButton = document.querySelector('.close')

export function openmodalwindow() {
	helpButton.addEventListener('click', (event) => {
		event.preventDefault()
		modal.style.display = 'block'
	})

	closeButton.addEventListener('click', () => {
		modal.style.display = 'none'
	})

	window.addEventListener('click', (event) => {
		if (event.target === modal) {
			modal.style.display = 'none'
		}
	})

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			modal.style.display = 'none'
		}
	})
}

openmodalwindow()
