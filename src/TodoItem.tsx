import React from 'react'
import './TodoItem.css'

function placeToString(place: Place): string {
	if (place === 'home') {
		return ' Home'
	} else if (place === 'work') {
		return ' Work'
	} else {
		return ' ' + place.custom
	}
}

const TodoItem = ({
	todo,
	toggleTodo
}: {
	todo: Todo
	toggleTodo: ToggleTodo
}) => {
	return (
		<>
			<tr className={todo.done ? 'complete' : ''}>
				<td><input type='checkbox' checked={todo.done} onClick={() => toggleTodo(todo)} /></td>
				<td>{todo.id}</td>
				<td>{todo.text}</td>
				<td>{todo.place && placeToString(todo.place)}</td>
			</tr>
		</>
	)
}

export default TodoItem