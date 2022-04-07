import React from 'react'
import './header.css'
import ME from '../../assets/me_pic2.png'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">

                <div className="me">
                    <img src={ME} alt="me" className='img-me'/>
                </div>

                <h5>¡Hello world! Welcome to my portfolio,</h5>
                <h4>I'm Kevin Flores</h4>
                <h1 className="text-light">Full-Stack Developer</h1>
                <CTA />
                <HeaderSocial />
            </div>

            <div class="custom-shape-divider-bottom-1648784455">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
                </svg>
            </div>
        </header>
    )
}

export default Header