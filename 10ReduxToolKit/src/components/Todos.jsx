import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, editTodo, setEditId } from '../features/todo/todoSlice'
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function Todos({saveOrAdd, setSaveOrAdd, inputText, setInputText, setOnEdit, onEdit}) {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const handleEdit = (todo) => {
        const {id, text} = todo
        dispatch(setEditId(id))
        setSaveOrAdd('Save')
        setInputText(text)
        // setOnEdit(true)
    }

    // console.log(todos)
    return (
        <div className='w-full text-center mt-10'>
            <div className='text-2xl '>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className={`w-full mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded ${onEdit ? "opacity-40 pointer-events-none" : ""} `}
                        key={todo.id}
                    >
                        <div className='text-white'>{todo.text}</div>
                        <div className='flex gap-5'>
                            <button
                                onClick={() => handleEdit(todo)}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-lg"
                            >
                                <FaPen />
                            </button>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-xl"
                            >
                                <MdDelete />
                            </button>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos