import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';

const Update = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthProvider);
    const taskDetails = useLoaderData();
    const task = taskDetails[0].task;
    const taskId = taskDetails[0]._id;

    const { register, handleSubmit } = useForm();

    const handleUpdate = data => {
        fetch(`http://localhost:5000/addtask/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Task Updated SuccessFully');
                    navigate('/my-task')
                }
            })
    };
    return (
        <section className='flex flex-col justify-center max-width h-screen'>
            <div className=" mx-3">
                <h3
                    className='text-2xl md:text-4xl font-serif font-semibold text-center mb-5'>
                    <span className='capitalize'>{user.displayName}</span>, update your task</h3>
                <form onSubmit={handleSubmit(handleUpdate)}>
                    <div className='flex flex-col mx-auto p-5 border-2 border-cyan-400 rounded-sm'>
                        <label className='text-base md:text-lg font-serif'>Update your task </label>
                        <input
                            className='text-sm  py-2 px-5 rounded-sm bg-gray-100 focus-within:outline-cyan-400 placeholder:text-black'
                            {...register("task")} placeholder={`${task}`} />
                        <input
                            className='text-base md:text-lg text-white font-serif cursor-pointer bg-cyan-400 py-1 px-5 rounded-sm mt-3 self-start'
                            type="submit" value='Update' />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Update;