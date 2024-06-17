import React from 'react';
import './homeScreen2.css';
import CarouselContainer from '../components/CarouselContainer';
import CarouselContainer2 from '../components/CarouselContainer2';
import { Button } from 'react-bootstrap';

const image1 = require('../assets/images/header-course.png');
const image2 = require('../assets/images/description-1.jpg');
const image3 = require('../assets/images/description-2.jpg');
const image4 = require('../assets/images/description-3.jpg');
const image5 = require('../assets/images/description-4.jpg');
const image6 = require('../assets/images/description-5.jpg');
const image7 = require('../assets/images/description-6.jpg');
const image8 = require('../assets/images/description-7.jpg');
const image9 = require('../assets/images/description-8.jpg');

export default function HomeScreen2() {
  return (
    <>
      {/* Hero */}
      <header className='hero'>
        <div className='container2 hero-flex'>
          <div className='hero-content'>
            <h1>Create Your Own Video Courses</h1>
            <p>
              Dive deep into the world of creativity and learn to craft stunning
              videos that captivate your audience.
            </p>

            <Button className='hero-btn'>JOIN US</Button>
          </div>
          <img src={image1} alt='hero' />
        </div>
        <svg
          class='frame-decoration'
          data-name='Layer 2'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          viewBox='0 0 1920 192.275'
        >
          <title>frame-decoration</title>
          <path
            className='cls-1'
            d='M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z'
            transform='translate(0 -158.755)'
          />
        </svg>
      </header>

      {/* Learn Section */}
      <section className='learn'>
        <div className='container2'>
          <div className='section-header'>
            <h2>What Will You Learn?</h2>
            <div className='heading-border'></div>
            <p>
              Embark on a journey of learning with our comprehensive video
              courses. Discover the secrets of successful video creation and
              enhance your skills.
            </p>
          </div>

          <div className='topics'>
            <div className='topic'>
              <div className='topic-image'>
                <img src={image2} alt='topic' />
              </div>
              <div className='topic-text'>
                <h3>Set Clear Objectives and Goals</h3>
              </div>
            </div>
            <div className='topic'>
              <div className='topic-image'>
                <img src={image3} alt='alternative' />
              </div>
              <div className='topic-text'>
                <h3>Plan Layout And Design Elements</h3>
              </div>
            </div>
            <div className='topic'>
              <div className='topic-image'>
                <img src={image5} alt='alternative' />
              </div>
              <div className='topic-text'>
                <h3>Sketch Creative Concepts</h3>
              </div>
            </div>
            <div className='topic'>
              <div className='topic-image'>
                <img src={image6} alt='alternative' />
              </div>
              <div className='topic-text'>
                <h3>Establish Strong Call-to-Actions</h3>
              </div>
            </div>
            <div className='topic'>
              <div className='topic-image'>
                <img src={image9} alt='alternative' />
              </div>
              <div className='topic-text'>
                <h3>Choose High-Quality HTML Templates</h3>
              </div>
            </div>
            <div className='topic'>
              <div className='topic-image'>
                <img src={image7} alt='alternative' />
              </div>
              <div className='topic-text'>
                <h3>Master Landing Page Coding Techniques</h3>
              </div>
            </div>
            <div className='topic'>
              <div className='topic-image'>
                <img src={image4} alt='alternative' />
              </div>
              <div className='topic-text'>
                <h3>Master Landing Page Coding Techniques</h3>
              </div>
            </div>
            <div className='topic'>
              <div className='topic-image'>
                <img src={image8} alt='alternative' />
              </div>
              <div className='topic-text'>
                <h3>Launch Your Project Successfully Online</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CarouselContainer />
      <CarouselContainer2 />

      {/* Newsletter */}
      <section className='newsletter section' id='newsletter'>
        <div className='container2 newsletter-flex'>
          <h2>Contact Us</h2>
          <p>
            Stay updated with the latest news, offers, and insights from our
            platform. Join our newsletter community today!
          </p>
          <form>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
            />

            <Button className='hero-btn'> Send</Button>
          </form>
        </div>
      </section>
    </>
  );
}
