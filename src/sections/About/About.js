import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
        <div className="about container">
            <div className="col-left">
                <div className="about-image">
                    <img src="/img/img-2.png" alt="developer picture" />
                </div>
            </div>
            <div className="col-right">
                <h1 className="section-title">About <span>me</span></h1>
                <h2>Full stack developer</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita necessitatibus accusantium facere explicabo fuga? Amet assumenda est mollitia quaerat illo rerum voluptatibus quam debitis officiis, ea ratione veniam quis? Nulla.</p>
                <a href="#" className="cta">Download resume</a>
            </div>
        </div>
    </section>
  )
}

export default About