import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";

export const Home = () => {
    const [todo, setTodo] = useState([
        
    ]);
    const inputRef = useRef(null);

    const addTodo = () => {
        todo.push({
            id: new Date().getTime().toString(),
            task: inputRef.current.value,
            completed: false
        });
        setTodo(todo);
        inputRef.current.value = "";
        localStorage.setItem("Todo-list", JSON.stringify(todo));
        setRender(!render);
    }
    const [render, setRender] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem("Todo-list");
        if(data === null) {
            localStorage.setItem("Todo-list", JSON.stringify(todo));
        }
    }, [todo]);

    const completeTask = (id) => {
        let answer = window.confirm("Are you really sure you have completed this task?");
        console.log(answer);
        if(answer) {
            let task = todo.find(d => d.id === id);
            task.completed = !task.completed;
            localStorage.setItem("Todo-list", JSON.stringify(todo));
            setRender(!render);
        }
    }

    return (
        <div> 
            <div className='flex'>
                <input type="text" placeholder='Add task here...' ref={inputRef} className="w-1/3 border border-brand-stroke p-3"></input>
                <button onClick={addTodo} className="bg-blue-400 text-white p-3 hover:text-black transition-all duration-500 hover:bg-white hover:border hover:border-blue-400">Add task</button>
            </div>

            <div className='flex justify-between w-full mt-20'>
                <div className='w-1/2 h-auto'>
                    <p className={`text-black text-sm text-center my-auto opacity-60 ${todo.length === 0 ? "block" : "hidden"}`}>No tasks added yet.</p>
                    {todo.map((item, index) => {
                        if(!item.completed) {
                            return (
                                <div key={item.id} className="flex w-auto mb-3">
                                    <p className='px-2 py-3 border border-gray-100'>{item.task}</p>
                                    <button onClick={() => completeTask(item.id)} className='bg-green-400 px-3 text-white hover:text-black transition-all duration-200 hover:bg-white hover:border hover:border-green-400'>Complete</button>
                                </div>
                            )
                        }
                    })}
                </div>

                <div className='w-1/2 h-auto'>
                    <p className={`text-black text-sm text-center my-auto opacity-60 ${todo.length === 0 ? "block" : "hidden"}`}>No tasks completed yet.</p>
                    {todo.map((item, index) => {
                        if(item.completed) {
                            return (
                                <div key={item.id} className="flex w-auto mb-3">
                                    <p className='px-2 py-3 border border-gray-100'>{item.task}</p>
                                    <button className='bg-red-400 px-3 text-white'>Completed</button>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
};