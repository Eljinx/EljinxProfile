import React from 'react'
import './services.css'
import { BsCheck2 } from 'react-icons/bs'

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Creating Logo. Define It I'll give it.</p>
                        </li>

                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Creating design either software or hardware.</p>
                        </li>

                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Provides best User Experience.</p>
                        </li>

                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Provides prototyping for paperworks.</p>
                        </li>

                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>I offer design consultation.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UI/UX */}
                <article className="service">
                    <div className="service__head">
                        <h3>IoT Integration</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Automation for Irrigations.</p>
                        </li>

                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Automatic Response Systems.</p>
                        </li>

                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Automation for Agricultural Projects.</p>
                        </li>

                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Specialty in sensor based Projects.</p>
                        </li>

                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Provides greate structure for your hardware.</p>
                        </li>
                    </ul>
                </article>
                {/* /**END OF IOT Integration */}
                <article className="service">
                    <div className="service__head">
                        <h3>Mobile App Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Specialty in Image Processing Projects.</p>
                        </li>

                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Integrates API.</p>
                        </li>

                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Mobile Game Development for Entertainment.</p>
                        </li>

                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Creates cross-platform application.</p>
                        </li>

                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>I outsource this kind of service.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services
