import React from 'react';
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { TbBrandFiverr } from 'react-icons/tb'


const HeaderSocials = () => {

    const getCurrentTime12HrFormat = () => {
        const currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert hours to 12-hour format
        hours = hours % 12 || 12;

        // Add leading zero to minutes if needed
        minutes = minutes < 10 ? `0${minutes}` : minutes;

        return `${hours}:${minutes} ${ampm}`;
    };

    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const showTime = getCurrentTime12HrFormat();


    return (
        <div className='header__socials'>
            <h5>TODAY IS:</h5>
            <a href="https://news.google.com/topics/CAAqJQgKIh9DQkFTRVFvSUwyMHZNRFYyT0dNU0JXVnVMVWRDS0FBUAE?hl=en
            -PH&gl=PH&ceid=PH%3Aen" rel="noreferrer" target="_blank">{currentDate}</a>
            <h5>{showTime}</h5><br></br>
            <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/Eljinx/Eljinx.github.io" rel="noreferrer" target="_blank"><FaGithub /></a>
            <a href="https://fiverr.com" rel="noreferrer" target="_blank"><TbBrandFiverr /></a>
        </div>
    )
}

export default HeaderSocials
