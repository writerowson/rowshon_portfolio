import React from 'react';
import ss01 from '../../Images/ss/ss2..png'
import ss02 from '../../Images/ss/ss2.1.png'
import ss03 from '../../Images/ss/ss2.2.png'

import { FaGlobe } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineCloudServer } from 'react-icons/ai'

const Projects02 = () => {
    return (
        <div className=" hero my-28 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div class="carousel lg:w-2/3 sm:w-3/4">
                    <div id="slide1" class="carousel-item relative w-full">
                        <img src={ss01} alt="ss" className='border-4 border-green-500/100 rounded-b-lg' />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" class="btn btn-circle">❮</a>
                            <a href="#slide2" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" class="carousel-item relative w-full">
                        <img src={ss02} alt="ss" className='border-4 border-green-500/100 rounded-b-lg' />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <a href="#slide3" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" class="carousel-item relative w-full">
                        <img src={ss03} alt="ss" className='border-4 border-green-500/100 rounded-b-lg' />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle">❮</a>
                            <a href="#slide4" class="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
                <div className='text-white'>
                    <h1 className="text-3xl text-secondary">Pure Perfume</h1>
                    <p className="pb-6">Pure Perfume is a warehouse website of sensitive products like perfume. It's multiple pages website which is created by react-route.  </p>

                    <button className=" mr-2 mt-2 btn btn-sm border text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">reactJS </button>
                    <button className=" mr-2 mt-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">HTML5 </button>
                    <button className=" mr-2 mt-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">cs3 </button>
                    <button className=" mr-2 mt-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">bootstrap5 </button>
                    <button className=" mr-2 mt-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">react-router </button>
                    <button className=" mr-2 mt-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">mongo bd </button>
                    <button className=" mr-2 mt-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">react-from </button>
                    <button className=" mr-2 mt-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">Heroku </button>
                    <button className=" mr-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">firebase </button>
                    <button className=" mr-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">firebase-hooks </button>
                    <button className=" mr-2 mt-2 btn btn-sm text-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-500 ...">toastify </button> <br />

                    <div className='mt-9'>
                        <button className="btn btn-sm btn-outline btn-secondary animate-bounce  mr-4 font-bold"> <a href='https://assignment11-8f26c.web.app/' target='_blank'><FaGlobe className='h-4 w-4 '></FaGlobe></a> </button>
                        <button className="btn btn-sm btn-outline btn-secondary animate-bounce  mr-4 font-bold"> <a href='https://github.com/writerowson/warehouse-a11server' target='_blank'><BsGithub className='h-4 w-4'></BsGithub></a> </button>
                        <button className="btn btn-sm btn-outline btn-secondary animate-bounce  mr-4 font-bold"> <a href='https://github.com/writerowson/warehouse-a11actualserver' target='_blank' rel=''><AiOutlineCloudServer className='h-4 w-4 '></AiOutlineCloudServer></a> </button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Projects02;