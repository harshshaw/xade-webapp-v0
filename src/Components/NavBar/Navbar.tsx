import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {FaBars,FaTimes} from 'react-icons/fa'
import { ConnectButton } from 'web3uikit'
type Props = {}

const Navbar = (props: Props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            XADE
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/payments'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Payments
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/investments'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Investments
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/deposit-withdraw'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Borrow/Savings
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/offers'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Settings
              </Link>
            </li>
           
           

            <li className='button-item'>
             <ConnectButton/>
            </li>
          </ul>
         
        </div>
      </nav>
    </>
  )
}

export default Navbar