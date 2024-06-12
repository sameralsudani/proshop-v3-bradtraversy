import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar2'>
        <Link to='/' className='navbar2-logo' onClick={closeMobileMenu}>
          EPIC
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu2-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav2-menu active' : 'nav2-menu'}>
          <li className='nav2-item'>
            <Link to='/' className='nav2-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav2-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav2-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav2-item'>
            <Link
              to='/products'
              className='nav2-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className='nav2-item'>
            <Link
              to='/contact-us'
              className='nav2-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
