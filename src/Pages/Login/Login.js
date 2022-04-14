import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import "./Login.css";


const Login = () => {
    const emailRef=useRef('')
    const passwordRef=useRef('')
    // const navigate=useNavigate()
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const handleSubmit=event=>{
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email,password);
    }
    const resetPassword=async()=>{
        const email = emailRef.current.value
        await sendPasswordResetEmail(email);
          alert('Sent email');
    }

   
    return (

        <div className="form_container">
        <div>
            <h2 className="form_title">Login</h2>
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
                <input className="form_submit" type="submit" value="Login" />
            </div>
            </form>
            <div className="form_text">
            <p>New to Car website? <Link className="form_link" to="/register">Create a new account</Link></p>
            <p onClick={resetPassword}>Forget password?  <Link  className="form_link" to="/register">Reset Password</Link></p></div>
            
          <SocialLogin></SocialLogin>
        </div>
    </div>
        
    );
};

export default Login;