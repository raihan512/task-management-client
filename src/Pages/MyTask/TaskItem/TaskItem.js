import React from 'react';
const TaskItem = ({ task }) => {
    return (
        <div className='border border-cyan-400 rounded-md p-5'>
            <h4 className='font-serif text-lg text-gray-800 font-semibold mb-5'>{task.task}</h4>
            <button className='py-1 px-3 mr-2 mb-2 bg-red-400 border border-red-400 rounded-md font-serif text-sm'>Delete</button>
            <button className='py-1 px-3 mr-2 mb-2 bg-lime-400 border border-lime-400 rounded-md font-serif text-sm'>Update</button>
            <button className='py-1 px-3 mr-2 mb-2 bg-green-400 border border-cyan-400 rounded-md font-serif text-sm'>Complete</button>
        </div>
    );
};

export default TaskItem;