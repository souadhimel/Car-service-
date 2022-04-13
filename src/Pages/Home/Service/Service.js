import React from 'react';
import "./Service.css"

const Service = ({service}) => {
    const {name,img,description,price}=service;
    return (
        <div className="single_service">
           <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p> Price:{price}</p>
            <button>Book{name}</button>
        </div>
    );
};

export default Service;