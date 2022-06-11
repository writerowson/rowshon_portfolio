import React from 'react';
import img from '../Images/about.png'

const About = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-semibold text-secondary  mt-20 mb-9 underline underline-offset-4'>Who Am I</h1>
            <div className=' mt-12 text-white  hero-content flex-col lg:flex-row'>

                <img src={img} alt="illustration" />
                <div>
                    <p ><b className='text-secondary'>Name: </b>Rowshon Ara</p>
                    <p ><b className='text-secondary'>Email Address: </b>runurowson@gmail.com</p>
                    <p ><b className='text-secondary'>Educational background:</b> MBA from National University</p>
                    <p><b className='text-secondary '>Technologies and Skills:</b>
                        <div className='ml-16'>
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
                </div>
            </div>
        </div>
    );
};

export default About;