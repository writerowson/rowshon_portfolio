import React from 'react';
import Banner from './Banner';
import About from './About';
import Projects from './Projects/Projects';
import Contact from './Contact';

const Homa = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects />
            <Contact />
        </div>
    );
};

export default Homa;
