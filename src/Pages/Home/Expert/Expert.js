import React from 'react';
import "./Expert.css"

const Expert = ({expert}) => {
    const{name,picture,age}=expert;
    return (
        <div className="single_expert">
           
            <img style={{width: '200px', height: '200px',borderRadius:'50%'}} src={picture} alt="" />
            <h2>{name}</h2>
            <p>Age:{age}</p>
        </div>
    );
};

export default Expert;