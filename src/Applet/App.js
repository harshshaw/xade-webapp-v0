import './App.css';
import React from 'react';

import Investments from '../Components/INVESTMENTS'
import Navbar from '../Components/NAVBAR'
import TitleBar from '../Components/TITLEBAR'

export default function App()
{
    return (
        <>
            <TitleBar /> 

                <Investments /> 
          
            <Navbar/>
        </>
    )
}