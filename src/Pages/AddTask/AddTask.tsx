import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
    task: String;
}

const AddTask = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    return (
        <section className='flex flex-col justify-center max-width h-screen'>
            <div className=" mx-3">
                <h3 className='text-2xl md:text-4xl font-serif font-semibold text-center mb-5'>Add Your Task Here</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col mx-auto p-5 border-2 border-cyan-400 rounded-sm'>
                        <label className='text-base md:text-lg font-serif'>Add your task </label>
                        <input className='text-sm  py-2 px-5 rounded-sm bg-gray-100 focus-within:outline-cyan-400' {...register("task", { required: true })} placeholder="Ex:Tomorrow I will go to my versity" />
                        {errors.task && <span className='text-red-500 font-serif'>You must have to add a Task</span>}
                        <input className='text-base md:text-lg text-white font-serif cursor-pointer bg-cyan-400 py-1 px-5 rounded-sm mt-3 self-start' type="submit" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddTask;