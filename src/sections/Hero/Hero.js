import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero">
        <div className="hero container">
            <div>
                <h1>Hello, <span></span></h1>
                <h1>My Name is <span></span></h1>
                <h1>Lenny G. <span></span></h1><br />
                <a href="#projects" type="button" className="cta">Portfolio</a>
            </div>
        </div>
    </section>
  )
}

export default Hero