import React from "react";

const Service = ({ name, description}) => {
  return (
    <div className="service-item">
      <div className="icon">
        <img src="/icons/icons8-gears-50.png" alt="Gears icon" />
      </div>
      <div className="name-container"><h2>{name}</h2></div>
      <div className="desc-container"><p>{description}</p></div>
    </div>
  );
};

export default Service;
