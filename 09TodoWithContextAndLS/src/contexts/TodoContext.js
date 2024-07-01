import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        { id: 1, text: "Learn React", completed: false },
    ],
    createTodo: (id, text) => {},
    updateTodo: (id, text) => {},
    toggleTodo: (id) => {},
    deleteTodo: (id) => {},
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider