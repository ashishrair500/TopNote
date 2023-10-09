import React from 'react'
import { useState } from 'react';
const RegisterForm = () => {
    const[name, setName]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <form >
            <div className='form-group my-2'>
                <label for="exampleInputEmail1" className="form-label">Name</label>

                <input type='text' name='name' className='form-control' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='form-group my-2'>
                <label for="exampleInputEmail1" className="form-label">Email address</label>

                <input type='email' name='email' className='form-control' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='form-group my-2'>
                <label for="exampleInputPassword1" className="form-label">Password</label>

                <input type='password' name='password' className='form-control' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className='form-group my-2'>
                <label for="exampleInputPassword1" className="form-label">PasswordConfirmation</label>

                <input type='password' name='PasswordConfirmation' className='form-control' placeholder='Re-type password' value={password} onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
            </div>
            <button type="submit" className="btn btn-primary my-2 from-control">Register</button>
        </form>
    )
}

export default RegisterForm
