import React, { useState } from 'react'
import './AddTodo.css'

const AddTodorfc = ({ handleAddTodo }) => {

    const [todoTitle, setTodoTitle] = useState('')
    const [todoDescription, setTodoDescription] = useState('')
    const [todoPriority, setTodoPriority] = useState('High')
    const [todoNote, setTodoNote] = useState('')

    const handleTitle = (e) => {
        const val = e.target.value;
        setTodoTitle(val)
    }

    const handleDescription = (e) => {
        const val = e.target.value;
        setTodoDescription(val)
    }

    const handlePriority = (e) => {
        const val = e.target.value;
        setTodoPriority(val)
    }

    const handleNote = (e) => {
        const val = e.target.value;
        setTodoNote(val)
    }

    const handleValidation = () => {
        if (todoTitle === '') {
            return false
        } else {
            return true
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (handleValidation()) {
            const newTodo = {
                title: todoTitle,
                description: todoDescription,
                priority: todoPriority,
                note: todoNote
            }
            handleAddTodo(newTodo)
            setTodoTitle('')
            setTodoDescription('')
            setTodoPriority('High')
            setTodoNote('')
        } else {
            alert('Di isi dulu bos. Jangan di biarkan kosong ntar malah diambil yang lain')
        }
        // console.log('handle submit berhasill cuy')
        // console.log('title', todoTitle)
        // console.log('description', todoDescription)
        // console.log('priority', todoPriority)
        // console.log('note', todoNote)

    }

    return (
        <div className='add-todo-container'>
            <form onSubmit={handleSubmit} >
                <label>
                    Title:
                    <input value={todoTitle} onChange={handleTitle} className='add-todo-title' type='text' placeholder='Todo Title'></input>
                </label>
                <label>
                    Description:
                    <input value={todoDescription} onChange={handleDescription} className='add-todo-description' type='text' placeholder='Todo Description'></input>
                </label>
                <label>
                    Priority:
                    <select value={todoPriority} onChange={handlePriority} >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </label>
                <label>
                    Notes:
                    <textarea value={todoNote} onChange={handleNote} placeholder="e.g. learn basic react" />
                </label>
                <button type="submit" className='edit-todo-button'>Save</button>
            </form>
        </div>
    )
}

export default AddTodorfc;