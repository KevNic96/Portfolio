import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/demo_1.png'
import IMG2 from '../../assets/demo_2.png'
import IMG3 from '../../assets/demo_3.png'
import IMG4 from '../../assets/demo_4.png'
import IMG5 from '../../assets/still_working.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Weather App',
        github: 'https://github.com/KevNic96/WeatherApp',
        demo: 'https://monumental-babka-128ea9.netlify.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Star Wars API',
        github: 'https://github.com/KevNic96/Star-Wars-API',
        demo: 'https://cute-kringle-d44e1c.netlify.app'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Food Website Clone',
        github: 'https://github.com/KevNic96/Food_Website',
        demo: 'https://subtle-sunshine-e153aa.netlify.app'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Practice Website Design',
        github: 'https://github.com/KevNic96/Website_Design_Practice',
        demo: 'https://curious-zabaione-e4aece.netlify.app'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Building a new page . . .',     
    },
    {
        id: 6,
        image: IMG5,
        title: 'Building a new page . . .',     
    }
    // HACER LO MISMO PARA CADA LINK
]


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5 className='text-light'>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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