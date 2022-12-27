import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../Context/AuthContext/AuthContext';

const Navbar = () => {
    const { user, SignOut } = useContext(AuthProvider);
    const navigate = useNavigate();

    const handleSignOut = () => {
        SignOut()
            .then(res => {
                navigate('/signin')

            })
            .catch(error => console.error(error))
    }
    return (
        <header className='left-0 top-0 sticky bg-green-200 z-40'>
            <nav className='max-width'>
                <div className='mx-3'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <h3 className='text-xl font-serif font-semibold my-3'><Link to='/'>TM APP</Link></h3>
                        <div className='flex flex-wrap'>
                            <p className='text-lg font-serif font-medium ml-2 my-3'><Link className='p-2  rounded-sm bg-green-100 hover:bg-green-300' to='/'>Home</Link></p>
                            <p className='text-lg font-serif font-medium ml-2 my-3'><Link className='p-2  rounded-sm bg-green-100 hover:bg-green-300' to='/add-task'>Add Task</Link></p>
                            <p className='text-lg font-serif font-medium ml-2 my-3'><Link className='p-2  rounded-sm bg-green-100 hover:bg-green-300' to='/my-task'>My Task</Link></p>
                            <p className='text-lg font-serif font-medium ml-2 my-3'><Link className='p-2  rounded-sm bg-green-100 hover:bg-green-300' to='/'>Completed Task</Link></p>
                        </div>
                        {/* Logout Button */}
                        {
                            user?.uid ?
                                <button className='text-lg font-serif font-medium ml-2 my-3 p-1  rounded-sm bg-green-100 hover:bg-green-300' onClick={handleSignOut}>Logout</button>
                                :
                                <p className='text-lg font-serif font-medium ml-2 my-3'><Link className='p-2  rounded-sm bg-green-100 hover:bg-green-300' to='/signin'>Sign In</Link></p>
                        }

                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;