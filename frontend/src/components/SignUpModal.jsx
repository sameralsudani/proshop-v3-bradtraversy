import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Loader from './Loader';
import FormContainer from './FormContainer';
import { useRegisterMutation } from '../slices/usersApiSlice';

import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const SignUpModal = (props) => {
  const { onHide, openLoginModal, refetch, isClub } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        if (isClub) {
          refetch();
        }
        onHide(false);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
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
        <Modal.Title id='contained-modal-title-vcenter'>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormContainer>
          <Form onSubmit={submitHandler}>
            <Form.Group className='my-2' controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

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
            <Form.Group className='my-2' controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button disabled={isLoading} type='submit' variant='primary'>
              Register
            </Button>

            {isLoading && <Loader />}
          </Form>

          <Row className='py-3'>
            <Col>
              Already have an account?{' '}
              <Link
                to=''
                onClick={() => {
                  openLoginModal(true);
                  onHide(false);
                }}
              >
                Login
              </Link>
            </Col>
          </Row>
        </FormContainer>
      </Modal.Body>
    </Modal>
  );
};

export default SignUpModal;
