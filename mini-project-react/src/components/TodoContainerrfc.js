import React, { useState, useEffect } from 'react'
import './TodoContainer.css'
import AddTodorfc from './AddTodorfc'
import TodoCardrfc from './TodoCardrfc'

const TodoContainerrfc = () => {
    const [todoList, setTodoList] = useState([
        {
            index: 0,
            title: 'learning Front End',
            description: 'learn html, javascript, css'
        },
        {
            index: 1,
            title: 'learning Back End',
            description: 'learn mysql, nodejs, postman'
        },
        // {
        //     title: 'learning Framework',
        //     description: 'learn angular.js, vue.js, react.js'
        // }
    ])

    // useEffect(() => {
    //     console.log('hi i use first useeffect');
    // },)

    // useEffect(() => {
    //     console.log('hi i use second useeffect', todoList.length);
    // }, [todoList])

    const handleAddTodo = (newTodo) => {
        const tempNewTodo = {
            index: todoList.length + 1,
            title: newTodo.title,
            description: newTodo.description
        }
        setTodoList([...todoList, tempNewTodo])
    }

    const handleRemoveTodo = (index) => {
        const newTodoList = todoList.filter(todo => todo.index !== index)
        setTodoList(newTodoList)
    }

    return (
        <section>
            <AddTodorfc handleAddTodo={handleAddTodo} />
            {todoList.map((todo, index) => {
                return <TodoCardrfc key={index} todo={todo} handleRemoveTodo={handleRemoveTodo} />
            })}
        </section>
    )
}

export default TodoContainerrfc