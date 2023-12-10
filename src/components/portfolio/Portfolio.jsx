import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: '3d Face Identification',
        noTag: '#portfolio',
        demo: 'https://unsplash.com/s/photos/robot?orientation=portrait&license=free'
    },

    {
        id: 2,
        image: IMG2,
        title: 'Chad Artificial Intelligence',
        noTag: '#portfolio',
        demo: 'https://unsplash.com/s/photos/evil-tech?orientation=portrait&license=free'
    },

    {
        id: 3,
        image: IMG3,
        title: 'Web Management System',
        noTag: '#portfolio',
        demo: 'https://unsplash.com/s/photos/web-development?orientation=portrait&license=free'
    },

    {
        id: 4,
        image: IMG4,
        title: 'GPS Nano Tracker',
        noTag: '#portfolio',
        demo: 'https://unsplash.com/s/photos/nano-technology?orientation=portrait&license=free'
    },

    {
        id: 5,
        image: IMG5,
        title: 'Hologram Integration',
        noTag: '#portfolio',
        demo: 'https://unsplash.com/s/photos/augmented-reality?orientation=portrait&license=free'
    },

    {
        id: 6,
        image: IMG6,
        title: 'Augmented Reality Meeting',
        github: '#portfolio',
        noTag: 'https://unsplash.com/s/photos/augmented-reality?orientation=portrait&license=free'
    }

]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, noTag, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={noTag} className='btn'>Process...</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Image Src</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio
