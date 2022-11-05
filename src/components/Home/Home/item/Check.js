import React from 'react'
import { BsCheck } from 'react-icons/bs'
const Check = ({ isCompleted }) => {
    return (
        <div className={`border-2 rounded-lg border-pink-400 
        ${isCompleted ? "bg-pink-400" : ''} w-7 h-7 mr-2 flex items-center justify-center`}>
            {/* Если статус isCompleted, то будет показываться галочка - а если нет, то ничего не будет показываться   */}
            {isCompleted &&
                <BsCheck size={24} className='text-pink-900' />
            }
        </div>
    )
}

export default Check