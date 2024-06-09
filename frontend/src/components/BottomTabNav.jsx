import React from 'react';
import { Link } from 'react-router-dom';
import './bottomTabNav.css';

export default function BottomTabNav() {
  return (
    <div>
      <nav className='nav'>
        <Link to='/' className='nav__link'>
          Home
        </Link>
        <Link to='/cart' className='nav__link'>
          Cart
        </Link>
        <Link to='#' className='nav__link'>
          Profile
        </Link>
        <Link to='#' className='nav__link'>
          Settings
        </Link>
      </nav>
    </div>
  );
}
