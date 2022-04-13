import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import "./Experts.css"

const Experts = () => {
    const [experts,setExperts]=useState([])

    useEffect(() => {
        fetch('experts.json')
        .then(res=>res.json())
        .then(data=>setExperts(data))
    },[])
    return (
        <div>
             <h1 className="text-primary text-center m-5">Our Experts</h1>
            <div className="experts_container">
            {
                experts.map(expert=><Expert
                key={expert._id}
                expert={expert}
                
                >

                </Expert>)
            }
            </div>
        </div>
    );
};

export default Experts;