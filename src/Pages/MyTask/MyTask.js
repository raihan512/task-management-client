import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TaskItem from './TaskItem/TaskItem';
const MyTask = () => {
    const allTask = useLoaderData();

    return (
        <section className='flex flex-col max-width h-screen'>
            <div className=" mx-3">
                <h3 className='text-2xl md:text-4xl font-serif font-semibold text-center my-5'>My Tasks</h3>
                {/* Task Container */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        allTask.map(task => <TaskItem
                            key={task._id}
                            task={task}
                        ></TaskItem>)
                    }
                </div>
            </div>

        </section>
    );
};

export default MyTask;