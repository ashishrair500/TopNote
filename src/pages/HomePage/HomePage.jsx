import React from 'react';

import { NavigationComponent } from '../../components/HomePageComponents';
//from '../../components/HomePageComponents/index.js'

const HomePage = () => {
  return (
    <> 
    <NavigationComponent/>
    <h1 className='display-1 my-5 text-center'>
        Welcome to Davv Notes Portal 
    </h1>
    </>
  )
}

export default HomePage