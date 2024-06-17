import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      {/* Social */}
      <section class='social section'>
        <div class='container'>
          <p>
            Follow us on social media for updates and news about our offers.
          </p>
          <div class='social-container'>
            <Link to='/'>
              <FaFacebookF class='social-icon' />
            </Link>
            <Link to='/'>
              <FaTwitter class='social-icon' />
            </Link>
            <Link to='/'>
              <FaInstagramSquare class='social-icon' />
            </Link>
            <Link to='/'>
              <FaLinkedinIn class='social-icon' />
            </Link>
          </div>
        </div>
      </section>
      <footer class='footer'>
        <div class='container footer-flex'>
          <ul class='footer-links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>Terms</Link>
            </li>
            <li>
              <Link to='/'>Privacy</Link>
            </li>
            <li>
              <Link to='/'>Contact</Link>
            </li>
          </ul>
          <p>&copy; 2024 - 2025 Books. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
