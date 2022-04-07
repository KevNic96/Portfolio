import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from'emailjs-com';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zcae4vr', 'template_4ipddl8', form.current, 'W_JFZL1Z8AZAC5fxb')
         
        e.target.reset()
      };


    return (
        <section id="contact">
            <h5 className='text-light'>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Full name' required />
                    <input type="email" name='email' placeholder='Email' required />
                    <textarea name="message" rows="8" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>                    
                </form>
            </div>



        </section>
    )
}

export default Contact