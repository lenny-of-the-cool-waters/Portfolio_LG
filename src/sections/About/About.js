import React from 'react';
import './About.css';
// import resume from './Resume-LennyGithenya.pdf';

const About = () => {
    const downloadCV = () => {
        fetch("./Resume-LennyGithenya.pdf").then((response) => {
          response.blob().then((blob) => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "LennyGithenya_Resume.pdf";
            alink.click();
          });
        });
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
                <button onClick={downloadCV} className="cta">Download resume</button>
            </div>
        </div>
    </section>
  )
}

export default About