import React, { useState } from 'react'
import './TodoCard.css'

const TodoCardrfc = ({ todo, handleRemoveTodo }) => {

  const handleRemove = () => {
    handleRemoveTodo(todo.index)
  }

  return (
    <div className='card-container'>
      <div className='content-container'>
        <h2>{todo.title} <span>{todo.priority}</span></h2>
        <p>{todo.description}</p>
        <br />
        <div className='note-container'>
          <code>notes: {todo.note}</code>
        </div>
      </div>
      <button className='card-button' onClick={handleRemove}>Delete</button>
      {/* <button className='card-button' onClick={handleEdit}>Edit</button> */}
    </div>
  )
}

export default TodoCardrfc