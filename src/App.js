import './App.css'

import { useState, useEffect } from 'react'
import { BsTrash, BsBookmarkCheck, bsBookmarkChechFill } from 'react-icons/bs'

const API = 'http://localhost:5000'

function App() {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    }
    //Envio para API
    console.log(todo)

    setTitle('')
    setTime('')
  }

  return (
    <div className='App'>
      <div className='todo-header'>
        <h1>React Todo</h1>
      </div>

      <div className='form-todo'>
        <p>Insira a sua próxima tarefa:</p>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='title'>O que você vai fazer?</label>
            <input
              type='text'
              name='title'
              placeholder='Titulo da tarefa'
              onChange={(e) => setTitle(e.target.value)}
              value={title || ''}
              required
            />
          </div>

          <div className='form-control'>
            <label htmlFor='time'>Duração:</label>
            <input
              type='text'
              name='time'
              placeholder='Tempo estimado (em horas)'
              onChange={(e) => setTime(e.target.value)}
              value={time || ''}
              required
            />
          </div>
          <input type='submit' value='Criar Tarefa' />
        </form>
      </div>

      <div className='list-todo'>
        <h2>Lista de tarefas:</h2>
        {todos.length === 0 && <p>Não há tafefas!</p>}
      </div>
    </div>
  )
}

export default App
