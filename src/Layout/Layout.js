import React from 'react';
import Navbar from '../components/navigation/Navbar';
import Hero from '../sections/Hero/Hero';
import './styles/Layout.css';
import './styles/Animations.css';
import './styles/MediaQueries.css';
import Services from '../sections/Services/Services';
import Projects from '../sections/Projects/Projects';
import About from '../sections/About/About';
import Contacts from '../sections/Contacts/Contacts';

const Layout = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contacts />
    </div>
  )
}

export default Layout