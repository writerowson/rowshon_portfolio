import React from 'react';
import ss01 from '../../Images/ss/ss3..png'
import ss02 from '../../Images/ss/ss3.1.png'
import ss03 from '../../Images/ss/ss3.2.png'

import { FaGlobe } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineCloudServer } from 'react-icons/ai'

const Project03 = () => {
    return (

        <div className=" hero  my-28">

            <div className="hero-content flex-col lg:flex-row">
                <div className="carousel lg:w-2/3 sm:w-3/4">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={ss01} alt="ss" className='border-4 border-green-500/100 rounded-b-lg' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={ss02} alt="ss" className='border-4 border-green-500/100 rounded-b-lg' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={ss03} alt="ss" className='border-4 border-green-500/100 rounded-b-lg' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div className='text-white'>
                    <h1 className="text-3xl text-secondary">Happenning Happiness</h1>
                    <p className="pb-6">Happenning Happiness is a service providing website. It's a user friendly website which is created by reactJS.  </p>

                    <button className=" mr-2 mt-2 btn btn-sm border text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">reactJS </button>
                    <button className=" mr-2 mt-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">HTML5 </button>
                    <button className=" mr-2 mt-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">css3 </button>
                    <button className=" mr-2 mt-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">bootstrap5 </button>
                    <button className=" mr-2 mt-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">react-router </button>
                    <button className=" mr-2 mt-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">react-icon </button>
                    <button className=" mr-2 mt-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">firebase-hooks </button>
                    <button className="mr-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">firebase </button>
                    <button className="mr-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">Netlify </button>
                    <button className=" mr-2 mt-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">toastify </button> <br />

                    <div className='mt-9'>
                        <button className="btn btn-sm btn-outline btn-secondary animate-bounce  mr-4 font-bold"> <a href='https://golden-biscotti-443cea.netlify.app/' target='_blank'><FaGlobe className='h-4 w-4 '></FaGlobe></a> </button>
                        <button className="btn btn-sm btn-outline btn-secondary animate-bounce  mr-4 font-bold"> <a href='https://github.com/writerowson/independent-service-provider-a10' target='_blank'><BsGithub className='h-4 w-4'></BsGithub></a> </button>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Project03;