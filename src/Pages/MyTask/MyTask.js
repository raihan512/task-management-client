import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthProvider } from "../../Context/AuthContext/AuthContext";
import TaskItem from './TaskItem/TaskItem';
const MyTask = () => {
    const { user } = useContext(AuthProvider);
    const email = user.email;
    // Load current users tasks
    const { data: myTasks = [], refetch } = useQuery({
        queryKey: ['myTasks', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/alltask?email=${email}`)
            const data = await res.json();
            return data;
        }
    })
    // Mark Complete task
    const handleComplete = id => {
        fetch(`http://localhost:5000/alltask/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Task Completed')
                    refetch();
                }
            })
            .catch(error => console.error(error))
    }
    // Delete Current user task by id
    const handleDeleteTask = id => {
        fetch(`http://localhost:5000/alltask/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Task Deleted')
                    refetch();
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <section className='flex flex-col max-width h-screen'>
            <div className=" mx-3">
                <h3 className='text-2xl md:text-4xl font-serif font-semibold text-center my-5'>{user.displayName}, your task</h3>
                {/* Task Container */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        myTasks.map(task => !(task.isComplete) && <TaskItem
                            key={task._id}
                            task={task}
                            handleDeleteTask={handleDeleteTask}
                            handleComplete={handleComplete}
                        ></TaskItem>)
                    }
                </div>
            </div>

        </section>
    );
};

export default MyTask;