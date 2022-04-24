import React, { useState } from 'react'
import { Todo } from './TodoWithData'
import TodoItem from './TodoItem'


type CompleteTodo = Todo & {
	readonly done: true
}

const TodoList = ({
	todos: items,
	showMarkAllAsCompleted
}: {
	todos: Todo[]
	showMarkAllAsCompleted?: boolean
}) => {
	const [todos, setTodos] = useState<Array<Todo>>(items);

	const completeAll = (todos: Todo[]) => {
		const updateTodos = todos.map(todo => ({
			...todo,
			done: true
		}))
		setTodos(updateTodos);
		return updateTodos;
	}

	const toggleTodo = (selectedTodo: Todo) => {
		const updateTodos = todos.map(todo => {
			if (todo === selectedTodo) {
				return {...todo, done: !todo.done};
			}
			return todo;
		})
		setTodos(updateTodos);
	}

	return (
		<>
			<table>
			{todos.map((item, index) => (
				<TodoItem
					todo={item}
					toggleTodo={toggleTodo}
				/>
			))}
			</table>
			<div>
				{showMarkAllAsCompleted ? <span onClick={() => completeAll(todos)}>Mark all as complect</span> : ''}
			</div>
		</>
	)
}

export default TodoList



