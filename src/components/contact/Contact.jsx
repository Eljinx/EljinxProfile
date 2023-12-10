import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { TbBrandMessenger } from 'react-icons/tb'
import { AiOutlineInstagram } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cmf85ni', 'template_15brsvc', form.current, 'slpKvKukjHKicE9oc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <section id="contact">
            <h5>Inquire Now!</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>elghenemaglaque@gmail.com</h5>
                        <a href="mailto:elghenemaglaque@gmail.com" target="_blank">Send an Email</a>
                    </article>

                    <article className="contact__option">
                        <TbBrandMessenger className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Elghene Olaguir Maglaque</h5>
                        <a href="https://www.facebook.com/james.maglaque.58" target="_blank">Send a Message</a>
                    </article>

                    <article className="contact__option">
                        <AiOutlineInstagram className='contact__option-icon' />
                        <h4>Instagram</h4>
                        <h5>Eljinx</h5>
                        <a href="https://instagram.com/elghenemaglaque?igshid=MzNINGNkZWQ4Mg==" target="_blank">Send a Message</a>
                    </article>
                </div>
                {/* end of contact option */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Full Name' required />
                    <input type="email" name='email' placeholder='Email' required />
                    <textarea name='message' rows="7" placeholder='Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
