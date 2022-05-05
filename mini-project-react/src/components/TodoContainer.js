import React, { Component } from 'react'
import './TodoContainer.css'
import AddTodo from './AddTodo'
import TodoCard from './TodoCard'

class TodoContainer extends Component {
  constructor() {
    super();
      this.state = {
        todos: [
          {
            title: 'learning Front End',
            description: 'learn html, javascript, css'
          },
          {
            title: 'learning Back End',
            description: 'learn mysql, nodejs, postman'
          },
          {
            title: 'learning Framework',
            description: 'learn angular.js, vue.js, react.js'
          }
        ]
      }
      this.updateTodos = this.updateTodos.bind(this)
  }

  updateTodos (todo) {
    const newTodos = {...this.state.todos, todo}
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <section>
        <AddTodo updateTodos={this.updateTodos.todos}/>
        {this.state.todos.map(todo => {
          return <TodoCard todo={todo} key={todo.title}/>
        })}
      </section>
    )
  }
}

export default TodoContainer