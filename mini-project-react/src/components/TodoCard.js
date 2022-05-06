import React, { Component } from 'react'
import './TodoCard.css'

class TodoCard extends Component {
  render() {
    return (
      <div className='card-container'>
        <div className='content-container'>
          <h2>{this.props.todo.title}</h2>
          <p>{this.props.todo.description}</p>
        </div>
        <button>Delete</button>
      </div>
    )
  }
}

export default TodoCard