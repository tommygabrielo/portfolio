import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import tommy from '../assets/tommy.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
            <h1 className="text-3xl font-bold bg-primary text-transparent bg-clip-text ml-4">
                <img src={tommy} alt="" className='h-[70px]' />
            </h1>
            <ul className='hidden md:flex'>
                <li className='p-5'> <a href='#acceuil'>Accueil</a></li>
                <li className='p-5'> <a href='#formation'>Formations</a></li>
                <li className='p-5'> <a href='#expériences'>Expériences</a></li>
                <li className='p-5'> <a href='#contact'>Contact</a></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden mr-6'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed h-full left-0 top-0 w-[50%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className="text-3xl bg-primary text-transparent bg-clip-text m-4">
                    <img src={tommy} alt="" className='h-[70px]' />
                </h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2'> <a href='#acceuil'>Accueil</a></li>
                    <li className='p-2'> <a href='#formation'>Formations</a></li>
                    <li className='p-2'> <a href='#expériences'>Expériences</a></li>
                    <li className='p-2'> <a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar