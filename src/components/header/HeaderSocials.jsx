import React from 'react'
import {GrInstagram} from 'react-icons/gr'
import {FaTwitter} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.instagram.com/kevflores96/" target="_blank"><GrInstagram size="1.6rem" /></a>
            <a href="https://twitter.com/KevFlores96" target="_blank"><FaTwitter size="1.6rem"/></a>
            <a href="https://linkedin.com/in/kevin-flores96" target="_blank"><BsLinkedin size="1.3em"/></a>
            <a href="https://github.com/KevNic96" target="_blank"><FaGithub size="1.3em"/></a>
        </div>
    )
}

export default HeaderSocials