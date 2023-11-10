import React from 'react'
import {Link}from 'react-router-dom'

import{useSelector, useDispatch} from 'react-redux'
import { signOutUser } from '../../redux/actionCreators/authActionCreator';

const NavigationComponent = () => {

const {isAuthenticated,user} = useSelector(state => state.auth)

const dispatch = useDispatch();


          //  <span className='text-warning'>{user.displayName}</span>

  return  <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand ms-5' to='/'>Notes Adda</Link>
    <ul className='navbar-nav ms-auto me-5'>
    {
      isAuthenticated ? (
          <>
      <li className='nav-item mx-2'><p className='my-0 mt-1'><span className='text-light'>Welcome {user.displayName}</span></p>
       </li><li className='nav-item mx-2'><Link className='btn btn-primary btn-sm' to='/dashboard'>Dashboard </Link>
    </li><li className='nav-item'><button className='btn btn-success btn-sm' onClick={() => dispatch(signOutUser())}>LogOut
        </button>
        </li>
          </>
      ) : (
          <>
          <li className='nav-item mx-2'><Link className='btn btn-primary btn-sm' to='/login'>Login
        </Link></li>
        <li className='nav-item'><Link className='btn btn-success btn-sm' to='/register'>Register</Link></li>
        </>
      )
    }
    </ul>
  </nav>
};

export default NavigationComponent
