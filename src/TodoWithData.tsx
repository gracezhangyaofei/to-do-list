import React, { useState } from 'react'
import TodoList from './TodoList'
import AddTodoItem from './AddTodoItem'

const TodoWithData = ({
	todos: items,
	showMarkAllAsCompleted
}: {
	todos: Todo[]
	showMarkAllAsCompleted?: boolean
}) => {
	const [todos, setTodos] = useState<Array<Todo>>(items);

	const completeAll: CompleteAll = (todos: Todo[]) => {
		const updateTodos = todos.map(todo => ({
			...todo,
			done: true
		}))
		setTodos(updateTodos);
		return updateTodos;
	}

	const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
		const updateTodos = todos.map(todo => {
			if (todo === selectedTodo) {
				return {...todo, done: !todo.done};
			}
			return todo;
		})
		setTodos(updateTodos);
	}

	const addTodo: AddTodo = (newTodo: string) => {
		newTodo.trim() !== '' &&
			setTodos([...todos, { id: todos.length + 1, text: newTodo, done: false }]);
	}

	return (
		<>
			<AddTodoItem addTodo={addTodo} />
		    <TodoList
		    	todos={todos}
		    	showMarkAllAsCompleted={showMarkAllAsCompleted}
		    	completeAll={completeAll}
		    	toggleTodo={toggleTodo}
		    />
        </>
	)
}

export default TodoWithData