import React, { memo, useState } from 'react'

const Contact = memo(() => {

    const [msg, setMsg] = useState("Send Message");
    const [filed, setFiled] = useState(false);

    return (
        <section>
            <h1 id="contact" className="mt-5 pt-5"></h1>
            <h1 className="text-center m-5 contact-title" data-aos="fade-down">Get in touch</h1>
            <div className="container justify-content-center">
                <div className="row">
                    <div className="col-12 col-md-6 text-center" data-aos="fade-right">
                        <p className="text-white"><i className="fa-solid fa-location-dot contact-icon"></i>  Coimbatore</p>
                        <p className="text-white"><i className="fa-solid fa-envelope contact-icon"></i>  nowfalmmuhammed@gmail.com</p>
                        <p className="text-white"><i className="fa-solid fa-phone contact-icon"></i>  +91 8610297319</p>
                    </div>
                    <div className="col-12 col-md-6 text-center" data-aos="fade-left">
                        <form action="">
                            <input type="text" name="name" className="inputs" placeholder="Your Name" required /><br />
                            <input type="email" name="email" className="inputs" placeholder="Your E-Mail" required /><br />
                            <input type="text" name="message" className="inputs" placeholder="Your Message" required /><br />
                            <button className="send-btn mt-3"
                                onClick={() => {
                                    setMsg("Sending...");
                                    setFiled(false);
                                    setTimeout(() => {
                                        setFiled(true);
                                        setMsg("Send Message")
                                    }, 2500);
                                }}>{msg}
                            </button>
                        </form>
                        <p className="text-danger mt-3 filed">{filed ? "Failed to Send" : ""}</p>
                    </div>
                </div>
            </div>
        </section>
    )
});

export default Contact