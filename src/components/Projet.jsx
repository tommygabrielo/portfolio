import React, { useState, useEffect } from "react";
import oke from "../assets/oke-prjet.png";
import evaluation from "../assets/evaluation-projet.png";
import cpe from "../assets/cpe-projet.png";
import ttm from "../assets/ttm-projet.png";
import gepovipe from "../assets/gepovipe-projet.png";
import portfolio from "../assets/portfolio.png"
import Aos from 'aos';

const Projet = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    const projects = [
        {
            img: oke,
            title: "OKE SOFTWARE",
            link: "https://oke.pro/login",
            techs: ["TYPESCRIPT", "NEXT", "NEST"],
        },
        {
            img: evaluation,
            title: "EVALUATION PEDAGOGIQUE",
            link: "https://github.com/tommygabrielo/Evaluation-p-dagogique",
            techs: ["REACT", "EXPRESS", "MongoDB"],
        },
        {
            img: cpe,
            title: "CPE - PAIEMENT VIA API Mvola",
            link: "https://github.com/tommygabrielo/Mvola_cpe",
            techs: ["REACT", "EXPRESS", "MySQL"],
        },
        {
            img: ttm,
            title: "GESTION DE STOCK ET DE VENTE",
            link: "https://github.com/tommygabrielo/ttm-front",
            techs: ["REACT", "EXPRESS", "MySQL"],
        },
        {
            img: gepovipe,
            title: "GESTION DE POINTAGE",
            link: "https://github.com/tommygabrielo/GEPOVIPE/tree/main/GEPOVIPE/gestion%20de%20pointage",
            techs: ["AJAX", "CODEIGNITER", "BOOTSTRAP"],
        },
        {
            img: portfolio,
            title: "MON PORTFOLIO",
            link: "",
            techs: ["REACT", "TAILWIND"],
        },
    ];

    return (
        <div className="mt-40 mx-10">
            <h2 data-aos="fade-down" className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-white tracking-[10px] uppercase m-10 text-center font-poppins">
                Mes Projets
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 justify-center max-w-[1200px] sm:mx-4 md:mx-auto">
                {projects.map((project, index) => (
                    <div data-aos="fade-down" key={index} className="relative group">
                        <div className="relative group">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="sm:w-[250px] md:w-[400px] lg:w-[550px] rounded-lg"
                            />
                            {/* Bouton central */}
                            <a
                                href={project.link}
                                className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                            >
                                <button className="text-white text-lg font-bold py-2 px-4 bg-gradient-to-r from-red-500 to-red-900 hover:from-orange-700 hover:to-red-900 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
                                    Voir le projet
                                </button>

                            </a>
                        </div>

                        <div className="mt-4">
                            <a
                                href={project.link}
                                className="text-gray-400 font-exo2 font-semibold sm:text-xl md:text-2xl lg:text-3xl -tracking-tighter"
                            >
                                {project.title}
                            </a>
                            <div className="flex gap-4 mt-3">
                                {project.techs.map((tech, idx) => (
                                    <p
                                        key={idx}
                                        className="font-poppins px-4 py-2 rounded-xl border text-white border-gray-400 text-sm"
                                    >
                                        {tech}
                                    </p>
                                ))}
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projet;
