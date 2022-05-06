import React from 'react'
import './AddTodo.css'

const AddTodorfc = () => {
    return (
        <div className='add-todo-container'>
            <input value={this.state.title} onChange={(event) => this.updateTitle(event)} className='add-todo-title' type='text' placeholder='Todo Title'></input>
            <input value={this.state.description} onChange={(event) => this.updateDescription(event)} className='add-todo-description' type='text' placeholder='Todo Description'></input>
            <button onClick={this.clickAdd} className='add-todo-button'>Add</button>
        </div>
    )
}

export default AddTodorfc