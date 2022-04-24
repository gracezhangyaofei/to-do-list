import TodoList from './TodoList'

// union type
export type Place = 'home' | 'work' | { custom: string}

// Readonly object
export type Todo = Readonly<{
	id: number
	text: string
	done: boolean
	place?: Place // place with ? to make it optional
}>

export type toggleTodo = (selectedTodo: Todo) => void;


const TodoWithData = ({
	todos: items,
	showMarkAllAsCompleted
}: {
	todos: Todo[]
	showMarkAllAsCompleted?: boolean
}) => {
	return (
	    <TodoList
	    	todos={items}
	    	showMarkAllAsCompleted={showMarkAllAsCompleted}
	    />
	)
}

export default TodoWithData