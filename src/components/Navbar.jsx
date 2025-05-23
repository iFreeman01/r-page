import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButtton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButtton = () => {
    if(window.innerWidth <= 960){
      setButtton(false);
    }else{
      setButtton(true);
    }
  };

  useEffect(() => {
    showButtton()
  }, []);

  window.addEventListener('resize', showButtton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
              Casa Koba <i className='fab fa-typo3' />
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
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Services
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                About Me
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
                </Link>
              </li>
              
            </ul>
            {button && <Button buttonStyle='btn--outline'> SIGN UP</Button>}
        </div>  
      </nav>
    </>
  );
}

export default Navbar;