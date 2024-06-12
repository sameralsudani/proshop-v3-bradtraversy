import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className='footer2'>
      <Container>
        <div className='row2'>
          <div className='footer-col2'>
            <h4>company</h4>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/'>our services</Link>
              </li>
              <li>
                <Link to='/'>privacy policy</Link>
              </li>
            </ul>
          </div>
          <div className='footer-col2'>
            <h4>get help</h4>
            <ul>
              <li>
                <Link to='/'>FAQ</Link>
              </li>
              <li>
                <Link to='/'>shipping</Link>
              </li>
              <li>
                <Link to='/'>returns</Link>
              </li>
              <li>
                <Link to='/'>order status</Link>
              </li>
              <li>
                <Link to='/'>payment options</Link>
              </li>
            </ul>
          </div>
          <div className='footer-col2'>
            <h4>online shop</h4>
            <ul>
              <li>
                <Link to='/'>Books</Link>
              </li>
              <li>
                <Link to='/'>bag</Link>
              </li>
              <li>
                <Link to='/'>shoes</Link>
              </li>
              <li>
                <Link to='/'>dress</Link>
              </li>
            </ul>
          </div>
          <div className='footer-col2'>
            <h4>follow us</h4>
            <div className='social-links2'>
              <Link to='/'>
                <i className='fab fa-facebook-f'></i>
              </Link>
              <Link to='/'>
                <i className='fab fa-twitter'></i>
              </Link>
              <Link to='/'>
                <i className='fab fa-instagram'></i>
              </Link>
              <Link to='/'>
                <i className='fab fa-linkedin-in'></i>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
