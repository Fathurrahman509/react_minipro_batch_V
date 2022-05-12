import React, { useEffect, useState } from 'react'
import './TodoCard.css'

const TodoCardrfc = ({ todo, handleRemoveTodo, handleEditTodo }) => {
  const [isEdit, setIsEdit] = useState(false)

  // for edit
  const [todoIndex, setTodoIndex] = useState(-1)
  const [todoTitle, setTodoTitle] = useState('')
  const [todoDescription, setTodoDescription] = useState('')
  const [todoPriority, setTodoPriority] = useState('High')
  const [todoNote, setTodoNote] = useState('')

  useEffect(() => {
    setTodoIndex(todo.index)
    setTodoTitle(todo.title)
    setTodoDescription(todo.description)
    setTodoPriority(todo.priority)
    setTodoNote(todo.note)
  },[todo])

  const handleRemove = () => {
    handleRemoveTodo(todo.index)
  }

  const handleEdit = () => {
    // console.log('handle edit succes cuy');
    setIsEdit(true)
  }

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
            index: todo.index,
            title: todoTitle,
            description: todoDescription,
            priority: todoPriority,
            note: todoNote
        }
        // handleAddTodo(newTodo)
        handleEditTodo(newTodo)
        setIsEdit(false);
        setTodoTitle('')
        setTodoDescription('')
        setTodoPriority('High')
        setTodoNote('')
    } else {
        alert('Di isi dulu bos. Jangan di biarkan kosong ntar malah diambil yang lain')
    }

}

  return (
    <div className='card-container'>
      {isEdit
        ?
        <form onSubmit={handleSubmit} >
          <h4>Edit Todo</h4>
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
        :
        <>
          <div className='content-container'>
            <h2>{todo.title} <span>{todo.priority}</span></h2>
            <p>{todo.description}</p>
            <br />
            <div className='note-container'>
              <code>notes: {todo.note}</code>
            </div>
          </div>
          <button className='card-button' onClick={handleRemove}>Delete</button>
          <button className='card-button' onClick={handleEdit}>Edit</button>
        </>
      }

    </div>
  )
}

export default TodoCardrfc