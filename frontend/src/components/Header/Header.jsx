import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { logout } from '../../slices/authSlice';
import LoginModal from '../LoginModal';
import SignUpModal from '../SignUpModal';
import ForgotPasswordModal from '../ForgotPasswordModal';
import { FaBookReader } from 'react-icons/fa';
import { resetCart } from '../../slices/cartSlice';
import { useState } from 'react';
import './header.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './header.css';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart());
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  // Change navbar background on scroll
  useEffect(() => {
    window.addEventListener('scroll', function () {
      const navbar = document.querySelector('.navbar');

      if (window.scrollY > 0) {
        navbar.classList.add('navbar-scroll');
      } else {
        navbar.classList.remove('navbar-scroll');
      }
    });

    // return () => window.removeEventListener(scroll);
  }, []);

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

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
  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  return (
    <header
      style={
        location.pathname !== '/'
          ? { marginBottom: '100px' }
          : { marginBottom: '' }
      }
    >
      <Navbar
        style={
          location.pathname !== '/'
            ? {
                backgroundColor: 'rgba(235, 77, 85, 0.8)',
                backdropFilter: 'blur(10px)',
              }
            : { backgroundColor: '', backdropFilter: '' }
        }
        className='navbar'
        expand='lg'
        collapseOnSelect
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <FaBookReader className='logo' />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <div className='navbar-flex container'>
                <div className='main-menu-items'>
                  <ul className='main-menu-list'>
                    <li>
                      <a href='#'>Home</a>
                    </li>
                    <li>
                      <LinkContainer to='/cart'>
                        <Nav.Link>
                          <FaShoppingCart /> Cart
                          {cartItems.length > 0 && (
                            <Badge
                              pill
                              bg='success'
                              style={{ marginLeft: '5px' }}
                            >
                              {cartItems.reduce((a, c) => a + c.qty, 0)}
                            </Badge>
                          )}
                        </Nav.Link>
                      </LinkContainer>
                    </li>

                    <li
                      onMouseEnter={onMouseEnter2}
                      onMouseLeave={onMouseLeave2}
                    >
                      <Link title='Books' id='book-menu'>
                        Clubs
                      </Link>
                      {dropdown2 && <Dropdown2 />}
                    </li>

                    <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                      <Link title='Books' id='book-menu'>
                        Books
                      </Link>
                      {dropdown && <Dropdown />}
                    </li>

                    <li>
                      <a href='#'>Contact</a>
                    </li>

                    {/* Admin Links */}
                    {userInfo && userInfo.isAdmin && (
                      <NavDropdown title='Admin' id='adminmenu'>
                        <LinkContainer to='/admin/bookList'>
                          <NavDropdown.Item>Books</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/admin/orderlist'>
                          <NavDropdown.Item>Orders</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/admin/userlist'>
                          <NavDropdown.Item>Users</NavDropdown.Item>
                        </LinkContainer>
                      </NavDropdown>
                    )}

                    {userInfo ? (
                      <>
                        <NavDropdown title={userInfo.name} id='username'>
                          <LinkContainer to='/profile'>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                          </LinkContainer>
                          <NavDropdown.Item onClick={logoutHandler}>
                            Logout
                          </NavDropdown.Item>
                        </NavDropdown>
                      </>
                    ) : (
                      <li>
                        <LinkContainer
                          to=''
                          onClick={() => {
                            setModalShow(true);
                          }}
                          style={{ color: 'white' }}
                        >
                          <Nav.Link>
                            <FaUser />
                          </Nav.Link>
                        </LinkContainer>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Mobile Menu */}
                <div className='mobile-menu'>
                  {/* Hamburger button */}
                  <div className='mobile-menu-toggle'>
                    <i className='fas fa-bars fa-2x'></i>
                  </div>
                  {/* Mobile Menu Items */}
                  <div className='mobile-menu-items'>
                    <ul className='mobile-menu-list'>
                      <li>
                        <a href='index.html'>Home</a>
                      </li>
                      <li>
                        <LinkContainer to='/cart'>
                          <Nav.Link>
                            <FaShoppingCart /> Cart
                            {cartItems.length > 0 && (
                              <Badge
                                pill
                                bg='success'
                                style={{ marginLeft: '5px' }}
                              >
                                {cartItems.reduce((a, c) => a + c.qty, 0)}
                              </Badge>
                            )}
                          </Nav.Link>
                        </LinkContainer>
                      </li>
                      <li>
                        <a href='#summary'>Clubs</a>
                      </li>
                      <li>
                        <a href='#takeaways'>Events</a>
                      </li>

                      <li>
                        <a href='contact.html'>Contact</a>
                      </li>
                      <li>
                        <a href='facebook.com' target='_blank'>
                          <i className='fa-brands fa-facebook'></i>
                        </a>
                      </li>
                      <li>
                        <a href='twitter.com' target='_blank'>
                          <i className='fa-brands fa-twitter'></i>
                        </a>
                      </li>
                      <li>
                        <LinkContainer
                          to=''
                          onClick={() => {
                            setModalShow(true);
                          }}
                          style={{ color: 'white' }}
                        >
                          <Nav.Link>
                            <FaUser /> Sign In
                          </Nav.Link>
                        </LinkContainer>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LoginModal
        show={modalShow}
        onHide={(value) => setModalShow(value)}
        openSignUpModal={(value) => setModalShow2(value)}
        openForgotPasswordModal={(value) => setModalShow3(value)}
      />

      <SignUpModal
        show={modalShow2}
        onHide={(value) => setModalShow2(value)}
        openLoginModal={(value) => setModalShow(value)}
      />

      <ForgotPasswordModal
        show={modalShow3}
        onHide={(value) => setModalShow3(value)}
      />
    </header>
  );
};

export default Header;
