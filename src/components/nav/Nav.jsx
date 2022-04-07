import React from 'react'
import './nav.css'
import {FaRegUser} from 'react-icons/fa'
import {BiBookBookmark} from 'react-icons/bi'
import {MdOutlineDesignServices} from 'react-icons/md'
import {RiSuitcaseLine} from 'react-icons/ri'
import {RiMailSendLine} from 'react-icons/ri'
import {useState} from 'react'


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookBookmark /></a>
            {/* <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineDesignServices /></a> */}
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiSuitcaseLine /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMailSendLine /></a>
        </nav>
    )
}


export default Nav