import React from 'react'
import { BsCheck } from 'react-icons/bs'
import { BsTrash } from 'react-icons/bs'
import Check from './Check'
import cn from 'classnames'
import CreateTodoField from '../create-to-do-field/CreateTodoField'
const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full'
            onClick={() => changeTodo(todo._id)}>

            <button className='flex items-center'>
                <Check isCompleted={todo.isCompleted}></Check>
                <span className={cn({
                    'line-through': todo.isCompleted
                })}> {todo.title}</span>
            </button>
            <button onClick={(e) => {
                e.stopPropagation();
                removeTodo(todo._id)
            }}>
                <BsTrash size={22} className='text-gray-600 hover:text-pink-600 transition-colors ease-in-out duration-300'></BsTrash>
            </button>

        </div>
    )
}

export default TodoItem