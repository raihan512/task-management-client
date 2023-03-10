import React from 'react';
import { Link } from 'react-router-dom';
const TaskItem = ({ task, handleDeleteTask, handleComplete }) => {
    return (
        <div className='border border-cyan-400 rounded-md p-5'>
            <h4 className='font-serif text-lg text-gray-800 font-semibold mb-5'>{task.task}</h4>
            <button
                className={`py-1 px-3 mr-2 mb-2 bg-red-400 border border-red-400 rounded-md font-serif text-sm ${task.isComplete ? 'pointer-events-none' : 'cursor-pointer'}`}
                onClick={() => handleDeleteTask(task._id)}>Delete
            </button>
            <button
                className={`py-1 px-3 mr-2 mb-2 bg-lime-400 border border-lime-400 rounded-md font-serif text-sm ${task.isComplete ? 'pointer-events-none' : 'cursor-pointer'}`}>
                <Link to={`/update/${task._id}`}>Update</Link>
            </button>
            <button
                className={`py-1 px-3 mr-2 mb-2 bg-green-400 border border-green-400 rounded-md font-serif text-sm ${task.isComplete ? 'pointer-events-none' : 'cursor-pointer'}`}
                onClick={() => handleComplete(task._id)}>
                {task.isComplete ? 'Completed' : 'Complete'}
            </button>
        </div>
    );
};

export default TaskItem;