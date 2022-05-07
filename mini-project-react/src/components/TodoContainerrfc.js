import React, {useState} from 'react'
import './TodoContainer.css'
import AddTodorfc from './AddTodorfc'
import TodoCardrfc from './TodoCardrfc'

const TodoContainerrfc = () => {
    const [todoList, setTodoList] = useState ([
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
    ])
    
    const handleAddTodo = (newTodo) => {
        setTodoList([...todoList, newTodo])
    }

    return (
        <section>
            <AddTodorfc handleAddTodo={handleAddTodo} />
            {todoList.map((todo, index) => {
                return <TodoCardrfc todo={todo} key={index} />
            })}
        </section>
    )
}

export default TodoContainerrfc