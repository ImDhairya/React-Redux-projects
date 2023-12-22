import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import { formatPostcssSourceMap } from 'vite';

function Addtodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault()

    dispatch(addTodo(input))
    setInput('')
  }

  return (
   <form onSubmit={addTodoHandler} className=' space-x-3 mt-12'>
    <input type='text'
    className=' bg-gray-700 rounded border border-gray-700 focus:border-indigo-500'
    >

    </input>

   </form>
  )
}

export default Addtodo