import React from 'react';

const Home = () => {
    return (
        <section className='h-screen max-width flex justify-center items-center'>
            <div className='mx-3'>
                <h1 className='text-2xl md:text-4xl lg:text-6xl font-serif font-semibold text-center -leading-10'><span className='text-cyan-600'>Welcome</span> <br /> To My Task Management Web App</h1>
            </div>
        </section>
    );
};

export default Home;