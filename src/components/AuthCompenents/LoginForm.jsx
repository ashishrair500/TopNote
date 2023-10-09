import React, { useState } from 'react'
const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

        <form >
            <div className='form-group my-2'>
                <label for="exampleInputEmail1" className="form-label">Email address</label>

                <input type='email' name='email' className='form-control' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='form-group my-2'>
                <label for="exampleInputPassword1" className="form-label">Password</label>

                <input type='password' name='password' className='form-control' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button type="submit" className="btn btn-primary my-2 from-control">Login</button>
        </form>


    )
}

export default LoginForm
