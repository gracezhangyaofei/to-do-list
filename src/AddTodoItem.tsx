import React, { useState } from 'react';
import { AddTodo } from './TodoWithData'

const AddTodoItem = ({
	addTodo
}: {
	addTodo: AddTodo
}) => {
	const [newTodo, setNewTodo] = useState<string>('');

	const handleChange = (e: any) => {
		setNewTodo(e.target.value);
	}

	const handleSubmit = () => {
		addTodo(newTodo);
		setNewTodo('');	
	}

	return (
		<>
			<input type='text' value={newTodo} onChange={handleChange} placeholder='Input Todo' />
			<button type='submit' onClick={handleSubmit}>Add Todo</button>
		</>
	)
}

export default AddTodoItem