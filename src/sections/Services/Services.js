import React from "react";
import Service from "./Service";
import servicesList from './Services.json';
import './Services.css';

const Services = () => {
  return (
    <section id="services">
      <div className="service container">
        <div className="service-top">
          <h1 className="section-title">
            Serv<span>i</span>ces
          </h1>
          <p>
            Need a friendly techie to work some "magic"? I know my stuff and can help you laugh your way through issues ranging from "my computer won't turn on" to "I need the coolest website for my business". Here are some cool things we can do together.
          </p>
        </div>
        <div className="service-bottom">
          { servicesList.map(item => {
            return <Service key={item.id} name={item.name} description={item.description} />
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
