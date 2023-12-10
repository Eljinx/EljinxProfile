import React from 'react'
import './experience.css'
import { BsPatchCheck } from 'react-icons/bs'

const Experience = props => {
    return (
        <section id="experience">
            <h5>Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className='experience__frontend'>
                    <h3>{props.special1}</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheck className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheck className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheck className="experience__details-icon" />
                            <div>
                                <h4>BOOTSTRAP</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheck className="experience__details-icon" />
                            <div>
                                <h4>REACT JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheck className="experience__details-icon" />
                            <div>
                                <h4>JAVASCRIPT</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience__backend'>
                    <h3>{props.special2}</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheck className="experience__details-icon" />
                            <div>
                                <h4>PYTHON</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheck className="experience__details-icon" />
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheck className="experience__details-icon" />
                            <div>
                                <h4>NODE JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheck className="experience__details-icon" />
                            <div>
                                <h4>MYSQL</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheck className="experience__details-icon" />
                            <div>
                                <h4>C++</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
