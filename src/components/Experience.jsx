import React, { useState } from 'react';
import bpo from '../assets/bpo.png'
import eni from '../assets/logoENI.png'
import ttm from '../assets/TTM2.png'
import cpe from '../assets/logo.png'
import fid from '../assets/logoH.png'

const Experience = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <div className="mt-40 mx-10">
            <h2 data-aos="fade-down" className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold  text-white tracking-[10px] mb-10 text-center font-poppins">
                EXPERIENCES PROFESSIONNELS
            </h2>
            <div className="flex flex-col items-start bg-black text-gray-400 max-w-[1200px] sm:mx-4 md:mx-auto">
                {/* Étape 1 */}
                <div data-aos="zoom-in-down" className="flex gap-4" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <div className="relative flex flex-col items-center">
                        <div className="bg-white rounded-full w-12 h-12 flex justify-center items-center">
                            <img src={bpo} alt='bpo' />
                        </div>
                        {/* Ligne verticale */}
                        <div className="w-px h-full bg-gray-400 absolute top-12"></div>
                    </div>
                    <div className='gap-y:10'>
                        <p className="text-gray-400 font-exo2 font-semibold sm:text-lg md:text-xl lg:text-2xl">
                            FEVRIER 2024 - PRESENT
                        </p>
                        <a
                            href="https://bpo-businessperformance.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${hovered ? 'bg-primary text-transparent bg-clip-text transition-all duration-500' : 'text-white'
                                } font-poppins font-semibold sm:text-xl md:text-2xl lg:text-3xl -tracking-tighter`}
                        >
                            BUSINESS PERFORMANCE OFFICE
                        </a>
                        <p className="text-white font-poppins text-sm lg:text-base mt-2">Développeur Front-end (next Js)</p>
                        <ul className='text-xs text-gray-300 list-disc font-poppins pl-5 mt-2 lg:text-base md:text-sm sm:text-xs space-y-2 text-justify'>
                            <li>Concevoir des interfaces responsives basées sur les maquettes Figma</li>
                            <li>Intégrer des composants graphiques avec Chart.js et les API backend.</li>
                            <li>Assurer une expérience fluide sur tous les appareils.</li>
                            <li>Documenter le travail pour une maintenance efficace.</li>
                        </ul>
                        <div className="flex flex-wrap gap-4 mt-4 sm:gap-2 sm:mt-2">
                            <p className={`font-poppins px-4 py-2 rounded-xl border text-white ${hovered ? 'px-2 py-2 border border-red-700 duration-500' : 'px-4 py-2 rounded-xl border border-gray-400 text-sm'}  `}>
                                REACT
                            </p>
                            <p className={`font-poppins px-4 py-2 rounded-xl border text-white ${hovered ? 'px-2 py-2 border border-red-700 duration-500' : 'px-4 py-2 rounded-xl border border-gray-400 text-sm'}  `}>
                                NEXT
                            </p>
                            <p className={`font-poppins px-4 py-2 rounded-xl border text-white ${hovered ? 'px-2 py-2 border border-red-700 duration-500' : 'px-4 py-2 rounded-xl border border-gray-400 text-sm'}  `}>
                                TAILWIND
                            </p>
                        </div>


                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>

                {/* Étape 2 */}
                <div data-aos="zoom-in-down" className="flex gap-4" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <div className="relative flex flex-col items-center">
                        <div className="bg-white rounded-full w-12 h-12 flex justify-center items-center">
                            <img src={eni} alt='bpo' />
                        </div>
                        {/* Ligne verticale */}
                        <div className="w-px h-full bg-gray-400 absolute top-12"></div>
                    </div>
                    <div className='gap-y:10'>
                        <p className="text-gray-400 font-exo2 font-semibold sm:text-lg md:text-xl lg:text-2xl">
                            DECEMBRE 2023
                        </p>

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://eni.mg/"
                            className={`${hovered ? 'bg-primary text-transparent bg-clip-text transition-all duration-500' : 'text-white'
                                } font-poppins font-semibold sm:text-xl md:text-2xl lg:text-3xl -tracking-tighter`}
                        >
                            ECOLE NATIONAL D'INFORMATIQUE
                        </a>
                        <p className="text-white font-poppins text-sm lg:text-base mt-2">Développeur FullStack (Stage)</p>
                        <ul className='text-xs text-gray-300 list-disc font-poppins pl-5 mt-2 lg:text-base md:text-sm sm:text-xs space-y-2 text-justify'>
                            <li>Concevoir et développer une application web basée sur la pile MERN pour l’évaluation pédagogique.</li>
                            <li>Créer des fonctionnalités telles que la gestion des utilisateurs, des unités d’enseignement, et des professeurs, ainsi que des outils statistiques et de suivi des cours.</li>
                            <li>Mettre en place une architecture client/serveur sécurisée et une base de données flexible avec MongoDB.</li>
                            <li>Optimiser l’ergonomie et assurer la compatibilité multiplateforme pour une utilisation fluide.</li>
                        </ul>
                        <div className="flex flex-wrap gap-4 mt-4 sm:gap-2 sm:mt-2">
                            <p className={`font-poppins px-4 py-2 rounded-xl border text-white ${hovered ? 'px-2 py-2 border border-red-700 duration-500' : 'px-4 py-2 rounded-xl border border-gray-400 text-sm'}  `}>REACT</p>
                            <p className={`font-poppins px-4 py-2 rounded-xl border text-white ${hovered ? 'px-2 py-2 border border-red-700 duration-500' : 'px-4 py-2 rounded-xl border border-gray-400 text-sm'}  `}>EXPRESS</p>
                            <p className={`font-poppins px-4 py-2 rounded-xl border text-white ${hovered ? 'px-2 py-2 border border-red-700 duration-500' : 'px-4 py-2 rounded-xl border border-gray-400 text-sm'}  `}>MongoDB</p>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                {/* Étape 3 */}
                <div data-aos="zoom-in-down" className="flex gap-4" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <div className="relative flex flex-col items-center">
                        <div className="bg-white rounded-full w-12 h-12 flex justify-center items-center">
                            <img src={cpe} alt='bpo' className='h-[35px] w-[33px]' />
                        </div>
                        {/* Ligne verticale */}
                        <div className="w-px h-full bg-gray-400 absolute top-12"></div>
                    </div>
                    <div className='gap-y:10'>
                        <p className="text-gray-400 font-exo2 font-semibold sm:text-lg md:text-xl lg:text-2xl">
                            Juillet - NOVEMBRE 2023
                        </p>

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://web.facebook.com/courscpefianar"
                            className={`${hovered ? 'bg-primary text-transparent bg-clip-text transition-all duration-500' : 'text-white'
                                } font-poppins font-semibold sm:text-xl md:text-2xl lg:text-3xl -tracking-tighter`}
                        >
                            CLUB DES PROFESSEURS EXPERIMENTE
                        </a>
                        <p className="text-white font-poppins text-sm lg:text-base mt-2">Développeur FullStack (Stage)</p>
                        <ul className='text-xs text-gray-300 list-disc font-poppins pl-5 mt-2 lg:text-base md:text-sm sm:text-xs space-y-2 text-justify'>
                            <li>Développer une plateforme de paiement en ligne.</li>
                            <li>Intégrer l'API Mvola pour gérer les transactions.</li>
                            <li>Concevoir une interface de suivi des paiements dédiée à l'administrateur.</li>
                        </ul>
                        <div className="flex flex-wrap gap-4 mt-4 sm:gap-2 sm:mt-2">
                            <p className={`font-poppins px-4 py-2 rounded-xl border text-white ${hovered ? 'px-2 py-2 border border-red-700 duration-500' : 'px-4 py-2 rounded-xl border border-gray-400 text-sm'}  `}>REACT</p>
                            <p className={`font-poppins px-4 py-2 rounded-xl border text-white ${hovered ? 'px-2 py-2 border border-red-700 duration-500' : 'px-4 py-2 rounded-xl border border-gray-400 text-sm'}  `}>EXPRESS</p>
                            <p className={`font-poppins px-4 py-2 rounded-xl border text-white ${hovered ? 'px-2 py-2 border border-red-700 duration-500' : 'px-4 py-2 rounded-xl border border-gray-400 text-sm'}  `}>MySQL</p>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>

                {/* Étape 4 */}
                <div data-aos="zoom-in-down" className="flex gap-4" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <div className="relative flex flex-col items-center">
                        <div className="bg-white rounded-full w-12 h-12 flex justify-center items-center">
                            <img src={ttm} alt='bpo' className='h-[35px] w-[33px]' />
                        </div>
                        {/* Ligne verticale */}
                        <div className="w-px h-full bg-gray-400 absolute top-12"></div>
                    </div>
                    <div className='gap-y:10'>
                        <p className="text-gray-400 font-exo2 font-semibold sm:text-lg md:text-xl lg:text-2xl">
                            SEPTEMBRE - NOVEMBRE 2022
                        </p>

                        <a
                            href="/"
                            className={`${hovered ? 'bg-primary text-transparent bg-clip-text transition-all duration-500' : 'text-white'
                                } font-poppins font-semibold sm:text-xl md:text-2xl lg:text-3xl -tracking-tighter`}
                        >
                            TRANOMBAROTRA TANTSAHA MAMOKATRA
                        </a>
                        <p className="text-white font-poppins text-sm lg:text-base mt-2">Développeur FullStack (Stage)</p>
                        <ul className='text-xs text-gray-300 list-disc font-poppins pl-5 mt-2 lg:text-base md:text-sm sm:text-xs space-y-2 text-justify'>
                            <li>Concevoir et développer une application de gestion intégrée pour le suivi des flux de stock, des ventes, et de la facturation.</li>
                            <li>Intégrer des fonctionnalités supplémentaires, notamment : la gestion des fournisseurs, la création de devis, le suivi des paiements, la génération de rapports statistiques, et la gestion des utilisateurs avec des droits d'accès personnalisés.</li>
                        </ul>
                        <div className="flex flex-wrap gap-4 mt-4 sm:gap-2 sm:mt-2">
                            <p className={`font-poppins px-4 py-2 rounded-xl border text-white ${hovered ? 'px-2 py-2 border border-red-700 duration-500' : 'px-4 py-2 rounded-xl border border-gray-400 text-sm'}  `}>REACT</p>
                            <p className={`font-poppins px-4 py-2 rounded-xl border text-white ${hovered ? 'px-2 py-2 border border-red-700 duration-500' : 'px-4 py-2 rounded-xl border border-gray-400 text-sm'}  `}>EXPRESS</p>
                            <p className={`font-poppins px-4 py-2 rounded-xl border text-white ${hovered ? 'px-2 py-2 border border-red-700 duration-500' : 'px-4 py-2 rounded-xl border border-gray-400 text-sm'}  `}>MySQL</p>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>

                {/* Étape 5 */}
                <div data-aos="zoom-in-down" className="flex gap-4" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <div className="relative flex flex-col items-center">
                        <div className="bg-white rounded-full w-12 h-12 flex justify-center items-center">
                            <img src={fid} alt='bpo' />
                        </div>
                        {/* Ligne verticale */}
                        <div className="w-px h-full bg-gray-400 absolute top-12"></div>
                    </div>
                    <div className='gap-y:10'>
                        <p className="text-gray-400 font-exo2 font-semibold sm:text-lg md:text-xl lg:text-2xl">
                            OCTOBRE - DECEMBRE 2021
                        </p>

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.fid.mg/"
                            className={`${hovered ? 'bg-primary text-transparent bg-clip-text transition-all duration-500' : 'text-white'
                                } font-poppins font-semibold sm:text-xl md:text-2xl lg:text-3xl -tracking-tighter`}
                        >
                            FOND D'INTERVENTION POUR LE DEVELOPPEMENT
                        </a>
                        <p className="text-white font-poppins text-sm lg:text-base mt-2">Développeur FullStack (Stage)</p>
                        <ul className='text-xs text-gray-300 list-disc font-poppins pl-5 mt-2 lg:text-base md:text-sm sm:text-xs space-y-2 text-justify'>
                            <li>Concevoir et développer une application pour la gestion des pointages des visiteurs et du personnel.</li>
                            <li>Développer des fonctionnalités de suivi en temps réel des entrées et sorties, avec des statistiques consolidées pour l'administration.</li>
                        </ul>
                        <div className="flex flex-wrap gap-4 mt-4 sm:gap-2 sm:mt-2">
                            <p className={`font-poppins px-4 py-2 rounded-xl border text-white ${hovered ? 'px-2 py-2 border border-red-700 duration-500' : 'px-4 py-2 rounded-xl border border-gray-400 text-sm'}  `}>AJAX</p>
                            <p className={`font-poppins px-4 py-2 rounded-xl border text-white ${hovered ? 'px-2 py-2 border border-red-700 duration-500' : 'px-4 py-2 rounded-xl border border-gray-400 text-sm'}  `}>CODEIGNITER</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
