import React from 'react'
import RegisterForm from '../../../components/AuthCompenents/RegisterForm'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
  
    <div className='container-fluid '>
    <div className="row">
        <h1 className='display-1 my-5 text-center'>Register Here</h1>
        <div className='col-md-6 offset-md-3'>
            <RegisterForm/>
            <Link to="/login" className="ms-auto">Already member? Login</Link>
        </div>
    </div>
</div>
  )
}

export default Register
