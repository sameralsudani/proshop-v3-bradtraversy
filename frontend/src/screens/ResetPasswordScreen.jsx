import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { toast } from 'react-toastify';

function ResetPasswordScreen() {
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { id, token } = useParams();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/resetPassword/${id}/${token}`, { password })
      .then((res) => {
        if (res.data.Status === 'Success') {
          navigate('/login');
          toast.success('Your password has been reset please login');
        }
      })
      .catch((err) => toast.error(err?.data?.message || err.error));
  };

  return (
    <FormContainer>
      <h1>Reset Password</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className='my-2' controlId='password'>
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Update
        </Button>
      </Form>
    </FormContainer>
  );
}

export default ResetPasswordScreen;
