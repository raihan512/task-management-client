import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../Context/AuthContext/AuthContext';

const SignIn = () => {
    const { login } = useContext(AuthProvider);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleSignIn = data => {
        login(data.email, data.pass)
            .then((userCredential) => {
                navigate('/');
            })
            .catch((error) => {
                if (error.message.includes('wrong')) {
                    toast.failed('Email or Password Wrong')
                }
            });
    };
    return (
        <section className='max-width'>
            <div className=" mx-3">
                <h3 className='text-2xl md:text-4xl font-serif font-semibold text-center my-5'>SignIn</h3>
                {/* SignUp From */}
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <div className='flex flex-col w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto p-5 border-2 border-cyan-400 rounded-sm'>
                        {/* input field */}
                        <label className='text-base md:text-lg font-serif mt-2'>Add your email </label>
                        <input type="text" className='text-sm  py-2 px-5 rounded-sm bg-gray-100 focus-within:outline-cyan-400' {...register("email", { required: true })} placeholder="Ex:Tomorrow I will go to my versity" />
                        {errors.email && <span className='text-red-500 font-serif'>You must have to your email</span>}
                        {/* input field */}
                        <label className='text-base md:text-lg font-serif mt-2'>Add your password</label>
                        <input type="password" className='text-sm  py-2 px-5 rounded-sm bg-gray-100 focus-within:outline-cyan-400' {...register("pass", { required: true })} placeholder="Ex:Tomorrow I will go to my versity" />
                        {errors.pass && <span className='text-red-500 font-serif'>You must have to add your password</span>}
                        <input className='text-base md:text-lg text-white font-serif cursor-pointer bg-cyan-400 py-1 px-5 rounded-sm mt-3 self-start' type="submit" value="Signin" />
                        <p className='text-base font-serif mt-2'>Don't have an account? <Link className='text-cyan-500' to='/signup'>Create Account</Link> here</p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SignIn;