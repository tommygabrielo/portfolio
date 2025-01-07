import React, { useEffect } from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import bootstrap from '../assets/bootstrap.svg'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import next from '../assets/next.svg'
import express from '../assets/express.png'
import mysql from '../assets/mysql.png'
import postgresql from '../assets/postgresql.png'
import git from '../assets/git.png'
import typescript from '../assets/typescript.png'
import Aos from 'aos'

const Skills = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='mt-20'>
            <h2 data-aos="fade-down" className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-white tracking-[10px] uppercase m-10 text-center font-poppins">
                MES COMPETENCES
            </h2>
            
            <div data-aos="fade-down" className='bg-black text-gray-400 max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 gap-y-12 place-items-center'>
                <div className='hover:scale-125  hover:border-gray-400 hover:backdrop-blur-md transition-all duration-200 flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[100px]'>
                    <img src={git} alt="" />
                    <p className='mt-2'>GIT</p>
                </div>
                <div className='hover:scale-125 hover:backdrop-blur-md transition-all duration-200 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={html} alt="" />
                    <p className='mt-2'>HTML</p>
                </div>
                <div className=' hover:scale-125 transition-transform duration-200 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={css} alt="" />
                    <p className='mt-2'>CSS</p>
                </div>
                <div className='hover:scale-125 transition-transform duration-200 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={bootstrap} alt="" />
                    <p className='mt-2'>BOOTSTRAP</p>
                </div>
                <div className=' hover:scale-125 transition-transform duration-200 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={tailwind} alt="" />
                    <p className='mt-2'>TAILWIND</p>
                </div>
                <div className=' hover:scale-125 transition-transform duration-200 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={javascript} alt="" />
                    <p className='mt-2'>JAVASCRIPT</p>
                </div>
                <div className=' hover:scale-125 transition-transform duration-200 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={react} alt="" />
                    <p className='mt-2'>REACT</p>
                </div>
                <div className=' hover:scale-125 transition-transform duration-200 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={typescript} alt="" />
                    <p className='mt-2'>TYPESCRIPT</p>
                </div>
                <div className='hover:scale-125 transition-transform duration-200 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img className='bg-white p-1' src={next} alt="" />
                    <p className='mt-2'>NEXT</p>
                </div>
                <div className='hover:scale-125 transition-transform duration-200 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={mysql} alt="" />
                    <p className='mt-2'>MYSQL</p>
                </div>
                <div className=' hover:scale-125 transition-transform duration-200 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={postgresql} alt="" />
                    <p className='mt-2'>POSTGRESQL</p>
                </div>
                <div className=' hover:scale-125 transition-transform duration-200 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={express} alt="" />
                    <p className='mt-2'>EXPRESS</p>
                </div>
            </div>
        </div>


    )
}

export default Skills