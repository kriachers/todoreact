
import React, { useEffect, useState } from "react";
import TodoItem from './item/TodoItem'
import CreateTodoField from './create-to-do-field/CreateTodoField'

const data = [
    {
        _id: 'edqw',
        title: 'Finish the essay collaboration',
        isCompleted: false,
    },
    {
        _id: 'dvwe',
        title: 'Wash the dish',
        isCompleted: false,
    },
    {
        _id: 'dfv',
        title: 'Write the essay',
        isCompleted: false,
    },

]

const Home = () => {

    const [todos, setTodos] = useState(data);

    const changeTodo = (id) => {
        const copy = [...todos];
        const current = copy.find(t => t._id === id);
        current.isCompleted = !current.isCompleted;
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(t => t._id !== id));
    }



    return (
        <div className="App  text-white w-4/5 mx-auto">
            <h1 className="font-bold text-2x1 text-center mb-8">Todo list app</h1>
            <CreateTodoField setTodos={setTodos} />
            {todos.map(todo => {
                return (

                    <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}></TodoItem>
                )
            })}


        </div>
    )
}
//каждый компонент - это обычная функция 

export default Home

//экспортируем функцию 

