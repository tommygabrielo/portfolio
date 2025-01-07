import React, { useEffect } from 'react'
import profilepic from '../assets/sary.png'
import { AiFillFacebook, AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
import Aos from 'aos'
import 'aos/dist/aos.css'
import CV from '../assets/CV-Tommy.pdf'

const Hero = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="pt-10 sm:pt-28 md:pt-28 lg:pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black">
            <div className='col-span-1 my-auto mx-auto w-[320px] h-auto lg:w-[400px]'>
                <img src={profilepic} alt='sary' data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="1500" />
            </div>
            <div className='col-span-2 px-5 my-auto'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold text-center lg:text-start'>
                    <span className='bg-primary text-transparent bg-clip-text'>
                        Je suis
                    </span> <br />
                    <TypeAnimation
                        sequence={[
                            "Dev FullStack",
                            1000,
                            "Dev JavaScript",
                            1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-white sm:text-lg my-6 lg:text-xl font-poppins font-thin' data-aos="fade-up" data-aos-duration="3000">
                    Je m'appelle Tommy Gabrielo et je possède une expertise avérée dans le développement d'applications web, en maîtrisant JavaScript ainsi que ses principaux frameworks.
                </p>

                <div className='my-8 flex gap-5 items-center' data-aos="fade-up" data-aos-duration="3000">
                    <a href={CV} className="text-white text-lg font-bold py-2 px-4 bg-gradient-to-r from-red-500 to-red-900 hover:from-orange-700 hover:to-red-900 rounded-full shadow-lg transform hover:scale-105 transition duration-300" download>
                        Télécharger mon CV
                    </a>

                    <p className='text-gray-600 flex'>
                        <a href='https://web.facebook.com/tommygabrielo.razafisambatra' ><AiFillFacebook size={30} className="text-gray-500 hover:text-red-900 transform hover:scale-105 transition duration-300" /></a>
                        <a href='https://www.linkedin.com/in/tommy-gabrielo-razafisambatra-a58a66208/'>   <AiFillLinkedin size={30} className="text-gray-500 hover:text-red-900 transform hover:scale-105 transition duration-300" /></a>
                        <a href='https://github.com/tommygabrielo'>   <AiFillGithub size={30} className="text-gray-500 hover:text-red-900 transform hover:scale-105 transition duration-300" /></a>
                        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=tommygabrielo43@gmail.com'>   <AiFillMail size={30} className="text-gray-500 hover:text-red-900 transform hover:scale-105 transition duration-300" /></a>
                    </p>


                </div>
            </div>
        </div>
    )
}

export default Hero