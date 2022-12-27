import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { AuthProvider } from '../../../Context/AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const { signUpUser, updateUser } = useContext(AuthProvider);
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleSignUp = data => {
        signUpUser(data.email, data.pass)
            .then(res => {
                const userInfo = { displayName: data.name }
                // Update UserInfo 
                updateUser(userInfo).then(() => { }).catch(err => console.log(err));
                // Create user to database if all is okay
                addUser(data.name, data.email);
            })
            .catch((error) => console.log(error));
    };

    const addUser = (name, email) => {
        const user = { name, email }
        fetch('http://localhost:5000/adduser', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('User Added SuccessFully');
                    navigate('/add-task')
                }
            })
    }
    return (
        <section className='max-width'>
            <div className=" mx-3">
                <h3 className='text-2xl md:text-4xl font-serif font-semibold text-center my-5'>SignUp</h3>
                {/* SignUp From */}
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className='flex flex-col w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto p-5 border-2 border-cyan-400 rounded-sm'>
                        {/* input field */}
                        <label className='text-base md:text-lg font-serif mt-2'>Add your name </label>
                        <input type="text" className='text-sm  py-2 px-5 rounded-sm bg-gray-100 focus-within:outline-cyan-400' {...register("name", { required: true })} placeholder="Ex:Tomorrow I will go to my versity" />
                        {errors.name && <span className='text-red-500 font-serif'>You must have to your name</span>}
                        {/* input field */}
                        <label className='text-base md:text-lg font-serif mt-2'>Add your email </label>
                        <input type="text" className='text-sm  py-2 px-5 rounded-sm bg-gray-100 focus-within:outline-cyan-400' {...register("email", { required: true })} placeholder="Ex:Tomorrow I will go to my versity" />
                        {errors.email && <span className='text-red-500 font-serif'>You must have to your email</span>}
                        {/* input field */}
                        <label className='text-base md:text-lg font-serif mt-2'>Add a passeord</label>
                        <input type="password" className='text-sm  py-2 px-5 rounded-sm bg-gray-100 focus-within:outline-cyan-400' {...register("pass", { required: true })} placeholder="Ex:Tomorrow I will go to my versity" />
                        {errors.pass && <span className='text-red-500 font-serif'>You must have to add a password</span>}
                        <input className='text-base md:text-lg text-white font-serif cursor-pointer bg-cyan-400 py-1 px-5 rounded-sm mt-3 self-start' type="submit" value="Signup" />
                        <p className='text-base font-serif mt-2'>Already have an account? <Link className='text-cyan-500' to='/signin'>Signin</Link> here</p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SignUp;