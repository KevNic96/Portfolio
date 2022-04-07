import React from 'react'
import './experience.css'
import HTML from '../../assets/html_logo.png'
import CSS from '../../assets/css_logo.png'
import JS from '../../assets/js_logo.png'
import BT from '../../assets/bootstrap_logo.png'
import JQ from '../../assets/jquery_logo.png'
import R from '../../assets/react_logo.png'
import NJS from '../../assets/node_js.png'
import API from '../../assets/api_logo.png'
import PY from '../../assets/python_logo.png'
import SQL from '../../assets/sql_logo.png'
import DJ from '../../assets/django_logo.png'


const Experience = () => {
    return (
        <section id="experience">
            <h5 className="text-light">Knowledge</h5>
            <h2>My Skills</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3><u>Front-End Development</u></h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <img src={HTML} alt="html_logo" className="logo_img" />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Advanced
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <img src={CSS} alt="css_logo" className="logo_img" />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <img src={JS} alt="js_logo" className="logo_img" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <img src={BT} alt="boot_logo" className="logo_img" /> 
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <img src={JQ} alt="query_logo" className="logo_img" /> 
                            <div>
                                <h4>jQuery</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <img src={R} alt="react_logo" className="logo_img" /> 
                            <div>
                                <h4>ReactJS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND */}
                <div className="experience__backend">
                    <h3>Back-End Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <img src={NJS} alt="node_logo" className="logo_img" /> 
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <img src={API} alt="api_logo" className="logo_img" /> 
                            <div>
                                <h4>API</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <img src={PY} alt="python_logo" className="logo_img" /> 
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <img src={SQL} alt="sql_logo" className="sql_img" /> 
                            <div>
                                <h4>SQL</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <img src={DJ} alt="django_logo" className="logo_img" /> 
                            <div>
                                <h4>Django</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience