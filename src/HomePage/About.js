import React from 'react';
import img from '../Images/about.png'

const About = () => {
    return (
        <div id="about">
            <h1 className='text-4xl text-center font-semibold text-secondary lg:mt-2  mt-20 mb-9 underline underline-offset-4'>Who Am I</h1>
            <div className=' mt-12 text-white  hero-content flex-col lg:flex-row'>

                <img src={img} alt="illustration" />
                <div>
                    <p>Hello!!</p>
                    <p >I'm <span><strong className='text-secondary text-2xl font-semibold'> Rowshon Ara</strong></span></p>
                    <p>I am a junior front end developer. There are thousands profession but I choose this to show my passion. What a amazing feeling when my projects will live decades to decades. I want to explore more in web development industry and set a goal to become a successful MERN full developer.</p>
                    <p > <span className='text-secondary font-medium'>Educational background:</span> MBA from National University</p>
                    <p> <span className='text-secondary font-medium'>Technologies and Skills: </span>

                        <div className='ml-12'>
                            <li>Browser format- chrome, firefox, microsoft edge </li>
                            <li>Framwork- BootStrap, tailwind and nodejs</li>
                            <li>Core language- HTML, CSS, JavaScript</li>
                            <li>Databases- MongoDB</li>
                            <li>Data formats - json</li>
                            <li>Protocols - http</li>
                            <li>Libraries - jQuery</li>
                            <li>Computer literacy, Database knowledge, Data structures and algorithms,<br />git  Application Programming Interface, Authentication, Problem Solving and Searching</li>
                        </div>
                    </p>
                </div >
            </div >
        </div >
    );
};

export default About;