import React, { useState } from 'react'
import './AddTodo.css'

const AddTodorfc = ({ handleAddTodo }) => {

    const [todoTitle, setTodoTitle] = useState('')
    const [todoDescription, setTodoDescription] = useState('')

    const handleTitle = (e) => {
        setTodoTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setTodoDescription(e.target.value)
    }

    const handleAdd = () => {
        console.log('title', todoTitle)
        console.log('description', todoDescription)
        const newTodo = {
            title: todoTitle,
            description: todoDescription
        }
        handleAddTodo(newTodo)
    }

    const handleSubmit = (e) => {
        console.log('handle submit berhasill cuy');
    }

    return (
        <div className='add-todo-container'>
            <form onSubmit={handleSubmit} >
                <label>
                    Title:
                    <input value={todoTitle} onChange={e => handleTitle(e)} className='add-todo-title' type='text' placeholder='Todo Title'></input>
                </label>
                <label>
                    Description:
                    <input value={todoDescription} onChange={e => handleDescription(e)} className='add-todo-description' type='text' placeholder='Todo Description'></input>
                </label>
                <button type="submit" className='add-todo-button'>Add</button>
            </form>

        </div>
    )
}

export default AddTodorfc