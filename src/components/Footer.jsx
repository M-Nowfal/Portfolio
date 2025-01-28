import React, { memo } from 'react'

const Footer = memo(() => {
    return (
        <div className="footer">
            <section className="m-3 p-3">
                <footer className="text-white py-6">
                    <div className="container mx-auto text-center">
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold">Connect with Me</h2>
                            <p className="text-sm text-gray-400">I'm open to freelance projects, collaborations, and tech discussions.</p>
                        </div>
                        <div className="flex justify-center space-x-6 mb-4">
                            <a href="https://github.com/" target="_blank" className="hover:text-gray-400">
                                <i className="fa-brands fa-github mx-2 fs-4 social-media-icon"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/muhammed-nowfal-m-452410344/" target="_blank" className="hover:text-gray-400">
                                <i className="fa-brands fa-linkedin mx-2 fs-4 social-media-icon"></i>
                            </a>
                            <a href="mailto:nowfalmmuhammed@gmail.com" className="hover:text-gray-400">
                                <i className="fa-solid fa-envelope mx-2 fs-4 social-media-icon"></i>
                            </a>
                        </div>
                        <p className="text-xs text-gray-500">
                            &copy; 2025 Muhammed Nowfal. All Rights Reserved.
                        </p>
                    </div>
                </footer>
            </section>
        </div>
    )
});

export default Footer