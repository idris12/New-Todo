const getSavedTodos = function() {
	const todosJSON = localStorage.getItem('todos')

	if (todosJSON !== null) {
		return JSON.parse(todosJSON)
	} else {
		return []
	}
}

// Save todos to localStorage
const saveTodos = function(todos) {
	localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo
const removeTodo = function(id) {
	const removeId = todos.findIndex(function(todo) {
		return todo.id === id
	})

	if (removeId > -1) {
		return todos.splice(removeTodo, 1)
	}
}

// Toggle
const toggleTodo = function(id) {
	const todo = todos.find(function(todo) {
		return todo.id === id
	})
	console.log(todo)

	if (todo !== undefined) {
		todo.completed = !todo.completed
	}
}

// Render application todos based on filters
const renderTodos = function(todos, filters) {
	const filteredTodos = todos.filter(function(todo) {
		const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
		const hideCompletedMatch = !filters.hideCompleted || !todo.completed
		return searchTextMatch && hideCompletedMatch
	})

	const incompleteTodos = filteredTodos.filter(function(todo) {
		return !todo.completed
	})

	document.querySelector('#todos').innerHTML = ''
	document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

	filteredTodos.forEach(function(todo) {
		document.querySelector('#todos').appendChild(generateTodoDOM(todo))
	})
}
// Get the DOM elements for an individual note
const generateTodoDOM = function(todo) {
	const todoEl = document.createElement('div')
	let checkBox = document.createElement('input')
	const textEl = document.createElement('span')
	const button = document.createElement('button')
	//setup checkbox
	checkBox.setAttribute('type', 'checkbox')
	checkBox.checked = todo.completed
	todoEl.appendChild(checkBox)
	checkBox.addEventListener('change', function(e) {
		toggleTodo(todo.id)
		saveTodos(todos)
		renderTodos(todos, filters)
	})

	//setup text
	textEl.textContent = todo.text
	todoEl.appendChild(textEl)

	// setup buttons
	button.textContent = 'X'
	todoEl.appendChild(button)
	button.addEventListener('click', function() {
		removeTodo(todo.id)
		saveTodos(todos)
		renderTodos(todos, filters)
	})
	return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = function(incompleteTodos) {
	const summary = document.createElement('h2')
	summary.textContent = `You have ${incompleteTodos.length} todos left`
	return summary
}
