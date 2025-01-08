import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import tommy from '../assets/tommy.png'

const Footer = () => {
    return (
        <div className=' max-w-[1200px] sm:h-[150px] p-12 flex items-center justify-between mx-auto'>
           
            <div>
                <img src={tommy} alt="" className='mb-2 h-[70px]' />
            </div>
            
            <div >
                <p className='text-gray-600 flex'>
                    <a href='https://web.facebook.com/tommygabrielo.razafisambatra'><AiFillFacebook size={30} /></a>
                    <a href='https://www.linkedin.com/in/tommy-gabrielo-razafisambatra-a58a66208/'>   <AiFillLinkedin size={30} /></a>
                    <a href='https://github.com/tommygabrielo'>   <AiFillGithub size={30} /></a>
                    <a href='https://mail.google.com/mail/?view=cm&fs=1&to=tommygabrielo43@gmail.com'>   <AiFillMail size={30} /></a>
                </p>
                <p className='font-poppins text-gray-600'>@Copyright2025</p>
            </div>
        </div>
    )
}

export default Footer