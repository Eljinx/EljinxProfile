import React, { Component } from 'react'
import './about.css'
import ME from '../../assets/horse.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { PiFoldersLight } from 'react-icons/pi'


class About extends Component {
    render() {
        return (
            <section id="about">
                <h5>Get to Know</h5>
                <h2>About Me</h2>

                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src={ME} alt="About Image" />
                        </div>
                    </div>
                    <div className="about__content">
                        <div className="about__cards">
                            <article className='about__card'>
                                <FaAward className='about__icon' />
                                <h5>Experience</h5>
                                <small>2 Year Freelancing</small>
                            </article>

                            <article className='about__card'>
                                <FiUsers className='about__icon' />
                                <h5>Clients</h5>
                                <small>30+ Regional</small>
                            </article>

                            <article className='about__card'>
                                <PiFoldersLight className='about__icon' />
                                <h5>Projects</h5>
                                <small>50+ Completed</small>
                            </article>
                        </div>

                        <p>
                            I am a freelancer, Offering I.T solutions services. Including
                            consultations, project planning, prototyping, database management,
                            Iot Integrations and many more. I also outsource services.
                        </p>

                        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                    </div>
                </div>
            </section>
        )
    }
}
// function About() {
//     return (
//         <section id="about">
//             <h5>Get to Know</h5>
//             <h2>About Me</h2>

//             <div className="container about__container">
//                 <div className="about__me">
//                     <div className="about__me-image">
//                         <img src={ME} alt="About Image" />
//                     </div>
//                 </div>
//                 <div className="about__content">
//                     <div className="about__cards">
//                         <article className='about__card'>
//                             <FaAward className='about__icon' />
//                             <h5>Experience</h5>
//                             <small>2 Year Freelancing</small>
//                         </article>

//                         <article className='about__card'>
//                             <FiUsers className='about__icon' />
//                             <h5>Clients</h5>
//                             <small>30+ Regional</small>
//                         </article>

//                         <article className='about__card'>
//                             <PiFoldersLight className='about__icon' />
//                             <h5>Projects</h5>
//                             <small>50+ Completed</small>
//                         </article>
//                     </div>

//                     <p>
//                         The Freelancing of a freelancer is a freelance from a freelancer doing some
//                         freelancing. The programmer programmed the program which is the program to
//                         program the program.
//                     </p>

//                     <a href="#contact" className='btn btn-primary'>Let's Talk</a>
//                 </div>
//             </div>
//         </section>
//     )
// }

export default About
