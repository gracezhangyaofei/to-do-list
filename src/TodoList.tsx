import { Todo, ToggleTodo, CompleteAll } from './TodoWithData'
import TodoItem from './TodoItem'

const TodoList = ({
	todos,
	showMarkAllAsCompleted,
	toggleTodo,
	completeAll
}: {
	todos: Todo[]
	showMarkAllAsCompleted?: boolean
	toggleTodo: ToggleTodo
	completeAll: CompleteAll
}) => {
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



