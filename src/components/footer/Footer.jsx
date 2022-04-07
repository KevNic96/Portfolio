import React from 'react'
import './footer.css'
import {GrInstagram} from 'react-icons/gr'
import {FaTwitter} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>KEVIN FLORES</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Knowledge & Skills</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.instagram.com/kevflores96/" target="_blank"><GrInstagram /></a>
                <a href="https://twitter.com/KevFlores96" target="_blank"><FaTwitter /></a>
                <a href="https://www.linkedin.com/in/kevin-flores96/" target="_blank"><BsLinkedin /></a>
                <a href="https://github.com/KevNic96" target="_blank"><FaGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Kevin Flores 2022. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer