import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/IncidentHub-logo-white.png';
import Background from '../../../assets/login-bg.jpg';

export const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isBlurred, setIsBlurred] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsBlurred(isBlurred => !isBlurred);
        }, 2000);
        return () => clearTimeout(timer);;
    }, [isBlurred]);

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }
    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }
    
    return (
        <div className='w-full min-h-screen flex flex-col gap-4 justify-center items-center bg-[#090909] pt-20 pb-40'>
            <img src={Background} alt="Background" className={`fixed top-0 left-0 w-full h-full object-cover z-10 opacity-30 transition-all duration-3000 ${isBlurred ? 'blur-sm' : ''}`}/>
            <form action="submit" className='rounded-xl bg-neutral-900/30 px-8 py-5 flex justify-center items-center flex-col gap-4 shadow-lg shadow-black/30 backdrop-blur-[1px] border border-white/20 z-20'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <Link to="/"><img src={Logo} alt="IncidentHub Logo" className='w-8 h-8 hover:scale-105 transition-all'/></Link>
                    <h1 className='text-2xl font-bold text-neutral-500 mb-4 text-center'>Login to <br /><span className='text-white'>IncidentHub</span></h1>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='text-neutral-300 font-medium'>Email:</label>
                    <label htmlFor="email" className='text-xs text-neutral-500 font-light'>Provide your email address</label>
                    <input type="email" id="email" name="email" className='border border-neutral-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-neutral-300' onChange={handleEmailChange} />
                </div>
                <div className='flex flex-col gap-2 mt-4'>
                    <label htmlFor="password" className='text-neutral-300 font-medium'>Password:</label>
                    <label htmlFor="password" className='text-xs text-neutral-500 font-light'>Enter your password</label>
                    <input type="password" id="password" name="password" className='border border-neutral-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-neutral-300' onChange={handlePasswordChange} />
                </div>
                <div className='w-full flex flex-col items-start gap-1'>
                    <button type="submit" className='mt-6 bg-black text-white rounded-lg px-4 py-2 w-full hover:bg-neutral-800 transition cursor-pointer'>Login</button>
                    <button className='text-neutral-400 hover:underline text-sm'>Register...</button>
                </div>
                <button className='mt-2 text-sm text-neutral-500 hover:underline'>If you forgot password..</button>
            </form>
        </div>
    );
}