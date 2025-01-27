import React from 'react'

function About() {

    return (
        <section>
            <h1 id="about-me" className="mt-5 pt-5 mb-5"></h1>
            <h1 className="text-center m-5 aboutme-title" data-aos="fade-left">About Me</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="aboutme" data-aos="fade-right">
                            Hello! I'm Muhammed Nowfal, a passionate and dedicated Computer Science student currently pursuing my B.Sc. in Computer Science at Government Arts College, Coimbatore. I have a strong enthusiasm for technology, coding, and problem-solving, with a keen interest in exploring new technologies and building innovative solutions.
                            Over the past few years, I have honed my skills by working on various projects, including:
                            Developing basic apps like a calculator, Tic-Tac-Toe, and a ball game using Java.
                            Building a college-related website with HTML, CSS, and JavaScript.
                            Creating Python-based applications with functional designs and practical use cases.
                            Currently working on full-stack development with a focus on React, Express, MongoDB, and other modern tools.
                            Beyond coding, I'm passionate about solving moderately challenging coding problems, improving my knowledge in database management, and understanding the linguistic miracles of languages. I thrive on continuous learning and aspire to build impactful projects, such as a fully-functional e-commerce website.
                            When I'm not coding, I enjoy exploring the latest tech trends, collaborating with like-minded peers, and refining my skills to stay ahead in the tech world.
                        </p>
                        <div className="container justify-content-center" data-aos="fade-left">
                            <div className="row">
                                <table className="text-center my-5">
                                    <tbody>
                                        <tr>
                                            <td><pre className="text-white"><i className="fa-solid fa-location-dot contact-icon"></i>  Coimbatore</pre></td>
                                        </tr>
                                        <tr>
                                            <td><pre className="text-white"><i className="fa-solid fa-envelope contact-icon"></i>  nowfalmmuhammed@gmail.com</pre></td>
                                        </tr>
                                        <tr>
                                            <td><pre className="text-white"><i className="fa-solid fa-phone contact-icon"></i>  +91 8610297319</pre></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About