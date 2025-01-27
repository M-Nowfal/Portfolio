import React, { useState } from 'react'

function Contact() {

    const [msg, setMsg] = useState("Send Message");
    const [filed, setFiled] = useState(false);

    return (
        <section>
            <h1 id="contact" className="mt-5 pt-5"></h1>
            <h1 className="text-center m-5 contact-title" data-aos="fade-down">Get in touch</h1>
            <div className="container justify-content-center">
                <div className="row">
                    <table className="text-center mb-5">
                        <tbody>
                            <tr  data-aos="fade-right">
                                <td><pre className="text-white"><i className="fa-solid fa-location-dot contact-icon"></i>  Coimbatore</pre></td>
                                <td><input type="text" name="name" className="inputs" placeholder="Your Name"/></td>
                            </tr>
                            <tr  data-aos="fade-left">
                                <td><pre className="text-white"><i className="fa-solid fa-envelope contact-icon"></i>  nowfalmmuhammed@gmail.com</pre></td>
                                <td><input type="email" name="email" className="inputs" placeholder="Your E-Mail" /></td>
                            </tr>
                            <tr  data-aos="fade-right">
                                <td><pre className="text-white"><i className="fa-solid fa-phone contact-icon"></i>  +91 8610297319</pre></td>
                                <td><input type="text" name="message" className="inputs" placeholder="Your Message" /></td>
                            </tr>
                            <tr  data-aos="fade-up">
                                <td></td>
                                <td><button className="send-btn mt-3" 
                                    onClick={()=>{
                                        setMsg("Sending...");
                                        setFiled(false);
                                        setTimeout(()=>{
                                            setFiled(true);
                                            setMsg("Send Message")
                                        },2500);
                                    }}>{msg}</button>
                                </td>
                            </tr>
                            <tr data-aos="fade-left">
                                <td></td>
                                <td><pre className="text-danger mt-3 filed">{filed ? "Failed to Send" : ""}</pre></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Contact