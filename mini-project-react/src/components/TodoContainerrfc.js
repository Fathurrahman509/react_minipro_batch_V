import React, { useState, useEffect } from 'react'
import './TodoContainer.css'
import AddTodorfc from './AddTodorfc'
import TodoCardrfc from './TodoCardrfc'

const TodoContainerrfc = () => {
    const [todoList, setTodoList] = useState([
        {
            index: 0,
            title: 'learning Front End',
            description: 'learn html, javascript, css',
            priority: 'Medium',
            note: 'no note'
        },
        {
            index: 1,
            title: 'learning Back End',
            description: 'learn mysql, nodejs, postman',
            priority: 'Medium',
            note: 'no noted ter'
        }
    ])

    const handleAddTodo = (newTodo) => {
        const tempNewTodo = {
            index: todoList.length + 1,
            title: newTodo.title,
            description: newTodo.description,
            priority: newTodo.priority,
            note: newTodo.note
        }
        setTodoList([...todoList, tempNewTodo])
    }

    const handleEditTodo = (editedTodo) => {
        console.log('edit todo', editedTodo);
        const newTodoList = todoList.splice(editedTodo.index, 1, editedTodo)
        console.log('berhasil cuyy edit', newTodoList)
        setTodoList(newTodoList)
    }

    const handleRemoveTodo = (index) => {
        const newTodoList = todoList.filter(todo => todo.index !== index)
        setTodoList(newTodoList)
    }

    return (
        <section>
            <AddTodorfc handleAddTodo={handleAddTodo} />
            {todoList.map((todo, index) => {
                return <TodoCardrfc key={index} todo={todo} handleRemoveTodo={handleRemoveTodo} handleEditTodo={handleEditTodo} />
            })}
        </section>
    )
}

export default TodoContainerrfc