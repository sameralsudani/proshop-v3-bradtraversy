import React from 'react';
import './homeScreen2.css';
const image1 = require('../assets/images/header-course.png');
const image2 = require('../assets/images/description-1.jpg');
const image3 = require('../assets/images/description-2.jpg');
const image4 = require('../assets/images/description-3.jpg');
const image5 = require('../assets/images/description-4.jpg');
const image6 = require('../assets/images/description-5.jpg');
const image7 = require('../assets/images/description-6.jpg');

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
            <a href='#' className='btn'>
              $29 Get Course
            </a>
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
                <img src={image7} alt='alternative' />
              </div>
              <div className='topic-text'>
                <h3>Choose High-Quality HTML Templates</h3>
              </div>
            </div>
            <div className='topic'>
              <div className='topic-image'>
                <img src={image3} alt='alternative' />
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
                <img src={image3} alt='alternative' />
              </div>
              <div className='topic-text'>
                <h3>Launch Your Project Successfully Online</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Chapter Section */}
      <section className='chapters section' id='chapters'>
        <div className='container2'>
          <div className='section-header'>
            <h2>Main Course Chapters</h2>
            <div className='heading-border'></div>
            <p>
              Explore the core concepts and techniques covered in our video
              course. Each chapter is designed to equip you with essential
              skills for video creation.
            </p>
          </div>
          <div className='chapter-cards'>
            <div className='card'>
              <img src='../images/chapters-icon-1.svg' alt='chapter 1' />
              <h3>Setting Clear Objectives</h3>
              <p>
                Learn how to define clear objectives and goals for your video
                projects, ensuring focus and direction
              </p>
            </div>
            <div className='card'>
              <img src='../images/chapters-icon-2.svg' alt='chapter 2' />
              <h3>Content Creation Strategies</h3>
              <p>
                Dive into effective content creation strategies that resonate
                with your audience
              </p>
            </div>
            <div className='card'>
              <img src='../images/chapters-icon-3.svg' alt='chapter 3' />
              <h3>Coding Essentials</h3>
              <p>
                Explore the fundamentals of coding for video projects, including
                HTML, CSS, and JavaScript
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Summary */}
      <section className='summary' id='summary'>
        <div className='container2'>
          <div className='section-header'>
            <h2>Course Summary</h2>
            <div className='heading-border'></div>
          </div>
          <div className='section-lists'>
            <div className='list'>
              <div className='list-header'>Setting Clear Objectives</div>
              <div className='list-item'>
                1.1 Learn to set clear and achievable objectives for your video
                projects, ensuring alignment with your overall goals.
              </div>
              <div className='list-item'>
                1.2 Explore strategies for defining specific objectives that
                guide the direction of your project and facilitate success.
              </div>
              <div className='list-item'>
                1.3 Understand the importance of setting measurable objectives
                to evaluate the effectiveness of your video content.
              </div>
            </div>

            <div className='list'>
              <div className='list-header'>Content Creation Strategies</div>
              <div className='list-item'>
                2.1 Discover effective content creation strategies tailored to
                engage your target audience and convey your message effectively.
              </div>
              <div className='list-item'>
                2.2 Learn to craft compelling video content that resonates with
                viewers and inspires action, using storytelling and visual
                techniques.
              </div>
              <div className='list-item'>
                2.3 Explore methods for optimizing content creation processes to
                streamline production and maximize impact.
              </div>
            </div>

            <div className='list'>
              <div className='list-header'>From Layout To HTML/CSS</div>
              <div className='list-item'>
                3.1 Master the transition from layout design to HTML/CSS
                implementation, ensuring seamless translation of visual concepts
              </div>
              <div className='list-item'>
                3.2 Dive into best practices for coding HTML and CSS, including
                responsive design principles and optimization techniques
              </div>
              <div className='list-item'>
                3.3 Gain proficiency in converting design mockups into
                interactive web pages, incorporating CSS styling and layout
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className='info' id='info'>
        <div className='info-container2'>
          <div className='info-left'></div>
          <div className='info-content'>
            <h2>Who Is This Course For?</h2>
            <p>
              This course is designed for individuals seeking to enhance their
              skills and knowledge in web design, development, and digital
              marketing. Whether you are a seasoned web designer, a budding web
              developer or a marketing professional looking to expand your skill
              set.
            </p>
            <ul>
              <li>
                <i className='fas fa-check'></i> Web Designers
              </li>
              <li>
                <i className='fas fa-check'></i> Web Developers
              </li>
              <li>
                <i className='fas fa-check'></i> Marketing Professionals
              </li>
              <li>
                <i className='fas fa-check'></i> Entreprenuers
              </li>
              <li>
                <i className='fas fa-check'></i> Business Owners
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Takeaways */}
      <section className='takeaways section' id='takeaways'>
        <div className='container2'>
          <div className='section-header'>
            <h2>Key Takeaways</h2>
            <div className='heading-border'></div>
            <p>
              This section highlights some of the key insights and learnings
              you'll gain from the course. Take a look at what you can expect to
              achieve:
            </p>
          </div>
          <div className='takeaways-cards'>
            <div className='card'>
              <i className='fas fa-rocket fa-3x text-primary'></i>
              <p>
                <strong>Enhanced Skills</strong> - Develop advanced skills in
                web design & development
              </p>
            </div>
            <div className='card'>
              <i className='fas fa-globe fa-3x text-primary'></i>
              <p>
                <strong>Global Perspective</strong> - Gain insights into
                industry trends and best practices
              </p>
            </div>
            <div className='card'>
              <i className='fas fa-cloud fa-3x text-primary'></i>
              <p>
                <strong>Cloud Technology</strong> - Explore the latest cloud
                technologies and tools
              </p>
            </div>
            <div className='card'>
              <i className='fas fa-user fa-3x text-primary'></i>
              <p>
                <strong>Networking </strong> - Connect with fellow professionals
                and expand your network
              </p>
            </div>
            <div className='card'>
              <i className='fas fa-cog fa-3x text-primary'></i>
              <p>
                <strong>Problem-Solving</strong> - Enhance your problem-solving
                abilities and critical thinking skills
              </p>
            </div>
            <div className='card'>
              <i className='fas fa-server fa-3x text-primary'></i>
              <p>
                <strong>Technical Proficiency</strong> - Improve your technical
                proficiency and stay ahead in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className='details section' id='details'>
        <div className='container2 details-flex'>
          <img src='../images/details.png' alt='details' />
          <div className='details-content'>
            <h2>Course Details</h2>
            <div className='heading-border'></div>
            <p>
              Gain insight into the course curriculum, structure, and what to
              expect throughout your learning journey.
            </p>
            <a href='#' className='btn'>
              See Details
            </a>
          </div>
        </div>
      </section>

      {/* Author Info */}
      <section className='details section' id='author'>
        <div className='container2 details-flex'>
          <img src='../images/author.png' alt='details' />
          <div className='details-content'>
            <h2>Author Information</h2>
            <div className='heading-border'></div>
            <p>
              Learn about the author's background, expertise, and contributions
              to the course content.
            </p>
            <ul>
              <li>
                <i className='fas fa-chevron-circle-right text-primary'></i>
                <strong> Expertise: </strong> Lorem ipsum dolor sit amet
                consectetur.
              </li>
              <li>
                <i className='fas fa-chevron-circle-right text-primary'></i>
                <strong>Experience:</strong> Blandit turpis a est eget augue
                ornare.
              </li>
              <li>
                <i className='fas fa-chevron-circle-right text-primary'></i>
                <strong>Skills:</strong> Sed vulputate aliquet eget non velit.
              </li>
            </ul>
            <a href='#' className='btn'>
              See Details
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className='stats section' id='stats'>
        <div className='container2 stats-flex'>
          <img src='../images/stats.png' alt='stats' />
          <div className='stats-content'>
            <div className='stats-numbers'>
              <div>
                <h3>2000+</h3>
                <p>Happy Users</p>
              </div>
              <div>
                <h3>358</h3>
                <p>Issues Solved</p>
              </div>
              <div>
                <h3>980</h3>
                <p>Good Reviews</p>
              </div>
              <div>
                <h3>216</h3>
                <p>Case Studies</p>
              </div>
            </div>

            <p className='stats-text'>
              Tutor is probably one of the best video courses on landing page
              making in the web industry
            </p>
            <a href='#' className='btn'>
              Get The Course
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className='newsletter section' id='newsletter'>
        <div className='container2 newsletter-flex'>
          <h2>Subscribe To Our Newsletter</h2>
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
            <button type='submit' className='btn'>
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
