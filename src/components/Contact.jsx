import React, { useState } from 'react';
import './Contact.css'
import emailjs from 'emailjs-com'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        email: "",
        mobile: "",
        subject: "",
        msg: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    };

    // const formSubmit = (e) => {
    //     e.preventDefault();
    //     alert(`My Name is ${data.fullname}. My Mobile Number is ${data.phone} and Email is ${data.email}, Here is What i Want to Say ${data.msg}`);
    // };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_9wyulyi",
            "template_yjpux9g",
            e.target,
            "user_nKvqAAwgq1iFzyKqJSoJR"
        ).then(res => {
            console.log(res);
        }).catch(err => toast.error(err.message));
        toast.success("Message Send Sucessfully")
    }

    return (
        <>
            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact Us</h2>
                        <p>Contact us the get started</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="fas fa-map-marked-alt"></i>
                                    <h4>Location:</h4>
                                    <p>AA-4 Nalanda Bunglowz, India, Gj 393001</p>
                                </div>

                                <div className="email">
                                    <i className="fas fa-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>dhyanpatel110@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i className="fas fa-phone-alt"></i>
                                    <h4>Call:</h4>
                                    <p>+91 7984622002</p>
                                </div>

                                {/* <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                    frameborder="0"
                                    style={{ border: "0", width: "100%", height: "290px" }}
                                    allowfullscreen>
                                </iframe> */}

                                <iframe src="https://www.google.com/maps?q=Nalanda%20Bunglows%2C%20Gadkhol%20Part%2C%20Ramnagar%2C%20Ankleshwar%2C%20Gujarat%20393001%2C%20India&z=14&t=&ie=UTF8&output=embed"
                                    style={{ border: "0", width: "100%", height: "300px" }} >
                                </iframe>
                                <noscript> Full functionality of this site requires JavaScript to be enabled. Learn how to
                                    <a href="https://browseradvice.com/how-to-enable-javascript/">Enable JavaScript</a> in your browser.
                                </noscript>

                            </div>

                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form onSubmit={sendEmail} className="php-email-form">

                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        name="fullname"
                                        className="form-control"
                                        id="name"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars"
                                        value={data.fullname}
                                        onChange={InputEvent}
                                    />
                                    <div className="validate"></div>
                                </div>

                                <div className="form-group">
                                    <label for="name">Your Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        data-rule="email"
                                        data-msg="Please enter a valid email"
                                        value={data.email}
                                        onChange={InputEvent}
                                    />
                                    <div className="validate"></div>
                                </div>

                                <div className="form-group">
                                    <label for="name">Your Mobile</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="mobile"
                                        id="mobile"
                                        data-rule="email"
                                        data-msg="Please enter a valid email"
                                        value={data.mobile}
                                        onChange={InputEvent}
                                    />
                                    <div className="validate"></div>
                                </div>

                                <div className="form-group">
                                    <label for="name">Subject</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        id="subject"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 8 chars of subject"
                                        value={data.subject}
                                        onChange={InputEvent}
                                    />
                                    <div className="validate"></div>
                                </div>

                                <div className="form-group">
                                    <label for="name">Message</label>
                                    <textarea
                                        className="form-control"
                                        name="msg"
                                        rows="10"
                                        data-rule="required"
                                        data-msg="Please write something for us"
                                        value={data.msg}
                                        onChange={InputEvent}
                                    >
                                    </textarea>
                                    <div className="validate"></div>
                                </div>

                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
                <ToastContainer position="top-center" />
            </section>
        </>
    );
};

export default Contact