
import React, { useEffect, useState } from "react";
import { v4 as uuidv4, v4 } from 'uuid';

const CreateTodoField = ({ setTodos }) => {

    const [title, setTitle] = useState('')

    const addTodo = title => {
        setTodos(prev => [
            {
                _id: v4(),
                title,
                isCompleted: false,
            },
            ...prev,
        ])
        setTitle('');
    }

    return (
        <div>
            <div className='flex items-center justify-between mb-10 rounded-2xl border-gray-800 border-2 px-5 py-2 w-full'>
                <input
                    type="text"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    onKeyPress={e => e.key === 'Enter' && addTodo(title)}
                    className='bg-transparent w-full border-none outline-none'
                    placeholder="Add a task"
                />
            </div>
        </div>
    )
}

export default CreateTodoField