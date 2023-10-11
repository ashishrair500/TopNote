import React, { useEffect, useState } from 'react'

//redux
import { signInUser } from '../../redux/actionCreators/authActionCreator';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("please  fill all the fields");
            return;
        }
        dispatch(signInUser(email, password ,setSuccess));
    }
useEffect(()=>{
    if(success){
        navigate("/dashboard")  //same as register page
    }
})

    return (

        <form >
            <div className='form-group my-2'>
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

                <input type='email' name='email' className='form-control' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='form-group my-2'>
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

                <input type='password' name='password' className='form-control' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button type="submit" className="btn btn-primary my-2 from-control" onClick={handleSubmit}>Login</button>
        </form>


    )
}

export default LoginForm
