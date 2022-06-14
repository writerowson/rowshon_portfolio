import React from 'react';
import banner from '../Images/banner.png'
import { FiDownload } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { GrTwitter } from 'react-icons/gr'
const Banner = () => {
    return (


        <div className="hero text-white ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} alt="Person" className=' rounded-lg lg:ml-48 ' />

                <div>
                    <h3 className="text-xl lg:pt-8 mb-4 text-gray-400 ">Welcome!! to Rowshon's Porfolio</h3>
                    <h1 className="text-5xl font-bold"> <span className='text-secondary  '>ROWSHON ARA</span></h1>
                    <p className='text-lg  font-semibold'>Junior Front-End Developer </p>


                    <div className='mt-12 text-'>
                        <button className="btn btn-sm btn-outline btn-accent animate-bounce  mr-4 font-bold"> <a href='https://www.linkedin.com/in/rowshon-ara-530542191/' target='_blank'><AiFillLinkedin className='h-4 w-4 '></AiFillLinkedin></a> </button>
                        <button className="btn btn-sm btn-outline btn-accent animate-bounce  mr-4 font-bold"> <a href='https://github.com/writerowson/manufacturer-website-a12client' target='_blank'><BsGithub className='h-4 w-4'></BsGithub></a> </button>
                        <button className="btn btn-sm btn-outline btn-accent animate-bounce  mr-4 font-bold"> <a href='https://github.com/writerowson/manufacturer-website-a12server' target='_blank'><BsFacebook ></BsFacebook></a> </button>
                        <button className="btn btn-sm btn-outline btn-accent animate-bounce  mr-4 font-bold"> <a href='https://github.com/writerowson/manufacturer-website-a12server' target='_blank'><GrTwitter ></GrTwitter></a> </button>

                    </div>
                    <button className="btn btn-sm   btn-accent  w-40 h-6 font-bold text-primary bg-gradient-to-r from-accent  hover:from-pink-500 hover:to-violet-500 ... mt-4"><a href="rowson_resume.pdf" download="rowson_resume.pdf" target='_blank'>Resume</a>             <FiDownload className='ml-3'></FiDownload> </button>
                </div>
            </div>
        </div>



    );
};

export default Banner;
