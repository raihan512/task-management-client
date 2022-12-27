import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='left-0 top-0 sticky bg-green-200 z-40'>
            <nav className='max-width'>
                <div className='mx-3'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <h3 className='text-xl font-serif font-semibold my-3'><Link to='/'>Task Management</Link></h3>
                        <div className='flex flex-wrap'>
                            <p className='text-lg font-serif font-medium ml-2 my-3'><Link className='p-2  rounded-sm bg-green-100 hover:bg-green-300' to='/'>Home</Link></p>
                            <p className='text-lg font-serif font-medium ml-2 my-3'><Link className='p-2  rounded-sm bg-green-100 hover:bg-green-300' to='/add-task'>Add Task</Link></p>
                            <p className='text-lg font-serif font-medium ml-2 my-3'><Link className='p-2  rounded-sm bg-green-100 hover:bg-green-300' to='/my-task'>My Task</Link></p>
                            <p className='text-lg font-serif font-medium ml-2 my-3'><Link className='p-2  rounded-sm bg-green-100 hover:bg-green-300' to='/'>Completed Task</Link></p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;