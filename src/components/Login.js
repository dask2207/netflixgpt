import React from 'react'
import Header from './Header';

const Login = () => {
    return (
        <>
            <Header />
            <div className=''>
                
                <img   src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='body background' />
            </div>

            <div className='w-full h-[125%] bg-gradient-to-t from-black absolute top-0'>

            </div>

            <form className='bg-zinc-950 py-10 px-20 w-[500px] opacity-85 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40'>
                <h2 className=' text-start text-white text-4xl py-4 font-bold'>Sign In</h2>
                <input className='w-full text-lg p-4 rounded-md border-slate-50 border my-6 bg-gray-900' type='email' placeholder='Email or Phone Number' />
                <input className='w-full text-lg rounded-md border-slate-50 border p-4 bg-gray-900' type='password' placeholder='Password' />
                <button className='w-full h-12  rounded-md text-white font-bold text-lg my-6 bg-red-600'>Sign In</button>
                <h2 className=' text-center text-white text-xl '>OR</h2>
                <button className='w-full h-12  rounded-md text-white font-bold text-lg my-4 bg-stone-600'>Use a Sign-In Code</button>
            </form>
        </>
    )
}

export default Login;
