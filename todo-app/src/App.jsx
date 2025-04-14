import { useState } from 'react'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import './App.css'
import TodoItem from './components/TodoItem'

function App() {
  const [count, setCount] = useState(0)

  const todoItems = [
    { id: 1, text: 'Buy milk' },
    { id: 2, text: 'Walk the dog' },
    { id: 3, text: 'Do laundry' },
    { id: 4, text: 'Read a book' },
    { id: 5, text: 'Write code' },
    { id: 6, text: 'Go grocery shopping' },
    { id: 7, text: 'Clean the house' },
    { id: 8, text: 'Exercise' },
    { id: 9, text: 'Cook dinner' },
    { id: 10, text: 'Watch a movie' },
  ]

  return (
    <>
      <div className="form">
        <AppName todoName="Todo App" />
        <AddTodo />
        <TodoItem todoItems={todoItems}/>
      </div>
    </>
  )
}

export default App
