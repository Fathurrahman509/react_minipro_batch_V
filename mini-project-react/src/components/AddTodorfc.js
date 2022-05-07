import React, { useState } from 'react'
import './AddTodo.css'

const AddTodorfc = ({handleAddTodo}) => {

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


    return (
        <div className='add-todo-container'>
            <input value={todoTitle} onChange={e => handleTitle(e)} className='add-todo-title' type='text' placeholder='Todo Title'></input>
            <input value={todoDescription} onChange={e => handleDescription(e)} className='add-todo-description' type='text' placeholder='Todo Description'></input>
            <button onClick={handleAdd} className='add-todo-button'>Add</button>
        </div>
    )
}

export default AddTodorfc