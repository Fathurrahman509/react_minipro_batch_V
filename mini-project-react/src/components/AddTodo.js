import React, { Component } from 'react'
import './AddTodo.css'

class AddTodo extends Component {
  render() {
    return (
      <div className='add-todo-container'>
          <input className='add-todo-title' type='text' placeholder='Todo Title' ></input>
          <input className='add-todo-description' type='text' placeholder='Todo Description' ></input>
          <button className='add-todo-button'>Add</button>
      </div>
    )
  }
}

export default AddTodo