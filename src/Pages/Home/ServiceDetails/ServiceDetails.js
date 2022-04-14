import React from 'react';
import { useParams } from 'react-router-dom';
import "./ServiceDetails.css"

const ServiceDetails = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h2>Welcome to service details:{serviceId}</h2>
            {/* <p>{name}</p>
            <img src={img} alt="" />
            <p>{price}</p> */}

        </div>
    );
};

export default ServiceDetails;