import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';
import TaskItem from '../MyTask/TaskItem/TaskItem';

const CompletedTask = () => {
    const { user } = useContext(AuthProvider);
    const email = user.email;
    // Load current users tasks
    const { data: myTasks = [] } = useQuery({
        queryKey: ['myTasks', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/alltask?email=${email}`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className='max-width'>
            <div className=" mx-3">
                <h3 className='text-2xl md:text-4xl font-serif font-semibold text-center my-5'>{user.displayName} your Completed Task</h3>
                {/* Task Container */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        myTasks.map(task => task.isComplete && <TaskItem
                            key={task._id}
                            task={task}
                        ></TaskItem>)
                    }
                </div>
            </div>
        </section>
    );
};

export default CompletedTask;