import React from 'react'
import './about.css'
import ME from '../../assets/me_photo3.jpg'
import {GiTeamUpgrade} from 'react-icons/gi'
import {RiTeamFill} from 'react-icons/ri'
import {AiFillSchedule} from 'react-icons/ai'
import {BsPenFill} from 'react-icons/bs'
import {FaComments} from 'react-icons/fa'
import {BsFillGearFill} from 'react-icons/bs'
import CV from '../../assets/CV_Kevin_Flores.pdf'
import {FaFilePdf} from 'react-icons/fa'

const About = () => {
    return(
        <section className="about" id='about'>
            <h5 className="text-light">Who am I?</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">

                    <div>
                        <p>
                        // Computing engineering student. // I am a developer working on Frontend but I also have knowledge on Backend. // My objectives are to keep improving and progress in the area of ​​programming to be an expert full-stack developer. //
                        </p>
                    </div>


                    <div className="about__cards">
                        <article className='about__card'>
                            <FaComments className='about__icon'/>
                            <h5>Good communication</h5>
                            <small>My good communication skills allows me to express my ideas to others and benefit the team-work.</small>
                        </article>

                        <article className='about__card'>
                            <AiFillSchedule className='about__icon'/>
                            <h5>Organization capacity</h5>
                            <small>My organization of schedules allows me to optimize my work and increase productivity.</small>
                        </article>

                        <article className='about__card'>
                            <BsPenFill className='about__icon'/>
                            <h5>Constructive self-criticism</h5>
                            <small>My self-criticism allows me to keep learning and improving even in areas that I dominate.</small>
                        </article>

                        <article className='about__card'>
                            <RiTeamFill className='about__icon'/>
                            <h5>Leadership</h5>
                            <small>I offer confidence and motivation to others, contributing to the growth of the team.</small>
                        </article>

                        <article className='about__card'>
                        <GiTeamUpgrade className='about__icon'/>
                            <h5>Team work</h5>
                            <small>I can work easily in a team, offering my best effort for the group's objective. </small>
                        </article>

                        <article className='about__card'>
                            <BsFillGearFill className='about__icon'/>
                            <h5>Problem solving</h5>
                            <small>I can provide effective solutions to problems that may arise.</small>
                        </article>
                    </div>
                    
                    <div className="contact_buttons">

                    <a href="#contact" className='btn btn-primary'>Let's talk</a>

                    <a href={CV} download className='btn'>Download CV <FaFilePdf size="1.4rem"/></a>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default About