import React, { useEffect, useRef, useState } from 'react';
import { RiTodoLine } from "react-icons/ri";
import TodoItems from './TodoItems';

const Todo = () => {
    const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")): []);
    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
        if (inputText === '') {
            return;
        }
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false, // Inicializa isComplete aquí
        };
        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = '';
    };

    const deleteTodo = (id) => {
        setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const toggle = (id) => {
        setTodoList((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
            )
        );
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList])

    return (
        <div className='bg-gray-800 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
            {/*-------Title----- */}
            <div className='flex items-center mt-7 gap-2'>
                <RiTodoLine className='w-6 h-6 text-cyan-400' />
                <h1 className='text-white font-bold text-2xl font-new'>To Do List</h1>
            </div>
            {/*-------input box---------*/}
            <div className='flex items-center mt-7 bg-gray-200 rounded-full'>
                <input
                    ref={inputRef}
                    className='bg-transparent text-black outline-none border-0 flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
                    type='text'
                    placeholder='Add a task'
                />
                <button
                    onClick={add}
                    className='border-none font-new  rounded-full bg-cyan-500 w-32 h-14 text-white text-3xl font-medium cursor-pointer'
                >
                    ADD +
                </button>
            </div>
            {/*-------Todo list----- */}
            <div>
                {todoList.map((item) => (
                    <TodoItems
                        className="text-white"
                        key={item.id} // Cambiado de index a item.id para evitar problemas con elementos reordenados
                        text={item.text}
                        id={item.id}
                        isComplete={item.isComplete} // Corregido el nombre de la propiedad
                        deleteTodo={deleteTodo}
                        toggle={toggle}
                    />
                ))}
            </div>
        </div>
    );
};

export default Todo;
