import { Button, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { addMyRestaurant } from '../../slices/updateMyRestaurant';
import { Form } from 'react-bootstrap';
import FormContainer from '../../components/FormContainer';
import { useNavigate } from 'react-router-dom';
import { useGetRestaurantsQuery } from '../../slices/restaurantApiSlice';

const AddRestaurantScreen = () => {
  const { refetch } = useGetRestaurantsQuery({});

  const navigate = useNavigate();
  const [restaurantName, setRestaurantName] = useState('');

  const [imageFile, setImageFile] = useState('');
  const { userInfo } = useSelector((state) => state.auth);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('userId', userInfo._id);
    formData.append('restaurantName', restaurantName);
    if (imageFile) {
      formData.append(`imageFile`, imageFile);
    }
    addMyRestaurant(formData);
    toast.success('Restaurant added');
    refetch();
    navigate('/admin/restaurantList');
  };

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <FormContainer>
            <h1>Add Restaurant</h1>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter name'
                  value={restaurantName}
                  onChange={(e) => setRestaurantName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='image'>
                <Form.Label>Image</Form.Label>

                <Form.Control
                  label='Choose File'
                  onChange={(e) => setImageFile(e.target.files[0])}
                  type='file'
                ></Form.Control>
              </Form.Group>

              <Button
                type='submit'
                variant='primary'
                style={{ marginTop: '1rem' }}
              >
                Add
              </Button>
            </Form>
          </FormContainer>
        </Col>
      </Row>
    </>
  );
};

export default AddRestaurantScreen;
