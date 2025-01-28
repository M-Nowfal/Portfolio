import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Navbar() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    const bars = "fa-solid fa-bars-staggered toggle-icon";
    const xmark = "fa-solid fa-xmark toggle-icon";
    const [toggler, setToggler] = useState(bars);

    return (
        <div>
            <nav className="navbar navbar-expand-md glass-navbar position-fixed w-100">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-1 title-name ps-2" href="#">Nowfal</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className={toggler} onClick={()=>setToggler((toggler===xmark)?bars:xmark)}></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto titles">
                            <a className="nav-link" href="#">Home</a>
                            <a className="nav-link" href="#about-me">About Me</a>
                            <a className="nav-link" href="#skills">Skills</a>
                            <a className="nav-link" href="#projects">Projects</a>
                            <a className="nav-link" href="#contact">Contact</a>
                        </div>
                        <div className="d-flex justify-content-center fs-4 icons">
                            <a href="https://github.com/" target="_blank" className="hover:text-gray-400">
                                <i className="fa-brands fa-github fs-4"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/muhammed-nowfal-m-452410344/" target="_blank">
                                <i className="fa-brands fa-linkedin mx-2"></i>
                            </a>
                            <a href="mailto:nowfalmmuhammed@gmail.com">
                                <i className="fa-solid fa-envelope mx-2"></i>
                            </a>
                            <a href="https://www.instagram.com/its_nowfal/" target="_blank">
                                <i className="fa-brands fa-instagram mx-2"></i>
                            </a>
                            <a href="https://wa.me/918610297319?text=Hi%20Muhammed,%20I%20want%20to%20connect%20with%20you!" target="_blank">
                                <i className="fa-brands fa-whatsapp mx-2 whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
