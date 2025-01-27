import React from 'react';

function Hero() {

    function downloadResume(){
        window.location.href = "https://nowfal86.neocities.org/Nowfal-Portfolio/Nowfal.pdf";
    }

    return (
        <section className="hero-section pt-5">
            <div className="container">
                <div className="row align-items-center text-center">
                    <div className="col-12 col-md-6 mb-4 mt-3" data-aos="fade-right">
                        <img 
                            src="src\\assets\\Nowfal.png" 
                            alt="Muhammed Nowfal" 
                            className="img-fluid hero-image"
                        />
                    </div>
                    <div className="col-12 col-md-6 mt-1" data-aos="fade-left">
                        <h1 className="m-2 name"><span className="text-white">I'm </span>Muhammed Nowfal</h1>
                        <h3 className="m-2 roll"><span className="roll-in">I'm a </span>FULL STACK DEVELOPER</h3>
                        <button className="m-2 resume" onClick={downloadResume}>Download Resume</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
