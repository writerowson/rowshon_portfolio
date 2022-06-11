import React from 'react';
import Project01 from './Project01';
import Projects02 from './Projects02';
import Project03 from './Projects03';

const Projects = () => {
    return (
        <div className=' my-12 '>
            <h1 className='text-4xl text-center font-semibold text-secondary  mt-20 mb-9 underline underline-offset-4'>My Recent Projects</h1>
            <Project01 ></Project01>
            <Projects02></Projects02>
            <Project03></Project03>


        </div>
    );
};

export default Projects;