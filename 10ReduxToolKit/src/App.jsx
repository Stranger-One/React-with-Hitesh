import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {
  const [saveOrAdd, setSaveOrAdd] = useState('Add Todo')
  const [inputText, setInputText] = useState('')
  const [onEdit, setOnEdit] = useState(false)

  const todoProps = {
    setSaveOrAdd,
    saveOrAdd,
    inputText,
    setInputText,
    setOnEdit,
    onEdit
  };

  return (
    <div className='bg-zinc-500 p-20 flex flex-col items-center h-screen w-full'>
      <AddTodo {...todoProps} />
      <Todos {...todoProps} />
    </div>
  )
}

export default App
