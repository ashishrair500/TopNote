import React from 'react'
import LoginForm from '../../../components/AuthCompenents/LoginForm'
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <div className='container-fluid '>
            <div className="row">
                <h1 className='display-1 my-5 text-center'>Login Here</h1>
                <div className='col-md-6 offset-md-3'>
                    <LoginForm />
                    <Link to="/register" className="ms-auto">Not a member? Register</Link>
                </div>
            </div>
        </div>
        
    )
}

export default Login
