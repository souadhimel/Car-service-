import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import "./Register.css"

const Register = () => {
    const emailRef=useRef('')
    const passwordRef=useRef('')
    const handleSubmit=event=>{
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email,password);
    }
    return (

        <div className="form_container">
        <div>
            <h2 className="form_title">Register</h2>
            <form onSubmit={handleSubmit} >
            <div className="input_group">
            <label htmlFor="email">Email</label>
            <input ref={emailRef}  type="email" name="email" id="" required />
            </div>
            <div className="input_group">
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} type="password" name="password" id=""  required/>
            </div>
            
            <div >
                <input className="form_submit" type="submit" value="Register" />
            </div>
            </form>
            <div className="form_text">
            <p>Already have an account? <Link className="form_link" to="/login">Please log in</Link></p></div>
            
          <SocialLogin></SocialLogin>
        </div>
    </div>
        
    );
}
export default Register;