import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

const Footer2 = () => {
  return (
    <>
      <div className='Footer bg-primary'>
        <Container className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-5 col-12 ft-1'>
              <h3>
                <span>Book</span>Store
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum ea quo ex ullam laboriosam magni totam, facere eos iure
                voluptate.
              </p>
              <div className='footer-icons'>
                <FontAwesomeIcon icon={faEnvelope} />
                <FontAwesomeIcon icon='fa-brands fa-twitter' />
                <FontAwesomeIcon icon='fa-solid fa-coffee' size='xs' />
                <i className='fa-brands fa-instagram'></i>
                <i className='fa-brands fa-linkedin-in'></i>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-12 ft-2'>
              <h5>Quick Links</h5>
              <ul>
                <li className='nav-item'>
                  <a className='' href='/'>
                    Services
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='' href='/'>
                    Portfolio
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='' href='/'>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-6 col-lg-4 col-12 ft-3'>
              <h5>Quick Links</h5>
              <p>
                <FontAwesomeIcon icon='fa-solid fa-check-square' />
                <i className='fa-solid fa-phone-volume'></i> +1 444 444 4444
              </p>
              <p>
                <i className='fa-solid fa-envelope'></i> admin@gmail.com
              </p>
              <p>
                <i className='fa-solid fa-paper-plane'></i> Zaki Mafraji
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer2;
