import React from 'react'
import './footer.css'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>ELJINX</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"><AiFillFacebook /></a>
                <a href="https://instagram.com"><AiFillInstagram /></a>
                <a href="https://linkedin.com"><AiFillLinkedin /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; ELJINX Services. All Rights Reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
