import React from 'react';
import './About.css';
import { saveAs } from 'file-saver';

const About = () => {
    const downloadCV = () => {
        saveAs("./Resume-LennyGithenya.pdf", "LennyGithenya_CV.pdf");
    }

  return (
    <section id="about">
        <div className="about container">
            <div className="col-left">
                <div className="about-image">
                    <img src="/img/LG1.jpeg" alt="Lenny G" />
                </div>
            </div>
            <div className="col-right">
                <h1 className="section-title">About <span>me</span></h1>
                <h2>Full stack developer | IoT | Technical Support</h2>
                <p>My name is Lenny Githenya and I am a fullstack web and IoT developer. My professional experience includes work with multinational organizations (Minet Kenya, TSC Kenya, NCBA Group) and freelance development projects. I believe that in a world full of dreamers no one should leave all their dreams in bed, and I put in the work to achieve this for me and those I work with. After a long day of work, I enjoy a good swim or getting lost in the pages of a book.</p>
                <button className="cta" onClick={downloadCV}>Download resume</button>
            </div>
        </div>
    </section>
  )
}

export default About