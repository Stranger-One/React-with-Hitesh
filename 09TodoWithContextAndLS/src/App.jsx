import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'


function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, text) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id == id ? {...prevTodo, text} :  prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id != id))
  }

  const toggleTodo = (id) => {
    // console.log("toggleTodo")
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id == id ? { ...prevTodo, completed : !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem("savedTodos"))
    if (getTodos && getTodos.length > 0) {
      setTodos(getTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("savedTodos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{todos, createTodo, updateTodo, toggleTodo, deleteTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((singleTodo) => (
              <div key={singleTodo.id} className='w-full'>
                <TodoItem todo={singleTodo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
