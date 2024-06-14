import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const LoginModal = (props) => {
  const { onHide, openSignUpModal, openForgotPasswordModal } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      onHide(false);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormContainer>
          <Form onSubmit={submitHandler}>
            <Form.Group className='my-2' controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className='my-2' controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button disabled={isLoading} type='submit' variant='primary'>
              Sign In
            </Button>

            {isLoading && <Loader />}
          </Form>

          <Row className='py-3'>
            <Col>
              New Customer?{' '}
              <Link
                to=''
                onClick={() => {
                  openSignUpModal(true);
                  onHide(false);
                }}
              >
                Register
              </Link>
            </Col>
          </Row>
          <Row className='py-1'>
            <Col>
              <Link
                to=''
                onClick={() => {
                  openForgotPasswordModal(true);
                  onHide(false);
                }}
              >
                Forgot Password
              </Link>
            </Col>
          </Row>
        </FormContainer>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
