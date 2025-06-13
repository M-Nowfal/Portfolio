import React, { memo } from "react";

const Projects = memo(() => {
    const projects = [
        {
            project_name: "Byte Cart E-Commerce platform",
            project_description1: "ByteCart is a full-stack e-commerce web application built with Next.js, offering a fast, responsive, and seamless shopping experience. The platform includes both user and seller functionalities such as authentication, product management, shopping cart, and order tracking. With server-side rendering for better performance and SEO, ByteCart is optimized for real-world usage and scalability.",
            allignment: "row justify-content-end",
            fade: "fade-left",
            link: "https://byte-cart.vercel.app/",
        },
        {
            project_name: "Water Bill Record Management",
            project_description1: "Housing Unit Bill Record is a web application designed to manage and track water bill payments for apartment units. It supports multiple buildings and houses, allowing users to record and view payments month-wise for the year 2025. This tool helps streamline bill management and ensures organized, date-wise tracking for each unit.",
            allignment: "row justify-content-start",
            fade: "fade-right",
            link: "https://housing-unit-bill-record.vercel.app/",
        },
        {
            project_name: "Pick & Go",
            project_description1: "Pick and Go is a mini e-commerce website that allows users to browse products, view product details, add items to their cart, and manage orders. It includes user authentication, a seller dashboard for product management, and seamless database connectivity using MongoDB. Built with the MERN stack, it provides a smooth and responsive shopping experience.",
            allignment: "row justify-content-end",
            fade: "fade-left",
            link: "https://pick-and-go-lovat.vercel.app/",
        },
        {
            project_name: "To-Do App",
            project_description1: "This project is a To-Do List application designed to help users manage their daily tasks efficiently. Built using React it allows users to add, edit, delete, and mark tasks as completed with ease. The application features a simple and intuitive user interface with a responsive design, ensuring a seamless experience across different devices. This To-Do List app is perfect for organizing tasks and boosting productivity.",
            allignment: "row justify-content-start",
            fade: "fade-right",
            link: "https://to-do-app-kappa-pearl.vercel.app/",
        },
        {
            project_name: "Calculator",
            project_description1: "This project is a basic calculator application designed to perform essential arithmetic operations such as addition, subtraction, multiplication, and division. Built using HTML, CSS, and JavaScript, it provides a user-friendly interface with fully functional buttons and responsive behavior, making it suitable for users to perform quick calculations efficiently.",
            allignment: "row justify-content-end",
            fade: "fade-left",
            link: "https://nowfal86.neocities.org/Nowfal/Calculator/",
        },
        {
            project_name: "Tic-Tac-Toe",
            project_description1: "This project is a fully functional Tic-Tac-Toe game that can be played in two modes: one-player mode (against the computer) and two-player mode (between two human players). The game allows players to place 'X' or 'O' markers on a 3x3 grid, aiming to line up three of their marks in a row, column, or diagonal. Additionally, the game includes a score counter to track the number of wins for each player. Built using HTML, CSS, and JavaScript, the game features an engaging and interactive design, making it both fun and easy to play.",
            allignment: "row justify-content-start",
            fade: "fade-right",
            link: "https://nowfal86.neocities.org/Nowfal/Tic-Tac-Toe/",
        },
        {
            project_name: "Banking App",
            project_description1: "This Simple Banking App is a basic web-based application that simulates essential banking operations. The app allows users to create an account, deposit money, withdraw money, check their balance, and even close their account. Built using HTML, CSS, and JavaScript, this app provides a user-friendly interface and handles transactions using client-side logic. The app mimics a real-world banking system's basic operations without integrating a back-end server or database. It stores account information temporarily in the browser (using JavaScript objects or local storage).",
            allignment: "row justify-content-end",
            fade: "fade-left",
            link: "https://nowfal86.neocities.org/Nowfal/Bank/",
        },
        {
            project_name: "College App",
            project_description1: "This Simple College Website is a web-based application developed to provide essential information about a college. Built using HTML, CSS, and JavaScript, this website offers various sections like semester details, course offerings, admissions, faculty details, and contact information. The website is designed with a clean and easy-to-navigate layout that helps users quickly find relevant information related to the college.",
            allignment: "row justify-content-start",
            fade: "fade-right",
            link: "https://nowfal86.neocities.org/Nowfal/",
        },
    ];

    return (
        <section>
            <h1 id="projects" className="mt-5 pt-5"></h1>
            <h1 className="text-center m-5 projects-title" data-aos="fade-right">My Projects</h1>
            <div className="container">
                {projects.map((project, index) => (
                    <div
                        className={`row ${project.allignment}`}
                        data-aos={project.fade}
                        key={index}
                    >
                        <div className="col-12 col-md-6">
                            <div className="card project-cards text-center my-4 mx-1">
                                <div className="card-body">
                                    <h4 className="card-title projects-title">{project.project_name}</h4>
                                    <p className="card-text text-secondary">
                                        {project.project_description1}
                                    </p>
                                    <a href={project.link} className="text-decoration-none view-projects" target="_blank">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
});

export default Projects;
