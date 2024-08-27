import React from 'react'
import { FaCircleCheck, FaRegCircle } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
    return(
        <div className='flex items-center my-3 gap-2'>
            <div onClick={() => toggle(id)} className='flex flex-1 items-center cursor-pointer'>
                {/* Icono que cambia dependiendo de si la tarea está completada o no */}
                {isComplete ? (
                    <FaCircleCheck className="text-green-500 w-7 h-7" />
                ) : (
                    <FaRegCircle className="text-gray-500 w-7 h-7" />
                )}
                <p className={`ml-4 text-[17px] text-white ${isComplete ? 'line-through' : ''}`}>
                    {text}
                </p>
            </div>  
            <RiDeleteBinLine onClick={() => deleteTodo(id)} className='w-6 h-6 cursor-pointer text-red-500 font-semibold'/>
                      
        </div>
    )
    
}

export default TodoItems