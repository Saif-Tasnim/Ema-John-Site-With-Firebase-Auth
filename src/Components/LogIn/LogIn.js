import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContest } from '../../Provider/ContextApi';
import { ToastContainer, toast, Toaster } from 'react-toastify';


const LogIn = () => {
    const { signIn } = useContext(AuthContest);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';
   
    const handleSubmitLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       
        signIn(email, password)
        .then(res => {
            toast.success(`Successfully Logged In ${res.user.email}`, {
                position: toast.POSITION.TOP_CENTER,
                className: 'custom-toast',
                bodyClassName: 'custom-toast-body',
                progressClassName: 'custom-toast-progress'
              });

              form.reset();
              navigate(from , {replace:true});
            
             
        })
        .catch(error => {

            toast.warning("User Invalid , Please Sign Up First" ,{
                position: toast.POSITION.TOP_CENTER,
                className: 'custom-toast',
                bodyClassName: 'custom-toast-body',
                progressClassName: 'custom-toast-progress'
            });
        })

        
    
    }

    return (
        <div>
            <div className="box">
                <div className="form-controller">
                    <h1 className='form-h1'>Log In</h1>
                    <form onSubmit={handleSubmitLogIn}>
                        <div>
                        <label htmlFor="Email"> Email</label><br />
                        <input type="email" name="email" id="" required/>
                        </div>
                        
                        <div>
                        <label htmlFor="Password"> Password</label><br />
                        <input type="password" name="password" id="" required />
                        </div>
                        
                        <button>Log In</button>
                        <ToastContainer />
                        
                        <p><small> New To Ema-John ? <Link to="/register" > Create New Account   </Link> </small></p>
                        <div className='hr-or'>
                        <hr />
                        <p>or</p>
                        <hr />

                        </div>
                     
                        <button>Continue With Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;