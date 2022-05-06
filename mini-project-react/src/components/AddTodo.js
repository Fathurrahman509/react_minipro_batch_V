import React, { Component } from 'react'
import './AddTodo.css'

class AddTodo extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: ''
    }

    this.updateTitle = this.updateTitle.bind(this)
    this.updateDescription = this.updateDescription.bind(this)
    this.clickAdd = this.clickAdd.bind(this)

  }

  updateTitle(event) {
    const newTitle = event.target.value
    this.setState({
      ...this.state,
      title: newTitle
    })
  }

  updateDescription(event) {
    const newDescription = event.target.value
    this.setState({
      ...this.state,
      description: newDescription
    })
  }

  clickAdd() {
    console.log('title', this.state.title)
    console.log('description', this.state.description)
    const todo = {
      title: this.state.title,
      description: this.state.description
    }
    this.props.updateTodos(todo)
  }

  render() {
    return (
      <div className='add-todo-container'>
        <input value={this.state.title} onChange={(event) => this.updateTitle(event)} className='add-todo-title' type='text' placeholder='Todo Title'></input>
        <input value={this.state.description} onChange={(event) => this.updateDescription(event)} className='add-todo-description' type='text' placeholder='Todo Description'></input>
        <button onClick={this.clickAdd} className='add-todo-button'>Add</button>
      </div>
    )
  }
}

export default AddTodo