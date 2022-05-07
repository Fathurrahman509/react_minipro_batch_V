import React from 'react'
import './TodoCard.css'

const TodoCardrfc = ({todo}) => {
  return (
    <div className='card-container'>
      <div className='content-container'>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
      <button>Delete</button>
    </div>
  )
}

export default TodoCardrfc