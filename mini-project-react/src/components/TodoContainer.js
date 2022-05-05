import React, { Component } from 'react'
import './TodoContainer.css'
import AddTodo from './AddTodo'

class TodoContainer extends Component {
  render() {
    return (
      <section>
        <AddTodo />
      </section>
    )
  }
}

export default TodoContainer