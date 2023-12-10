import React from 'react'
import { useEffect, useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { AiOutlineBook } from 'react-icons/ai'
import { BsGear } from 'react-icons/bs'
import { BiCollection } from 'react-icons/bi'
import { AiOutlineMessage } from 'react-icons/ai'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    // Function to determine the active section based on scroll position
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const aboutSection = document.getElementById('about');
        const experienceSection = document.getElementById('experience');
        const servicesSection = document.getElementById('services');
        const portfolioSection = document.getElementById('portfolio');
        const contactSection = document.getElementById('contact');

        if (
            scrollPosition < aboutSection.offsetTop
        ) {
            setActiveNav('#');
        } else if (
            scrollPosition >= aboutSection.offsetTop &&
            scrollPosition < experienceSection.offsetTop
        ) {
            setActiveNav('#about');
        } else if (
            scrollPosition >= experienceSection.offsetTop &&
            scrollPosition < servicesSection.offsetTop
        ) {
            setActiveNav('#experience');
        } else if (
            scrollPosition >= servicesSection.offsetTop &&
            scrollPosition < portfolioSection.offsetTop
        ) {
            setActiveNav('#services');
        } else if (
            scrollPosition >= portfolioSection.offsetTop &&
            scrollPosition < contactSection.offsetTop
        ) {
            setActiveNav('#portfolio');
        } else {
            setActiveNav('#contact');
        }
    };

    // Add scroll event listener to handleScroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineQuestionCircle /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook /></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><BsGear /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiCollection /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
        </nav>
    )
}

export default Nav
