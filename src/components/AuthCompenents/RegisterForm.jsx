import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/actionCreators/authActionCreator';
import { Navigate, useNavigate } from 'react-router-dom';
const RegisterForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [success, setSuccess] = useState(false);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !password || !passwordConfirmation) {
            alert("Please fill all the fields")
            return;
        }
        if (password !== passwordConfirmation) {
            alert("password do not match");
            return;
        }
        dispatch(signUpUser(name, email, password, setSuccess)); 0//we are sending to the redux; authActionCreator signup;
    };
    useEffect(() => {
        if (success) {                              //jaise hi authActionCreator signup , success ko true kr dega then user will redirect to the dashboard page
            navigate("/dashboard")
        }

    })
    return (
        <form >
            <div className='form-group my-2'>
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>

                <input type='text' name='name' className='form-control' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='form-group my-2'>
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

                <input type='email' name='email' className='form-control' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='form-group my-2'>
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

                <input type='password' name='password' className='form-control' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className='form-group my-2'>
                <label htmlFor="exampleInputPassword1" className="form-label">PasswordConfirmation</label>

                <input type='password' name='PasswordConfirmation' className='form-control' placeholder='Re-type password' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
            </div>
            <button type="submit" className="btn btn-primary my-2 from-control" onClick={handleSubmit}>Register</button>
        </form>
    )
}

export default RegisterForm
