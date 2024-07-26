import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo, editTodo } from '../features/todo/todoSlice.js'


function AddTodo({saveOrAdd, setSaveOrAdd, inputText, setInputText, setOnEdit}) {

    // const [inputText, setInputText] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()

        if(saveOrAdd == "Add Todo" ){
            if(inputText.length > 0){
                dispatch(addTodo(inputText))
            } else {
                alert("Please Enter Your Task ...")
            }
        }
        else if(saveOrAdd == "Save"){
            dispatch(editTodo({text: inputText}))
            setSaveOrAdd('Add Todo')
            // setOnEdit(false)
        }
        setInputText('')
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 w-full flex justify-center">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-1/2"
        placeholder="Enter a Todo..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg whitespace-nowrap"
      >
        {saveOrAdd}
      </button>
    </form>
  )
}

export default AddTodo