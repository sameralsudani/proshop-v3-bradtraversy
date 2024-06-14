import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPasswordModal = (props) => {
  const { onHide } = props;
  const [email, setEmail] = useState();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/forgotPassword', { email })
      .then((res) => {
        if (res.data.Status === 'Success') {
          onHide(false);
          toast.success('Check you email to reset your paaword');
        }
      })
      .catch((err) => toast.error(err?.data?.message || err.error));
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Forgot Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormContainer>
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
      </Modal.Body>
    </Modal>
  );
};

export default ForgotPasswordModal;
