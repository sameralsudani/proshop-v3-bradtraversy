import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { FaBookReader } from 'react-icons/fa';
import { resetCart } from '../slices/cartSlice';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <FaBookReader
                style={{
                  height: '40px',
                  width: '40px',
                }}
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {/* <SearchBox /> */}
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <FaShoppingCart /> Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              <NavDropdown
                title='Books'
                id='book-menu'
                style={{ color: 'white' }}
              >
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
                <LinkContainer to='/books/graphicNovels'>
                  <NavDropdown.Item>Graphic Novels</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title='Clubs' id='club-menu'>
                <LinkContainer to='/clubs/article'>
                  <NavDropdown.Item>Fun Club</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/clubs/article'>
                  <NavDropdown.Item>Reading Club</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

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
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <FaUser /> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}

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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
