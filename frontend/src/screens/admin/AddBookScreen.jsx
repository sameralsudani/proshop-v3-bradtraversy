import { Button, Row, Col, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { addBook } from '../../slices/booksApiSlice2';
import { Form } from 'react-bootstrap';
import FormContainer from '../../components/FormContainer';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetBooksByCategoryQuery } from '../../slices/booksApiSlice';
import { Container } from 'react-bootstrap';

const AddBookScreen = () => {
  const { id } = useParams();
  const { data, refetch } = useGetBooksByCategoryQuery({
    category: 'shopAllproducts',
    pageNumber: 1,
  });
  const navigate = useNavigate();

  const book = data?.books?.find((item) => {
    return item._id === id;
  });

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(null);
  const [countInStock, setCountInStock] = useState(null);
  const [pages, setPages] = useState(null);
  const [author, setAuthor] = useState('');
  const [vender, setVender] = useState('');

  const [imageFile, setImageFile] = useState('');

  const { userInfo } = useSelector((state) => state.auth);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('userId', userInfo._id);
    formData.append('title', title);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('countInStock', countInStock);
    formData.append('pages', pages);
    formData.append('author', author);
    formData.append('vender', vender);

    if (imageFile) {
      formData.append(`imageFile`, imageFile);
    }
    addBook(formData);
    toast.success('Book added');
    refetch();
    navigate('/admin/bookList');
  };

  return (
    <Container>
      <Row className='align-items-center'>
        <Col>
          <FormContainer>
            <h2>Add Book</h2>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId='name'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type='title'
                  placeholder='Enter title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='category'>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type='category'
                  placeholder='Enter category'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='Description'>
                <Form.Label>description</Form.Label>
                <Form.Control
                  type='description'
                  placeholder='Enter description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='price'>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type='price'
                  placeholder='Enter price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='countInStock'>
                <Form.Label>Count In Stock</Form.Label>
                <Form.Control
                  type='countInStock'
                  placeholder='Enter Count In Stock'
                  value={countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='pages'>
                <Form.Label>Pages</Form.Label>
                <Form.Control
                  type='pages'
                  placeholder='Enter pages'
                  value={pages}
                  onChange={(e) => setPages(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='author'>
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type='author'
                  placeholder='Enter author'
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='name'>
                <Form.Label>Vender</Form.Label>
                <Form.Control
                  type='vender'
                  placeholder='Enter vender'
                  value={vender}
                  onChange={(e) => setVender(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='image'>
                <Form.Label>Image</Form.Label>
                <Image src={book?.imageLink} alt={book?.title} fluid />
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
    </Container>
  );
};

export default AddBookScreen;
