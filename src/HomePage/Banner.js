import React from 'react';
import banner from '../Images/banner.png'
import { AiOutlineDoubleRight } from 'react-icons/ai'

const Banner = () => {
    return (


        <div className="hero text-white ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} alt="Person" className='max-w-sm rounded-lg ' />

                <div>
                    <h3 className="text-2xl py-6">Welcome!!</h3>
                    <h1 className="text-5xl font-bold">I'm <span className='text-secondary  '>ROWSHON ARA</span></h1>
                    <p className='text-xl font-semibold'>Junior Front-End Developer </p>
                    <p className='mt-5'>I am a junior front end developer. There are thousands profession but I choose this to show my passion. What a amazing feeling when my projects will live decades to decades. I want to explore more in web development industry and set a goal to become a successful MERN full developer.</p>
                    <div className='  pt-10  '>
                        <button className="btn btn-sm btn-outline btn-secondary animate-bounce w-40 h-6 mr-4 font-bold"> <a href="rowson_resume.pdf" download="rowson_resume.pdf" target='_blank'>Resume</a> </button>
                        <button className="btn btn-sm btn-outline btn-secondary animate-bounce w-40 h-6 font-bold"><a href='https://www.linkedin.com/in/rowshon-ara-530542191/' target='_blank'>Hire me</a>             <AiOutlineDoubleRight className='ml-1'></AiOutlineDoubleRight> </button>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Banner;
