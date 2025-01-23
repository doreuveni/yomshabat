export const getTodos = (): string[] => {
    if (typeof window !== 'undefined') {
        const todos = localStorage.getItem('todos')
        return todos ? JSON.parse(todos) : []
    }
    return []
}

export const setTodos = (todos: string[]) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('todos', JSON.stringify(todos))
    }
}

export const addTodo = (todo: string) => {
    const todos = getTodos()
    const newTodos = [...todos, todo]
    setTodos(newTodos)
    return newTodos
}

export const removeTodo = (index: number) => {
    const todos = getTodos()
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
    return newTodos
}