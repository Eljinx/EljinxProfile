import React, { Component } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'


class Header extends Component {
    constructor() {
        super();
        this.state = {
            messages: ['Full Stack Developer', 'Data Analyst', 'Dance Instructor'],
            currentMessageIndex: 0,
        };
    }

    changeMessage() {
        const { messages, currentMessageIndex } = this.state;
        const nextIndex = (currentMessageIndex + 1) % messages.length;

        this.setState({
            currentMessageIndex: nextIndex,
        });
    }

    render() {
        const { messages, currentMessageIndex } = this.state;
        const currentMessage = messages[currentMessageIndex];
        return (
            <header id="header">
                <div className="container header__container">
                    <h5>Hello I'm</h5>
                    <h1>Elghene Maglaque</h1>
                    <h5 className="text-light">{currentMessage}</h5>
                    <button className="btn-next" onClick={() => this.changeMessage()}><BsFillArrowRightCircleFill /></button>
                    <CTA />
                    <HeaderSocials />

                    <div className="me">
                        <img src={ME} alt="me" />
                    </div>

                    <a href="#contact" className='scroll__down'>Scroll Down</a>

                </div>
            </header>
        )
    }
}
// function Header() {
//     return (
//         <header id="header">
//             <div className="container header__container">
//                 <h5>Hello I'm</h5>
//                 <h1>Elghene Maglaque</h1>
//                 <h5 className="text-light">FullStack Developer</h5>
//                 <CTA />
//                 <HeaderSocials />

//                 <div className="me">
//                     <img src={ME} alt="me" />
//                 </div>

//                 <a href="#contact" className='scroll__down'>Scroll Down</a>

//             </div>
//         </header>
//     )
// }

export default Header
