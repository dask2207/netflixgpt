import React, { useState } from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <>
        <div className=''>
            <Header />
            <div className='relative' >
                
                <img className=''  src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='body background' />
                <div className='absolute inset-0 bg-black opacity-50'></div>
            </div>

            

            <form className='bg-zinc-950 mt-16 px-20 w-[500px] opacity-85 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40'>
                <h2 className=' text-start text-white text-4xl py-4 font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
                {!isSignInForm && (
                    <input className='w-full text-white text-lg p-4 rounded-md border-slate-50 border mt-6 bg-gray-900' type='email' placeholder='Full Name' />
                )}
                <input className='w-full text-lg p-4 rounded-md border-slate-50 border my-6 bg-gray-900' type='email' placeholder='Email or Phone Number' />
                <input className='w-full text-lg rounded-md border-slate-50 border p-4 bg-gray-900' type='password' placeholder='Password' />
                <button className='w-full h-12  rounded-md text-white font-bold text-lg my-6 bg-red-600'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <h2 className=' text-center text-white text-xl '>OR</h2>
                <button className='w-full h-12  rounded-md text-white font-bold text-lg my-4 bg-stone-600'>Use a Sign-In Code</button>
                <p className=' text-center text-white text-xl '><Link>Forgot password?</Link></p>
               <div className='py-4 flex justify-start align-middle'>
               <input type="checkbox" className="h-[18px] w-[18px] cursor-pointer mt-1 text-white"  />
               <p className=' text-white align-super px-2'>Remember Me</p>
               </div>
               <p onClick={toggleSignInForm}  className='text-white cursor-pointer'>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
               <p className='text-white text-[12px] font-thin py-4'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link className="text-sky-500">Learn more.</Link></p>
            </form>

            {/* <Footer /> */}
        </div>    
        </>
    )
}

export default Login;
