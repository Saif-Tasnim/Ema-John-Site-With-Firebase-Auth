import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { ToastContainer, toast, Toaster } from 'react-toastify';

import { AuthContest } from '../../Provider/ContextApi';



const Register = () => {
    const { createUser } = useContext(AuthContest);
    const [error, setError] = useState("");


    const handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const userName = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.ConfirmPassword.value;

        console.log(userName, email, password, confirmPassword);

        if (password !== confirmPassword) {
            setError("Password Did not Match .");
            return;
        }

        if (password.length < 8) {
            setError("Password Should be More Than 8 character .");
            return;
        }

        createUser(email, password)
            .then(res => {
                const loggedUser = res.user;
                
                toast.success('Congratulations! Your Account created Successfully', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'custom-toast',
                    bodyClassName: 'custom-toast-body',
                    progressClassName: 'custom-toast-progress'
                  });
              })
            .catch(error => {
                setError(error);
            });

            form.reset();
    }

    const handleGoogleReg = () => {

    }

    return (
        <div>

            <div className="box-sign-up">
                <div className="form-controller">
                    <h1 className='form-h1'>Sign Up</h1>
                    <form onSubmit={handleOnSubmit}>
                        <div>
                            <label htmlFor="Name"> User Name</label><br />
                            <input type="text" name="userName" id="" required />
                        </div>
                        <div>
                            <label htmlFor="Email"> Email</label><br />
                            <input type="email" name="email" id="" required />
                        </div>

                        <div>
                            <label htmlFor="Password"> Password</label><br />
                            <input type="password" name="password" id="" required />
                        </div>
                        <div>
                            <label htmlFor="Confirm Password"> Confirm Password</label><br />
                            <input type="password" name="ConfirmPassword" id="" required />
                        </div>

                        <button>Sign Up</button>
                        <ToastContainer />

                        <p><small> Already Have Account ? <Link to="/login" > Log In </Link> </small></p>
                        <div className='hr-or'>
                            <hr />
                            <p>or</p>
                            <hr />

                        </div>

                        <button onClick={handleGoogleReg}>Continue With Google</button>
                    </form>
                    <p className='err'> {error}  </p>
                </div>
            </div>
        </div>
    );
};

export default Register;