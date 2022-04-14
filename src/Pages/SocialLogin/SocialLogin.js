import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook,BsGithub } from "react-icons/bs";
import auth from '../../firebase/firebase.init';
import { useSignInWithGoogle,useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    // google sign in
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate=useNavigate()
let errorText
    if (error || error1) {
        errorText =(
          <div>
            <p className="text-danger">Error: {error?.message} {error1?.message}</p>
          </div>
        );
      }


      if (user || user1) {
         navigate('/home') 
      }


    //   github sign in

    


    if (user) {
        navigate('/home') 
     }



    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorText}
            <div className="social_btn">
                <button onClick={()=>signInWithGoogle()} style={{ margin: '10px',borderRadius:'50%',fontSize:'30px' }}>
                  
                <FcGoogle></FcGoogle>
                </button>
                <button style={{ margin: '10px',borderRadius:'50%',fontSize:'30px' }}>
                  
                   <BsFacebook></BsFacebook>
                </button>
                <button onClick={()=>signInWithGithub()} style={{ margin: '10px',borderRadius:'50%',fontSize:'30px' }}>
                  
                   <BsGithub></BsGithub>
                </button>
            </div>
        </div>

    );
};

export default SocialLogin;