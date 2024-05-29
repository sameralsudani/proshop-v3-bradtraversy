import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { toast } from 'react-toastify';

function ForgotPasswordScreen() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/forgotPassword', { email })
      .then((res) => {
        if (res.data.Status === 'Success') {
          navigate('/checkEmail');
        }
      })
      .catch((err) => toast.error(err?.data?.message || err.error));
  };

  return (
    <FormContainer>
      <h1>Forgot Password</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Send
        </Button>
      </Form>
    </FormContainer>
  );
}

export default ForgotPasswordScreen;
