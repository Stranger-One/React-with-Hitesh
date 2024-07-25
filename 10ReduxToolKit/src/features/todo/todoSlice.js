import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: 'Hello World', completed: false}],
    editId: ''
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload, 
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        setEditId: (state, action) => {
            state.editId = action.payload
            // console.log(state.editId)
        },
        editTodo: (state, action) => {
            // console.log(action.payload)
            state.todos.map(todo => {
                if (todo.id === state.editId) {
                    todo.text = action.payload.text
                    // console.log(todo.id)
                }
            })
        }
    }
})

export const { addTodo, removeTodo, editTodo, setEditId } = todoSlice.actions

export default todoSlice.reducer
