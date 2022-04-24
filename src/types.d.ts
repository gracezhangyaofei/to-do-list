// union type
type Place = 'home' | 'work' | { custom: string}

// Readonly object
type Todo = Readonly<{
	id: number
	text: string
	done: boolean
	place?: Place // place with ? to make it optional
}>

type CompleteAll = (todos: Todo[]) => void;
type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: string) => void;
