import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css"

const Service = ({service}) => {
    const {id,name,img,description,price}=service;
    const navigate=useNavigate()
    const navigateToServiceDetails = (id) => {
navigate(`/service/${id}`)
    }

    return (
        <div className="single_service">
           <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p> Price:{price}</p>
            <button onClick={()=>navigateToServiceDetails(id)}  >Book{name}</button>
        </div>
    );
};

export default Service;