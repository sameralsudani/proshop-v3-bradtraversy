import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
import Dropdown3 from './Dropdown3';
import Dropdown4 from './Dropdown4';

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

  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);

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
  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };

  const onMouseEnter4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(true);
    }
  };

  const onMouseLeave4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(false);
    }
  };
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        expand='lg'
        collapseOnSelect
        bg='primary'
        variant='dark'
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
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              {/* Laptop */}
              {width >= 991 ? (
                <LinkContainer
                  to=''
                  onMouseEnter={onMouseEnter2}
                  onMouseLeave={onMouseLeave2}
                >
                  <Nav.Link title='Clubs' id='book-menu'>
                    Clubs {dropdown2 && <Dropdown2 />}
                  </Nav.Link>
                </LinkContainer>
              ) : (
                // Mobile and Tablet only
                <NavDropdown title='Clubs' id='adminmenu'>
                  <LinkContainer to='/funClub/subsciptipns'>
                    <NavDropdown.Item>Fun Club</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/readingClub/subsciptipns'>
                    <NavDropdown.Item>Reading Club</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}

              {/* Laptop */}
              {width >= 991 ? (
                <LinkContainer
                  to=''
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <Nav.Link title='Books' id='book-menu'>
                    Books {dropdown && <Dropdown />}
                  </Nav.Link>
                </LinkContainer>
              ) : (
                // Mobile and Tablet only
                <NavDropdown title='Books' id='adminmenu'>
                  <LinkContainer to='/books/fiction'>
                    <NavDropdown.Item>Fiction</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/books/shopAllproducts'>
                    <NavDropdown.Item>Shop All Books</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/books/valuePacks'>
                    <NavDropdown.Item>Value Packs</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/books/fiveOrLess'>
                    <NavDropdown.Item>$5 or Less</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/books/nonfiction'>
                    <NavDropdown.Item>Nonfiction</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}

              {/* Admin Links */}
              {userInfo && userInfo.isAdmin && width >= 991 && (
                <LinkContainer
                  to=''
                  onMouseEnter={onMouseEnter3}
                  onMouseLeave={onMouseLeave3}
                >
                  <Nav.Link title='Admin' id='book-menu'>
                    Admin {dropdown3 && <Dropdown3 />}
                  </Nav.Link>
                </LinkContainer>
              )}

              {/* Admin Links */}
              {userInfo && userInfo.isAdmin && width < 991 && (
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
              {/* Mobil */}
              {width < 991 && (
                <>
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
                    </>
                  ) : (
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
                  )}
                </>
              )}

              {/* laptop */}
              {width >= 991 && (
                <>
                  {userInfo ? (
                    <>
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
                      <LinkContainer
                        to=''
                        onMouseEnter={onMouseEnter4}
                        onMouseLeave={onMouseLeave4}
                      >
                        <Nav.Link title='Admin' id='book-menu'>
                          {userInfo.name}
                          {dropdown4 && (
                            <Dropdown4 logoutHandler={logoutHandler} />
                          )}
                        </Nav.Link>
                      </LinkContainer>
                    </>
                  ) : (
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
                  )}
                </>
              )}
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
